"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { AuthHeader } from "@/components/auth-header"
import { Search, TrendingUp, TrendingDown, Minus, RefreshCw, BarChart3, Download, Bell } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts"

// Mock data for market prices
const marketData = [
  {
    crop: "Wheat",
    market: "Delhi Mandi",
    currentPrice: 2150,
    previousPrice: 2100,
    change: 50,
    changePercent: 2.38,
    unit: "per quintal",
    lastUpdated: "2 hours ago",
  },
  {
    crop: "Rice",
    market: "Punjab Mandi",
    currentPrice: 3200,
    previousPrice: 3250,
    change: -50,
    changePercent: -1.54,
    unit: "per quintal",
    lastUpdated: "1 hour ago",
  },
  {
    crop: "Sugarcane",
    market: "UP Mandi",
    currentPrice: 350,
    previousPrice: 340,
    change: 10,
    changePercent: 2.94,
    unit: "per quintal",
    lastUpdated: "3 hours ago",
  },
  {
    crop: "Cotton",
    market: "Gujarat Mandi",
    currentPrice: 5800,
    previousPrice: 5800,
    change: 0,
    changePercent: 0,
    unit: "per quintal",
    lastUpdated: "30 minutes ago",
  },
  {
    crop: "Tomato",
    market: "Karnataka Mandi",
    currentPrice: 1200,
    previousPrice: 1400,
    change: -200,
    changePercent: -14.29,
    unit: "per quintal",
    lastUpdated: "1 hour ago",
  },
  {
    crop: "Onion",
    market: "Maharashtra Mandi",
    currentPrice: 800,
    previousPrice: 750,
    change: 50,
    changePercent: 6.67,
    unit: "per quintal",
    lastUpdated: "2 hours ago",
  },
  {
    crop: "Potato",
    market: "West Bengal Mandi",
    currentPrice: 1500,
    previousPrice: 1450,
    change: 50,
    changePercent: 3.45,
    unit: "per quintal",
    lastUpdated: "4 hours ago",
  },
  {
    crop: "Maize",
    market: "Rajasthan Mandi",
    currentPrice: 1800,
    previousPrice: 1820,
    change: -20,
    changePercent: -1.1,
    unit: "per quintal",
    lastUpdated: "1 hour ago",
  },
]

// Historical price data for charts
const historicalPriceData = [
  { date: "1 Week", wheat: 2100, rice: 3250, cotton: 5700, tomato: 1400 },
  { date: "6 Days", wheat: 2120, rice: 3230, cotton: 5750, tomato: 1350 },
  { date: "5 Days", wheat: 2110, rice: 3200, cotton: 5800, tomato: 1300 },
  { date: "4 Days", wheat: 2130, rice: 3180, cotton: 5820, tomato: 1250 },
  { date: "3 Days", wheat: 2140, rice: 3190, cotton: 5850, tomato: 1200 },
  { date: "2 Days", wheat: 2145, rice: 3210, cotton: 5880, tomato: 1180 },
  { date: "Today", wheat: 2150, rice: 3200, cotton: 5800, tomato: 1200 },
]

