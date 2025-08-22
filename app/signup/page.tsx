"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import Image from "next/image"
import { User, Phone, MapPin, Building, Eye, EyeOff } from "lucide-react"

export default function SignupPage() {
  const [activeTab, setActiveTab] = useState<"farmer" | "trader">("farmer")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Image
              src="/krishiconnect-logo.jpeg"
              alt="KrishiConnect Logo"
              width={50}
              height={50}
              className="rounded-lg"
            />
            <span className="font-bold text-2xl text-foreground">KrishiConnect</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Create your account and start trading</h1>
        </div>

        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setActiveTab("farmer")}
            className={`flex-1 py-3 px-6 rounded-lg font-medium transition-colors ${
              activeTab === "farmer"
                ? "bg-amber-100 text-amber-800 border border-amber-200"
                : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
            }`}
          >
            Register as Farmer
          </button>
          <button
            onClick={() => setActiveTab("trader")}
            className={`flex-1 py-3 px-6 rounded-lg font-medium transition-colors ${
              activeTab === "trader"
                ? "bg-amber-100 text-amber-800 border border-amber-200"
                : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
            }`}
          >
            Register as Trader
          </button>
        </div>

        <Card className="bg-amber-50 border-amber-200">
          <CardContent className="p-8">
            {activeTab === "farmer" ? (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Farmer Registration</h2>
                <p className="text-gray-600 mb-6">Join thousands of farmers selling directly to traders</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="farmer-name" className="text-gray-700 font-medium">
                      Full Name
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="farmer-name"
                        type="text"
                        placeholder="Enter your full name"
                        className="pl-10 bg-white border-gray-300"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="farmer-phone" className="text-gray-700 font-medium">
                      Phone Number
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="farmer-phone"
                        type="tel"
                        placeholder="+91 9876543210"
                        className="pl-10 bg-white border-gray-300"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="kisan-card" className="text-gray-700 font-medium">
                      Kisan Card
                    </Label>
                    <div className="relative">
                      <Input className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="kisan-card"
                        type="input"
                        placeholder="XXXX XXXX XXXX XXXX"
                        className="pl-16 bg-white border-gray-300"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="farm-location" className="text-gray-700 font-medium">
                      Farm Location
                    </Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="farm-location"
                        type="text"
                        placeholder="City, State"
                        className="pl-10 bg-white border-gray-300"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="farm-size" className="text-gray-700 font-medium">
                      Farm Size
                    </Label>
                    <Select>
                      <SelectTrigger className="bg-white border-gray-300">
                        <SelectValue placeholder="Select farm size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="small">Small (1-5 acres)</SelectItem>
                        <SelectItem value="medium">Medium (5-20 acres)</SelectItem>
                        <SelectItem value="large">Large (20+ acres)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="farming-experience" className="text-gray-700 font-medium">
                      Farming Experience
                    </Label>
                    <Select>
                      <SelectTrigger className="bg-white border-gray-300">
                        <SelectValue placeholder="Years of experience" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-5">1-5 years</SelectItem>
                        <SelectItem value="5-10">5-10 years</SelectItem>
                        <SelectItem value="10-20">10-20 years</SelectItem>
                        <SelectItem value="20+">20+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="farmer-password" className="text-gray-700 font-medium">
                      Password
                    </Label>
                    <div className="relative">
                      <Input
                        id="farmer-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Create password"
                        className="pr-10 bg-white border-gray-300"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="farmer-confirm-password" className="text-gray-700 font-medium">
                      Confirm Password
                    </Label>
                    <div className="relative">
                      <Input
                        id="farmer-confirm-password"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm password"
                        className="pr-10 bg-white border-gray-300"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                      >
                        {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2 mt-6">
                  <Checkbox id="farmer-terms" />
                  <Label htmlFor="farmer-terms" className="text-sm text-gray-600">
                    I agree to the{" "}
                    <Link href="/terms" className="text-amber-600 hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-amber-600 hover:underline">
                      Privacy Policy
                    </Link>
                  </Label>
                </div>

                <Button className="w-full mt-6 bg-amber-600 hover:bg-amber-700 text-white py-3 text-lg font-medium">
                  Create Farmer Account
                </Button>
              </div>
            ) : (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Trader Registration</h2>
                <p className="text-gray-600 mb-6">Connect directly with farmers and access fresh produce</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="trader-name" className="text-gray-700 font-medium">
                      Full Name
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="trader-name"
                        type="text"
                        placeholder="Enter your full name"
                        className="pl-10 bg-white border-gray-300"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="trader-phone" className="text-gray-700 font-medium">
                      Phone Number
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="trader-phone"
                        type="tel"
                        placeholder="+91 9876543210"
                        className="pl-10 bg-white border-gray-300"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="business-name" className="text-gray-700 font-medium">
                      Business Name
                    </Label>
                    <div className="relative">
                      <Building className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="business-name"
                        type="text"
                        placeholder="Your business name"
                        className="pl-10 bg-white border-gray-300"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="business-location" className="text-gray-700 font-medium">
                      Business Location
                    </Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="business-location"
                        type="text"
                        placeholder="City, State"
                        className="pl-10 bg-white border-gray-300"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="business-type" className="text-gray-700 font-medium">
                      Business Type
                    </Label>
                    <Select>
                      <SelectTrigger className="bg-white border-gray-300">
                        <SelectValue placeholder="Select business type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="wholesaler">Wholesaler</SelectItem>
                        <SelectItem value="retailer">Retailer</SelectItem>
                        <SelectItem value="processor">Food Processor</SelectItem>
                        <SelectItem value="exporter">Exporter</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="trading-experience" className="text-gray-700 font-medium">
                      Trading Experience
                    </Label>
                    <Select>
                      <SelectTrigger className="bg-white border-gray-300">
                        <SelectValue placeholder="Years of trading experience" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-5">1-5 years</SelectItem>
                        <SelectItem value="5-10">5-10 years</SelectItem>
                        <SelectItem value="10-20">10-20 years</SelectItem>
                        <SelectItem value="20+">20+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="trader-password" className="text-gray-700 font-medium">
                      Password
                    </Label>
                    <div className="relative">
                      <Input
                        id="trader-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Create password"
                        className="pr-10 bg-white border-gray-300"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="trader-confirm-password" className="text-gray-700 font-medium">
                      Confirm Password
                    </Label>
                    <div className="relative">
                      <Input
                        id="trader-confirm-password"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm password"
                        className="pr-10 bg-white border-gray-300"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                      >
                        {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2 mt-6">
                  <Checkbox id="trader-terms" />
                  <Label htmlFor="trader-terms" className="text-sm text-gray-600">
                    I agree to the{" "}
                    <Link href="/terms" className="text-amber-600 hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-amber-600 hover:underline">
                      Privacy Policy
                    </Link>
                  </Label>
                </div>

                <Button className="w-full mt-6 bg-amber-600 hover:bg-amber-700 text-white py-3 text-lg font-medium">
                  Create Trader Account
                </Button>
              </div>
            )}

            <div className="text-center mt-8 space-y-2">
              <p className="text-gray-600">
                Already have an account?{" "}
                <Link href="/login" className="text-amber-600 hover:underline font-medium">
                  Sign in here
                </Link>
              </p>
              <Link href="/" className="text-amber-600 hover:underline font-medium block">
                Back to Home
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
