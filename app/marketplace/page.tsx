"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { AuthHeader } from "@/components/auth-header"
import { Search, MapPin, Calendar, Phone, MessageCircle, Star, Truck } from "lucide-react"
import Link from "next/link"

// Mock marketplace data
const listings = [
  {
    id: 1,
    crop: "Wheat",
    variety: "HD-2967",
    quantity: 500,
    unit: "quintals",
    pricePerUnit: 2200,
    totalValue: 1100000,
    farmer: {
      name: "Rajesh Kumar",
      location: "Panipat, Haryana",
      rating: 4.8,
      verified: true,
      phone: "+91 98765 43210",
    },
    quality: "Grade A",
    harvestDate: "2024-03-15",
    availableFrom: "2024-03-20",
    description: "Premium quality wheat, properly dried and stored. Ready for immediate delivery.",
    images: ["/golden-wheat-field.png"],
    certifications: ["Organic", "FPO Certified"],
    deliveryOptions: ["Farm Pickup", "Local Delivery"],
    negotiable: true,
    featured: true,
  },
  {
    id: 2,
    crop: "Rice",
    variety: "Basmati 1121",
    quantity: 200,
    unit: "quintals",
    pricePerUnit: 3500,
    totalValue: 700000,
    farmer: {
      name: "Suresh Singh",
      location: "Karnal, Haryana",
      rating: 4.9,
      verified: true,
      phone: "+91 98765 43211",
    },
    quality: "Premium",
    harvestDate: "2024-02-28",
    availableFrom: "2024-03-10",
    description: "Export quality Basmati rice with excellent aroma and grain length.",
    images: ["/basmati-rice.png"],
    certifications: ["Export Quality", "APEDA Certified"],
    deliveryOptions: ["Farm Pickup", "Transportation Available"],
    negotiable: false,
    featured: true,
  },
  {
    id: 3,
    crop: "Cotton",
    variety: "Bt Cotton",
    quantity: 150,
    unit: "quintals",
    pricePerUnit: 5800,
    totalValue: 870000,
    farmer: {
      name: "Ramesh Patel",
      location: "Ahmedabad, Gujarat",
      rating: 4.6,
      verified: true,
      phone: "+91 98765 43212",
    },
    quality: "Grade A",
    harvestDate: "2024-01-20",
    availableFrom: "2024-02-01",
    description: "High quality cotton with good fiber length and strength.",
    images: ["/cotton-field.png"],
    certifications: ["BCI Certified"],
    deliveryOptions: ["Farm Pickup", "Mill Delivery"],
    negotiable: true,
    featured: false,
  },
  {
    id: 4,
    crop: "Tomato",
    variety: "Hybrid",
    quantity: 50,
    unit: "quintals",
    pricePerUnit: 1200,
    totalValue: 60000,
    farmer: {
      name: "Lakshmi Devi",
      location: "Bangalore, Karnataka",
      rating: 4.7,
      verified: true,
      phone: "+91 98765 43213",
    },
    quality: "Fresh Grade A",
    harvestDate: "2024-03-18",
    availableFrom: "2024-03-19",
    description: "Fresh tomatoes, perfect for processing and retail markets.",
    images: ["/fresh-tomatoes.png"],
    certifications: ["Pesticide Free"],
    deliveryOptions: ["Farm Pickup", "Cold Chain Available"],
    negotiable: true,
    featured: false,
  },
  {
    id: 5,
    crop: "Onion",
    variety: "Red Onion",
    quantity: 300,
    unit: "quintals",
    pricePerUnit: 800,
    totalValue: 240000,
    farmer: {
      name: "Ganesh Jadhav",
      location: "Nashik, Maharashtra",
      rating: 4.5,
      verified: true,
      phone: "+91 98765 43214",
    },
    quality: "Grade A",
    harvestDate: "2024-02-15",
    availableFrom: "2024-02-20",
    description: "Premium red onions with good storage life and pungency.",
    images: ["/vibrant-red-onions.png"],
    certifications: ["Storage Certified"],
    deliveryOptions: ["Farm Pickup", "Wholesale Market Delivery"],
    negotiable: true,
    featured: false,
  },
  {
    id: 6,
    crop: "Sugarcane",
    variety: "Co-86032",
    quantity: 1000,
    unit: "tonnes",
    pricePerUnit: 350,
    totalValue: 350000,
    farmer: {
      name: "Mohan Reddy",
      location: "Mandya, Karnataka",
      rating: 4.4,
      verified: true,
      phone: "+91 98765 43215",
    },
    quality: "High Sucrose",
    harvestDate: "2024-03-10",
    availableFrom: "2024-03-12",
    description: "High sucrose content sugarcane, ideal for sugar mills.",
    images: ["/sugarcane-field.png"],
    certifications: ["Mill Grade"],
    deliveryOptions: ["Farm Pickup", "Mill Direct"],
    negotiable: false,
    featured: false,
  },
]