export default function PricesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedMarket, setSelectedMarket] = useState("all")
  const [selectedCrop, setSelectedCrop] = useState("all")
  const [viewMode, setViewMode] = useState("table")

  const filteredData = marketData.filter((item) => {
    const matchesSearch =
      item.crop.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.market.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesMarket = selectedMarket === "all" || item.market === selectedMarket
    const matchesCrop = selectedCrop === "all" || item.crop === selectedCrop

    return matchesSearch && matchesMarket && matchesCrop
  })

  const getTrendIcon = (change: number) => {
    if (change > 0) return <TrendingUp className="w-4 h-4 text-green-600" />
    if (change < 0) return <TrendingDown className="w-4 h-4 text-red-600" />
    return <Minus className="w-4 h-4 text-gray-500" />
  }

  const getTrendColor = (change: number) => {
    if (change > 0) return "text-green-600"
    if (change < 0) return "text-red-600"
    return "text-gray-500"
  }

  const uniqueMarkets = [...new Set(marketData.map((item) => item.market))]
  const uniqueCrops = [...new Set(marketData.map((item) => item.crop))]

  return (
    <div className="min-h-screen bg-gray-50">
      <AuthHeader />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Live Market Prices</h1>
              <p className="text-muted-foreground">Real-time crop prices from major mandis across India</p>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === "table" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("table")}
              >
                Table
              </Button>
              <Button
                variant={viewMode === "charts" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("charts")}
              >
                <BarChart3 className="w-4 h-4 mr-1" />
                Charts
              </Button>
              <Button variant="outline" size="sm">
                <Bell className="w-4 h-4 mr-1" />
                Alerts
              </Button>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-1" />
                Export
              </Button>
            </div>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Markets</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{uniqueMarkets.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Crops Tracked</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{uniqueCrops.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Price Increases</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">
                {marketData.filter((item) => item.change > 0).length}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Price Decreases</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">
                {marketData.filter((item) => item.change < 0).length}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Filter Prices</CardTitle>
            <CardDescription>Search and filter market prices by crop or location</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search crops or markets..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={selectedCrop} onValueChange={setSelectedCrop}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Select crop" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Crops</SelectItem>
                  {uniqueCrops.map((crop) => (
                    <SelectItem key={crop} value={crop}>
                      {crop}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedMarket} onValueChange={setSelectedMarket}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Select market" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Markets</SelectItem>
                  {uniqueMarkets.map((market) => (
                    <SelectItem key={market} value={market}>
                      {market}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon">
                <RefreshCw className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Charts View Mode */}
        {viewMode === "charts" && (
          <div className="grid lg:grid-cols-2 gap-6 mb-6">
            <Card>
              <CardHeader>
                <CardTitle>Price Trends (7 Days)</CardTitle>
                <CardDescription>Historical price movements for major crops</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={historicalPriceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`₹${value}`, ""]} />
                    <Line type="monotone" dataKey="wheat" stroke="#8884d8" strokeWidth={2} name="Wheat" />
                    <Line type="monotone" dataKey="rice" stroke="#82ca9d" strokeWidth={2} name="Rice" />
                    <Line type="monotone" dataKey="cotton" stroke="#ffc658" strokeWidth={2} name="Cotton" />
                    <Line type="monotone" dataKey="tomato" stroke="#ff7300" strokeWidth={2} name="Tomato" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Market Volatility</CardTitle>
                <CardDescription>Price volatility analysis across different crops</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={historicalPriceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`₹${value}`, ""]} />
                    <Area
                      type="monotone"
                      dataKey="tomato"
                      stackId="1"
                      stroke="#ff7300"
                      fill="#ff7300"
                      fillOpacity={0.6}
                      name="Tomato"
                    />
                    <Area
                      type="monotone"
                      dataKey="wheat"
                      stackId="2"
                      stroke="#8884d8"
                      fill="#8884d8"
                      fillOpacity={0.6}
                      name="Wheat"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Price Table */}
        {viewMode === "table" && (
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Market Prices</CardTitle>
                  <CardDescription>Latest prices from major mandis</CardDescription>
                </div>
                <Badge variant="secondary">Live Data</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Crop</TableHead>
                      <TableHead>Market</TableHead>
                      <TableHead className="text-right">Current Price</TableHead>
                      <TableHead className="text-right">Change</TableHead>
                      <TableHead className="text-right">% Change</TableHead>
                      <TableHead>Last Updated</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredData.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{item.crop}</TableCell>
                        <TableCell className="text-muted-foreground">{item.market}</TableCell>
                        <TableCell className="text-right font-semibold">
                          ₹{item.currentPrice.toLocaleString()}
                          <div className="text-xs text-muted-foreground">{item.unit}</div>
                        </TableCell>
                        <TableCell className={`text-right ${getTrendColor(item.change)}`}>
                          <div className="flex items-center justify-end gap-1">
                            {getTrendIcon(item.change)}₹{Math.abs(item.change)}
                          </div>
                        </TableCell>
                        <TableCell className={`text-right font-medium ${getTrendColor(item.change)}`}>
                          {item.changePercent > 0 ? "+" : ""}
                          {item.changePercent.toFixed(2)}%
                        </TableCell>
                        <TableCell className="text-muted-foreground text-sm">{item.lastUpdated}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              {filteredData.length === 0 && (
                <div className="text-center py-8 text-muted-foreground">
                  No results found. Try adjusting your search or filters.
                </div>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
