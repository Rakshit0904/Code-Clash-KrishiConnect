import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, MapPin, Calendar, Star, ShoppingCart, TrendingUp, Filter, Heart, Share2 } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ForTradersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-amber-50">
      <header className="bg-white/95 backdrop-blur-sm border-b border-blue-200 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <Link href="/" className="flex items-center space-x-3">
                <Image
                  src="/krishiconnect-logo.jpeg"
                  alt="KrishiConnect"
                  width={45}
                  height={45}
                  className="rounded-lg shadow-sm"
                />
                <span className="text-xl font-bold bg-gradient-to-r from-blue-700 to-amber-600 bg-clip-text text-transparent">
                  KrishiConnect
                </span>
              </Link>
              <nav className="hidden md:flex space-x-6">
                <Link href="/" className="text-gray-600 hover:text-blue-700 transition-colors font-medium">
                  Home
                </Link>
                <Link href="/prices" className="text-gray-600 hover:text-blue-700 transition-colors font-medium">
                  Price Dashboard
                </Link>
                <Link href="/for-traders" className="text-blue-700 font-semibold border-b-2 border-blue-700 pb-1">
                  For Traders
                </Link>
                <Link href="/profile" className="text-gray-600 hover:text-blue-700 transition-colors font-medium">
                  Profile
                </Link>
              </nav>
            </div>
            <Button
              asChild
              className="bg-gradient-to-r from-blue-600 to-amber-600 hover:from-blue-700 hover:to-amber-700 text-white shadow-lg"
            >
              <Link href="/profile">Profile</Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-800 to-amber-700 bg-clip-text text-transparent mb-3">
            Trader Portal
          </h1>
          <p className="text-gray-600 text-lg">Browse and purchase quality produce directly from verified farmers</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="text-3xl font-bold text-blue-800">4</div>
                <div className="p-2 bg-blue-200 rounded-lg">
                  <ShoppingCart className="h-5 w-5 text-blue-700" />
                </div>
              </div>
              <div className="text-sm font-medium text-blue-700 mb-1">Available Listings</div>
              <div className="text-xs text-blue-600">Fresh produce</div>
              <div className="text-xs text-green-600 mt-1">2 new today</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="text-3xl font-bold text-green-800">150+</div>
                <div className="p-2 bg-green-200 rounded-lg">
                  <Star className="h-5 w-5 text-green-700" />
                </div>
              </div>
              <div className="text-sm font-medium text-green-700 mb-1">Active Farmers</div>
              <div className="text-xs text-green-600">Verified sellers</div>
              <div className="text-xs text-blue-600 mt-1">Avg rating: 4.7★</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="text-3xl font-bold text-purple-800">2</div>
                <div className="p-2 bg-purple-200 rounded-lg">
                  <TrendingUp className="h-5 w-5 text-purple-700" />
                </div>
              </div>
              <div className="text-sm font-medium text-purple-700 mb-1">Total Purchases</div>
              <div className="text-xs text-purple-600">This month</div>
              <div className="text-xs text-green-600 mt-1">↑ 100% growth</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="text-3xl font-bold text-amber-800">₹4.9L</div>
                <div className="p-2 bg-amber-200 rounded-lg">
                  <TrendingUp className="h-5 w-5 text-amber-700" />
                </div>
              </div>
              <div className="text-sm font-medium text-amber-700 mb-1">Total Spent</div>
              <div className="text-xs text-amber-600">This month</div>
              <div className="text-xs text-gray-600 mt-1">Avg: ₹2.45L/order</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="browse" className="mb-6">
          <TabsList className="bg-white/80 backdrop-blur-sm border border-blue-200">
            <TabsTrigger value="browse" className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-800">
              Browse Produce
            </TabsTrigger>
            <TabsTrigger value="history" className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-800">
              Purchase History
            </TabsTrigger>
            <TabsTrigger
              value="favorites"
              className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-800"
            >
              Saved Items
            </TabsTrigger>
          </TabsList>

          <TabsContent value="browse">
            <Card className="bg-white/90 backdrop-blur-sm border-blue-200 mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="h-5 w-5 text-blue-600" />
                  Search & Filter
                </CardTitle>
                <p className="text-gray-600">Find the perfect produce for your business needs</p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search crops, varieties..."
                      className="pl-10 bg-white border-blue-200 focus:border-blue-400"
                    />
                  </div>
                  <Select>
                    <SelectTrigger className="bg-white border-blue-200">
                      <SelectValue placeholder="All Crops" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="wheat">Wheat</SelectItem>
                      <SelectItem value="rice">Rice</SelectItem>
                      <SelectItem value="vegetables">Vegetables</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="bg-white border-blue-200">
                      <SelectValue placeholder="All Locations" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="haryana">Haryana</SelectItem>
                      <SelectItem value="punjab">Punjab</SelectItem>
                      <SelectItem value="up">Uttar Pradesh</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="bg-white border-blue-200">
                      <SelectValue placeholder="Price Range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Under ₹2000</SelectItem>
                      <SelectItem value="medium">₹2000-₹4000</SelectItem>
                      <SelectItem value="high">Above ₹4000</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Advanced Filters
                  </Button>
                  <Button variant="outline" size="sm">
                    Clear All
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="bg-white/90 backdrop-blur-sm border-blue-200 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="relative mb-6">
                    <Image
                      src="/golden-wheat-field.png"
                      alt="Wheat field"
                      width={600}
                      height={240}
                      className="w-full h-60 object-cover rounded-xl shadow-md"
                    />
                    <div className="absolute top-4 left-4 flex gap-2"></div>
                    <div className="absolute top-4 right-4 flex gap-2">
                      <Button size="sm" variant="outline" className="h-8 w-8 p-0 bg-white/80 backdrop-blur-sm">
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="h-8 w-8 p-0 bg-white/80 backdrop-blur-sm">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Wheat - HD-2967</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        Premium quality wheat, well-dried and cleaned. Suitable for flour mills. Certified organic with
                        moisture content below 12%.
                      </p>
                      <div className="flex items-center gap-6 text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-blue-600" />
                          <span>Panipat, Haryana</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-green-600" />
                          <span>Harvested: 3/15/2024</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right bg-gradient-to-br from-blue-50 to-amber-50 p-4 rounded-xl">
                      <div className="text-3xl font-bold text-blue-800">₹2,850</div>
                      <div className="text-sm text-gray-600">per quintal</div>
                      <div className="text-sm font-medium text-amber-700 mt-1">Total: ₹142,500</div>
                      <div className="text-xs text-green-600 mt-1">50 quintal available</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                          RK
                        </div>
                        <div>
                          <div className="font-medium">Rajesh Kumar</div>
                          <div className="flex items-center gap-1 text-sm text-gray-500">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span>4.8 • 45 sales</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-blue-600 to-amber-600 hover:from-blue-700 hover:to-amber-700 text-white"
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Purchase
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/90 backdrop-blur-sm border-blue-200 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="relative mb-6">
                    <Image
                      src="/basmati-rice.png"
                      alt="Basmati rice"
                      width={600}
                      height={240}
                      className="w-full h-60 object-cover rounded-xl shadow-md"
                    />
                    <div className="absolute top-4 left-4 flex gap-2"></div>
                    <div className="absolute top-4 right-4 flex gap-2">
                      <Button size="sm" variant="outline" className="h-8 w-8 p-0 bg-white/80 backdrop-blur-sm">
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="h-8 w-8 p-0 bg-white/80 backdrop-blur-sm">
                        <Share2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Rice - Basmati 1121</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        Export quality Basmati rice with long grains and excellent aroma. Perfect for international
                        markets with superior quality standards.
                      </p>
                      <div className="flex items-center gap-6 text-sm text-gray-500 mb-4">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-blue-600" />
                          <span>Karnal, Haryana</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-green-600" />
                          <span>Harvested: 2/28/2024</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right bg-gradient-to-br from-purple-50 to-amber-50 p-4 rounded-xl">
                      <div className="text-3xl font-bold text-purple-800">₹4,200</div>
                      <div className="text-sm text-gray-600">per quintal</div>
                      <div className="text-sm font-medium text-amber-700 mt-1">Total: ₹126,000</div>
                      <div className="text-xs text-green-600 mt-1">30 quintal available</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                          SS
                        </div>
                        <div>
                          <div className="font-medium">Suresh Singh</div>
                          <div className="flex items-center gap-1 text-sm text-gray-500">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span>4.9 • 67 sales</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-purple-600 to-amber-600 hover:from-purple-700 hover:to-amber-700 text-white"
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Purchase
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="history">
            <Card className="bg-white/90 backdrop-blur-sm border-gray-200">
              <CardContent className="p-12 text-center">
                <ShoppingCart className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No purchase history yet</h3>
                <p className="text-gray-500">
                  Your completed purchases will appear here once you make your first order.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="favorites">
            <Card className="bg-white/90 backdrop-blur-sm border-gray-200">
              <CardContent className="p-12 text-center">
                <Heart className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No saved items yet</h3>
                <p className="text-gray-500">Save interesting listings to view them later.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