export default function MarketplacePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCrop, setSelectedCrop] = useState("all")
  const [selectedLocation, setSelectedLocation] = useState("all")
  const [priceRange, setPriceRange] = useState("all")
  const [sortBy, setSortBy] = useState("featured")

  const filteredListings = listings.filter((listing) => {
    const matchesSearch =
      listing.crop.toLowerCase().includes(searchTerm.toLowerCase()) ||
      listing.variety.toLowerCase().includes(searchTerm.toLowerCase()) ||
      listing.farmer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      listing.farmer.location.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesCrop = selectedCrop === "all" || listing.crop === selectedCrop
    const matchesLocation = selectedLocation === "all" || listing.farmer.location.includes(selectedLocation)

    return matchesSearch && matchesCrop && matchesLocation
  })

  const sortedListings = [...filteredListings].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.pricePerUnit - b.pricePerUnit
      case "price-high":
        return b.pricePerUnit - a.pricePerUnit
      case "quantity":
        return b.quantity - a.quantity
      case "rating":
        return b.farmer.rating - a.farmer.rating
      case "featured":
      default:
        return b.featured ? 1 : -1
    }
  })

  const uniqueCrops = [...new Set(listings.map((item) => item.crop))]
  const uniqueLocations = [...new Set(listings.map((item) => item.farmer.location.split(",")[1]?.trim()))]

  return (
    <div className="min-h-screen bg-gray-50">
      <AuthHeader />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Direct Trading Marketplace</h1>
          <p className="text-muted-foreground">Connect directly with farmers and buy fresh produce</p>
        </div>

        {/* Summary Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Active Listings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{listings.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Verified Farmers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">
                {listings.filter((item) => item.farmer.verified).length}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Value</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">
                ₹{(listings.reduce((acc, item) => acc + item.totalValue, 0) / 10000000).toFixed(1)}Cr
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Avg Rating</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">
                {(listings.reduce((acc, item) => acc + item.farmer.rating, 0) / listings.length).toFixed(1)}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Find Products</CardTitle>
            <CardDescription>Search and filter available produce</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search crops, farmers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={selectedCrop} onValueChange={setSelectedCrop}>
                <SelectTrigger>
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
              <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                <SelectTrigger>
                  <SelectValue placeholder="Select state" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All States</SelectItem>
                  {uniqueLocations.filter(Boolean).map((location) => (
                    <SelectItem key={location} value={location}>
                      {location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger>
                  <SelectValue placeholder="Price range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="low">Under ₹1000</SelectItem>
                  <SelectItem value="medium">₹1000 - ₹3000</SelectItem>
                  <SelectItem value="high">Above ₹3000</SelectItem>
                </SelectContent>
              </Select>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured First</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="quantity">Quantity</SelectItem>
                  <SelectItem value="rating">Farmer Rating</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Listings Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {sortedListings.map((listing) => (
            <Card key={listing.id} className="hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src={listing.images[0] || "/placeholder.svg"}
                  alt={listing.crop}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                {listing.featured && (
                  <Badge className="absolute top-2 left-2 bg-orange-500 hover:bg-orange-500">Featured</Badge>
                )}
                {listing.negotiable && (
                  <Badge variant="secondary" className="absolute top-2 right-2">
                    Negotiable
                  </Badge>
                )}
              </div>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl">{listing.crop}</CardTitle>
                    <CardDescription>{listing.variety}</CardDescription>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary">₹{listing.pricePerUnit.toLocaleString()}</div>
                    <div className="text-sm text-muted-foreground">per {listing.unit.slice(0, -1)}</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Quantity and Quality */}
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-muted-foreground">Available Quantity</div>
                    <div className="font-semibold">
                      {listing.quantity} {listing.unit}
                    </div>
                  </div>
                  <Badge variant="outline">{listing.quality}</Badge>
                </div>

                {/* Farmer Info */}
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium">{listing.farmer.name}</div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin className="w-3 h-3" />
                      {listing.farmer.location}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{listing.farmer.rating}</span>
                    </div>
                    {listing.farmer.verified && (
                      <Badge variant="secondary" className="text-xs">
                        Verified
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Harvest Date */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  Harvested: {new Date(listing.harvestDate).toLocaleDateString()}
                </div>

                {/* Certifications */}
                {listing.certifications.length > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {listing.certifications.map((cert, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {cert}
                      </Badge>
                    ))}
                  </div>
                )}

                {/* Delivery Options */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Truck className="w-4 h-4" />
                  {listing.deliveryOptions.join(", ")}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-2">
                  <Button className="flex-1" size="sm">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Contact Farmer
                  </Button>
                  <Button variant="outline" size="sm">
                    <Phone className="w-4 h-4" />
                  </Button>
                </div>

                {/* Total Value */}
                <div className="text-center pt-2 border-t">
                  <div className="text-sm text-muted-foreground">Total Value</div>
                  <div className="text-lg font-bold text-foreground">₹{listing.totalValue.toLocaleString()}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {sortedListings.length === 0 && (
          <Card>
            <CardContent className="text-center py-12">
              <div className="text-muted-foreground mb-4">No listings found matching your criteria.</div>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCrop("all")
                  setSelectedLocation("all")
                  setPriceRange("all")
                }}
              >
                Clear Filters
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Call to Action for Farmers */}
        <Card className="mt-12 bg-primary/5 border-primary/20">
          <CardContent className="text-center py-8">
            <h3 className="text-xl font-bold text-foreground mb-2">Are you a farmer?</h3>
            <p className="text-muted-foreground mb-4">
              List your produce and connect directly with traders for better prices
            </p>
            <Link href="/list-produce">
              <Button className="bg-primary hover:bg-primary/90">List Your Produce</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
