"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { AuthHeader } from "@/components/auth-header"
import { Upload, X } from "lucide-react"

export default function ListProducePage() {
  const [images, setImages] = useState<string[]>([])
  const [certifications, setCertifications] = useState<string[]>([])
  const [deliveryOptions, setDeliveryOptions] = useState<string[]>([])

  const addCertification = (cert: string) => {
    if (cert && !certifications.includes(cert)) {
      setCertifications([...certifications, cert])
    }
  }

  const removeCertification = (cert: string) => {
    setCertifications(certifications.filter((c) => c !== cert))
  }

  const toggleDeliveryOption = (option: string) => {
    if (deliveryOptions.includes(option)) {
      setDeliveryOptions(deliveryOptions.filter((o) => o !== option))
    } else {
      setDeliveryOptions([...deliveryOptions, option])
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AuthHeader />

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">List Your Produce</h1>
          <p className="text-muted-foreground">Connect directly with traders and get better prices for your crops</p>
        </div>

        <form className="space-y-6">
          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
              <CardDescription>Tell us about your produce</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="crop">Crop Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select crop type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="wheat">Wheat</SelectItem>
                      <SelectItem value="rice">Rice</SelectItem>
                      <SelectItem value="cotton">Cotton</SelectItem>
                      <SelectItem value="sugarcane">Sugarcane</SelectItem>
                      <SelectItem value="tomato">Tomato</SelectItem>
                      <SelectItem value="onion">Onion</SelectItem>
                      <SelectItem value="potato">Potato</SelectItem>
                      <SelectItem value="maize">Maize</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="variety">Variety</Label>
                  <Input id="variety" placeholder="e.g., HD-2967, Basmati 1121" />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="quantity">Quantity</Label>
                  <Input id="quantity" type="number" placeholder="Enter quantity" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="unit">Unit</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select unit" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="quintals">Quintals</SelectItem>
                      <SelectItem value="tonnes">Tonnes</SelectItem>
                      <SelectItem value="kg">Kilograms</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe your produce, storage conditions, and any special features..."
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          {/* Pricing */}
          <Card>
            <CardHeader>
              <CardTitle>Pricing</CardTitle>
              <CardDescription>Set your price and terms</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="price">Price per Unit (₹)</Label>
                  <Input id="price" type="number" placeholder="Enter price per unit" />
                </div>
                <div className="flex items-center space-x-2 pt-6">
                  <Checkbox id="negotiable" />
                  <Label htmlFor="negotiable">Price is negotiable</Label>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Harvest & Availability */}
          <Card>
            <CardHeader>
              <CardTitle>Harvest & Availability</CardTitle>
              <CardDescription>When was it harvested and when is it available?</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="harvest-date">Harvest Date</Label>
                  <Input id="harvest-date" type="date" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="available-from">Available From</Label>
                  <Input id="available-from" type="date" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Images */}
          <Card>
            <CardHeader>
              <CardTitle>Images</CardTitle>
              <CardDescription>Upload photos of your produce (up to 5 images)</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-2">Click to upload or drag and drop</p>
                <p className="text-sm text-gray-500">PNG, JPG up to 10MB each</p>
                <Button variant="outline" className="mt-4 bg-transparent">
                  Choose Files
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Submit */}
          <div className="flex gap-4">
            <Button type="submit" className="flex-1 bg-primary hover:bg-primary/90">
              List My Produce
            </Button>
            <Button type="button" variant="outline">
              Save as Draft
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
