"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { AuthHeader } from "@/components/auth-header"
import {
  TrendingUp,
  TrendingDown,
  Brain,
  Calendar,
  MapPin,
  CheckCircle,
  Clock,
  BarChart3,
  Download,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts"

// Mock AI forecast data
const forecastData = [
  {
    crop: "Wheat",
    demandScore: 85,
    trend: "increasing",
    confidence: 92,
    expectedPrice: 2300,
    currentPrice: 2150,
    priceChange: 7,
    season: "Rabi",
    region: "North India",
    factors: ["Export demand rising", "Weather conditions favorable", "Government procurement strong"],
    recommendation: "High demand expected. Good time to plant.",
    riskLevel: "low",
    timeframe: "Next 3 months",
  },
  {
    crop: "Rice",
    demandScore: 72,
    trend: "stable",
    confidence: 88,
    expectedPrice: 3100,
    currentPrice: 3200,
    priceChange: -3,
    season: "Kharif",
    region: "East India",
    factors: ["Monsoon predictions normal", "Storage levels adequate", "Export restrictions possible"],
    recommendation: "Moderate demand. Maintain current production.",
    riskLevel: "medium",
    timeframe: "Next 3 months",
  },
  {
    crop: "Cotton",
    demandScore: 91,
    trend: "increasing",
    confidence: 95,
    expectedPrice: 6200,
    currentPrice: 5800,
    priceChange: 6.9,
    season: "Kharif",
    region: "West India",
    factors: ["Textile industry recovery", "Global cotton shortage", "Quality premium expected"],
    recommendation: "Very high demand forecast. Excellent opportunity.",
    riskLevel: "low",
    timeframe: "Next 6 months",
  },
  {
    crop: "Sugarcane",
    demandScore: 68,
    trend: "decreasing",
    confidence: 78,
    expectedPrice: 330,
    currentPrice: 350,
    priceChange: -5.7,
    season: "Annual",
    region: "North India",
    factors: ["Sugar mills reducing capacity", "Alternative sweeteners rising", "Water scarcity concerns"],
    recommendation: "Demand softening. Consider alternatives.",
    riskLevel: "high",
    timeframe: "Next 4 months",
  },
  {
    crop: "Tomato",
    demandScore: 79,
    trend: "increasing",
    confidence: 82,
    expectedPrice: 1400,
    currentPrice: 1200,
    priceChange: 16.7,
    season: "Year-round",
    region: "South India",
    factors: ["Processing demand up", "Urban consumption rising", "Supply chain improvements"],
    recommendation: "Growing demand. Good prospects for cultivation.",
    riskLevel: "medium",
    timeframe: "Next 2 months",
  },
  {
    crop: "Onion",
    demandScore: 76,
    trend: "stable",
    confidence: 85,
    expectedPrice: 850,
    currentPrice: 800,
    priceChange: 6.25,
    season: "Rabi/Kharif",
    region: "West India",
    factors: ["Export demand steady", "Storage facilities improved", "Seasonal price variations"],
    recommendation: "Stable demand expected. Safe cultivation choice.",
    riskLevel: "low",
    timeframe: "Next 3 months",
  },
]

const priceChartData = [
  { month: "Jan", wheat: 2100, rice: 3100, cotton: 5500 },
  { month: "Feb", wheat: 2120, rice: 3150, cotton: 5600 },
  { month: "Mar", wheat: 2150, rice: 3200, cotton: 5800 },
  { month: "Apr", wheat: 2200, rice: 3180, cotton: 6000 },
  { month: "May", wheat: 2250, rice: 3220, cotton: 6100 },
  { month: "Jun", wheat: 2300, rice: 3100, cotton: 6200 },
]

const demandTrendData = [
  { crop: "Wheat", demand: 85, supply: 78 },
  { crop: "Rice", demand: 72, supply: 75 },
  { crop: "Cotton", demand: 91, supply: 82 },
  { crop: "Sugarcane", demand: 68, supply: 85 },
  { crop: "Tomato", demand: 79, supply: 70 },
  { crop: "Onion", demand: 76, supply: 80 },
]

export default function ForecastsPage() {
  const [selectedRegion, setSelectedRegion] = useState("all")
  const [selectedSeason, setSelectedSeason] = useState("all")
  const [timeframe, setTimeframe] = useState("3months")
  const [viewMode, setViewMode] = useState("cards")

  const filteredData = forecastData.filter((item) => {
    const matchesRegion = selectedRegion === "all" || item.region === selectedRegion
    const matchesSeason = selectedSeason === "all" || item.season === selectedSeason
    return matchesRegion && matchesSeason
  })

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "increasing":
        return <TrendingUp className="w-4 h-4 text-green-600" />
      case "decreasing":
        return <TrendingDown className="w-4 h-4 text-red-600" />
      default:
        return <div className="w-4 h-4 bg-gray-400 rounded-full" />
    }
  }

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case "increasing":
        return "text-green-600"
      case "decreasing":
        return "text-red-600"
      default:
        return "text-gray-600"
    }
  }

  const getRiskBadge = (risk: string) => {
    switch (risk) {
      case "low":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Low Risk</Badge>
      case "medium":
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Medium Risk</Badge>
      case "high":
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">High Risk</Badge>
      default:
        return <Badge variant="secondary">Unknown</Badge>
    }
  }

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600"
    if (score >= 60) return "text-yellow-600"
    return "text-red-600"
  }

  const uniqueRegions = [...new Set(forecastData.map((item) => item.region))]
  const uniqueSeasons = [...new Set(forecastData.map((item) => item.season))]

  return (
    <div className="min-h-screen bg-gray-50">
      <AuthHeader />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 mb-2">
              <Brain className="w-8 h-8 text-primary" />
              <h1 className="text-3xl font-bold text-foreground">AI Demand Forecasts</h1>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === "cards" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("cards")}
              >
                Cards
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
                <Download className="w-4 h-4 mr-1" />
                Export
              </Button>
            </div>
          </div>
          <p className="text-muted-foreground">AI-powered predictions to help you make smarter farming decisions</p>
        </div>

        {/* Summary Cards */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">High Demand Crops</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">
                {forecastData.filter((item) => item.demandScore >= 80).length}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Average Confidence</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">
                {Math.round(forecastData.reduce((acc, item) => acc + item.confidence, 0) / forecastData.length)}%
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Price Increases</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">
                {forecastData.filter((item) => item.priceChange > 0).length}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Low Risk Crops</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">
                {forecastData.filter((item) => item.riskLevel === "low").length}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Filter Forecasts</CardTitle>
            <CardDescription>Customize forecasts by region, season, and timeframe</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4">
              <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Select region" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Regions</SelectItem>
                  {uniqueRegions.map((region) => (
                    <SelectItem key={region} value={region}>
                      {region}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedSeason} onValueChange={setSelectedSeason}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Select season" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Seasons</SelectItem>
                  {uniqueSeasons.map((season) => (
                    <SelectItem key={season} value={season}>
                      {season}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={timeframe} onValueChange={setTimeframe}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Select timeframe" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1month">Next Month</SelectItem>
                  <SelectItem value="3months">Next 3 Months</SelectItem>
                  <SelectItem value="6months">Next 6 Months</SelectItem>
                  <SelectItem value="1year">Next Year</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Charts View Mode */}
        {viewMode === "charts" && (
          <div className="grid lg:grid-cols-2 gap-6 mb-6">
            <Card>
              <CardHeader>
                <CardTitle>Price Trend Forecast</CardTitle>
                <CardDescription>Expected price movements over the next 6 months</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={priceChartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`₹${value}`, ""]} />
                    <Line type="monotone" dataKey="wheat" stroke="#8884d8" strokeWidth={2} name="Wheat" />
                    <Line type="monotone" dataKey="rice" stroke="#82ca9d" strokeWidth={2} name="Rice" />
                    <Line type="monotone" dataKey="cotton" stroke="#ffc658" strokeWidth={2} name="Cotton" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Demand vs Supply Analysis</CardTitle>
                <CardDescription>Current demand and supply balance across major crops</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={demandTrendData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="crop" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="demand" fill="#8884d8" name="Demand" />
                    <Bar dataKey="supply" fill="#82ca9d" name="Supply" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Forecast Cards */}
        {viewMode === "cards" && (
          <div className="grid lg:grid-cols-2 gap-6">
            {filteredData.map((forecast, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <span className="text-lg font-semibold text-primary">{forecast.crop.charAt(0)}</span>
                      </div>
                      <div>
                        <CardTitle className="text-xl">{forecast.crop}</CardTitle>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="w-3 h-3" />
                          {forecast.region}
                          <Calendar className="w-3 h-3 ml-2" />
                          {forecast.season}
                        </div>
                      </div>
                    </div>
                    {getRiskBadge(forecast.riskLevel)}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Demand Score */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Demand Score</span>
                      <span className={`text-lg font-bold ${getScoreColor(forecast.demandScore)}`}>
                        {forecast.demandScore}/100
                      </span>
                    </div>
                    <Progress value={forecast.demandScore} className="h-2" />
                  </div>

                  {/* Price Forecast */}
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <div className="text-sm text-muted-foreground">Expected Price</div>
                      <div className="text-lg font-semibold">₹{forecast.expectedPrice.toLocaleString()}</div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1">
                        {getTrendIcon(forecast.trend)}
                        <span className={`text-sm font-medium ${getTrendColor(forecast.trend)}`}>
                          {forecast.priceChange > 0 ? "+" : ""}
                          {forecast.priceChange.toFixed(1)}%
                        </span>
                      </div>
                      <div className="text-xs text-muted-foreground">vs current</div>
                    </div>
                  </div>

                  {/* AI Confidence */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">AI Confidence</span>
                    <div className="flex items-center gap-2">
                      <Progress value={forecast.confidence} className="w-16 h-1" />
                      <span className="text-sm font-medium">{forecast.confidence}%</span>
                    </div>
                  </div>

                  {/* Key Factors */}
                  <div>
                    <div className="text-sm font-medium mb-2">Key Factors</div>
                    <div className="space-y-1">
                      {forecast.factors.map((factor, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <div className="w-1 h-1 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                          {factor}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Recommendation */}
                  <div className="p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-sm font-medium text-blue-900">AI Recommendation</div>
                        <div className="text-sm text-blue-800">{forecast.recommendation}</div>
                      </div>
                    </div>
                  </div>

                  {/* Timeframe */}
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    Forecast for {forecast.timeframe}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {filteredData.length === 0 && (
          <Card>
            <CardContent className="text-center py-8">
              <div className="text-muted-foreground">
                No forecasts found for the selected filters. Try adjusting your criteria.
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
