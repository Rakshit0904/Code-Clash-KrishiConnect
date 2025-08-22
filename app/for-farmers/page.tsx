import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Edit, Trash2, MapPin, Calendar, Eye, MessageCircle, TrendingUp, AlertCircle, Filter, Plus } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ForFarmersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-amber-50">
      <header className="bg-white/95 backdrop-blur-sm border-b border-green-200 sticky top-0 z-50">
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
                <span className="text-xl font-bold bg-gradient-to-r from-green-700 to-amber-600 bg-clip-text text-transparent">
                  KrishiConnect
                </span>
              </Link>
              <nav className="hidden md:flex space-x-6">
                <Link href="/" className="text-gray-600 hover:text-green-700 transition-colors font-medium">
                  Home
                </Link>
                <Link href="/prices" className="text-gray-600 hover:text-green-700 transition-colors font-medium">
                  Price Dashboard
                </Link>
                <Link href="/for-farmers" className="text-green-700 font-semibold border-b-2 border-green-700 pb-1">
                  For Farmers
                </Link>
              </nav>
            </div>
            <Button
              asChild
              className="bg-gradient-to-r from-green-600 to-amber-600 hover:from-green-700 hover:to-amber-700 text-white shadow-lg"
            >
              <Link href="/list-produce">
                <Plus className="h-4 w-4 mr-2" />
                Create New Listing
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-green-800 to-amber-700 bg-clip-text text-transparent mb-3">
            Farmer Dashboard
          </h1>
          <p className="text-gray-600 text-lg">Manage your produce listings and connect with traders efficiently</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="text-3xl font-bold text-green-800">2</div>
                <div className="p-2 bg-green-200 rounded-lg">
                  <Eye className="h-5 w-5 text-green-700" />
                </div>
              </div>
              <div className="text-sm font-medium text-green-700 mb-1">Active Listings</div>
              <div className="text-xs text-green-600">Currently selling</div>
              <Progress value={67} className="mt-2 h-2" />
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="text-3xl font-bold text-blue-800">196</div>
                <div className="p-2 bg-blue-200 rounded-lg">
                  <TrendingUp className="h-5 w-5 text-blue-700" />
                </div>
              </div>
              <div className="text-sm font-medium text-blue-700 mb-1">Total Views</div>
              <div className="text-xs text-blue-600">This month</div>
              <div className="text-xs text-green-600 mt-1">↑ 23% from last month</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="text-3xl font-bold text-purple-800">35</div>
                <div className="p-2 bg-purple-200 rounded-lg">
                  <MessageCircle className="h-5 w-5 text-purple-700" />
                </div>
              </div>
              <div className="text-sm font-medium text-purple-700 mb-1">Inquiries</div>
              <div className="text-xs text-purple-600">From traders</div>
              <div className="text-xs text-orange-600 mt-1">8 pending responses</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="text-3xl font-bold text-amber-800">₹3.5L</div>
                <div className="p-2 bg-amber-200 rounded-lg">
                  <TrendingUp className="h-5 w-5 text-amber-700" />
                </div>
              </div>
              <div className="text-sm font-medium text-amber-700 mb-1">Revenue</div>
              <div className="text-xs text-amber-600">Total earned</div>
              <div className="text-xs text-green-600 mt-1">↑ ₹45K this month</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="all" className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <TabsList className="bg-white/80 backdrop-blur-sm border border-green-200">
              <TabsTrigger value="all" className="data-[state=active]:bg-green-100 data-[state=active]:text-green-800">
                View All (2)
              </TabsTrigger>
              <TabsTrigger
                value="active"
                className="data-[state=active]:bg-green-100 data-[state=active]:text-green-800"
              >
                Active (2)
              </TabsTrigger>
              <TabsTrigger value="sold" className="data-[state=active]:bg-green-100 data-[state=active]:text-green-800">
                Sold (0)
              </TabsTrigger>
            </TabsList>
            <Button variant="outline" size="sm" className="bg-white/80 backdrop-blur-sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter & Sort
            </Button>
          </div>

          <TabsContent value="all" className="space-y-6">
            <Card className="bg-white/90 backdrop-blur-sm border-green-200 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="relative mb-6">
                  <Image
                    src="/golden-wheat-field.png"
                    alt="Wheat field"
                    width={600}
                    height={240}
                    className="w-full h-60 object-cover rounded-xl shadow-md"
                  />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <Badge className="bg-green-500 text-white shadow-lg">Active</Badge>
                    <Badge className="bg-blue-500 text-white shadow-lg">Premium</Badge>
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
                        <MapPin className="h-4 w-4 text-green-600" />
                        <span>Panipat, Haryana</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-blue-600" />
                        <span>Harvested: 3/15/2024</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="h-10 w-10 p-0 hover:bg-green-50 bg-transparent">
                      <Edit className="h-4 w-4 text-green-600" />
                    </Button>
                    <Button size="sm" variant="outline" className="h-10 w-10 p-0 hover:bg-red-50 bg-transparent">
                      <Trash2 className="h-4 w-4 text-red-600" />
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-800 mb-1">50</div>
                    <div className="text-sm text-green-600">Quintal Available</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-800">₹2,850</div>
                    <div className="text-sm text-blue-600">Per Quintal</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-800">₹1.4L</div>
                    <div className="text-sm text-purple-600">Total Value</div>
                  </div>
                  <div className="text-center p-4 bg-amber-50 rounded-lg">
                    <div className="text-2xl font-bold text-amber-800">45</div>
                    <div className="text-sm text-amber-600">Views Today</div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <MessageCircle className="h-5 w-5 text-green-600" />
                      <span className="font-medium">8 Inquiries</span>
                      <Badge variant="outline" className="text-orange-600 border-orange-200">
                        3 New
                      </Badge>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      View Inquiries
                    </Button>
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      Promote Listing
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-green-200 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="relative mb-6">
                  <Image
                    src="/basmati-rice.png"
                    alt="Basmati rice"
                    width={600}
                    height={240}
                    className="w-full h-60 object-cover rounded-xl shadow-md"
                  />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <Badge className="bg-green-500 text-white shadow-lg">Active</Badge>
                    <Badge className="bg-purple-500 text-white shadow-lg">Export Grade</Badge>
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
                        <MapPin className="h-4 w-4 text-green-600" />
                        <span>Karnal, Haryana</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-blue-600" />
                        <span>Harvested: 2/28/2024</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="h-10 w-10 p-0 hover:bg-green-50 bg-transparent">
                      <Edit className="h-4 w-4 text-green-600" />
                    </Button>
                    <Button size="sm" variant="outline" className="h-10 w-10 p-0 hover:bg-red-50 bg-transparent">
                      <Trash2 className="h-4 w-4 text-red-600" />
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-800 mb-1">30</div>
                    <div className="text-sm text-green-600">Quintal Available</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-800">₹4,200</div>
                    <div className="text-sm text-blue-600">Per Quintal</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-800">₹1.3L</div>
                    <div className="text-sm text-purple-600">Total Value</div>
                  </div>
                  <div className="text-center p-4 bg-amber-50 rounded-lg">
                    <div className="text-2xl font-bold text-amber-800">62</div>
                    <div className="text-sm text-amber-600">Views Today</div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <MessageCircle className="h-5 w-5 text-green-600" />
                      <span className="font-medium">12 Inquiries</span>
                      <Badge variant="outline" className="text-orange-600 border-orange-200">
                        5 New
                      </Badge>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      View Inquiries
                    </Button>
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      Promote Listing
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="active">{/* Same content as "all" for active listings */}</TabsContent>

          <TabsContent value="sold">
            <Card className="bg-white/90 backdrop-blur-sm border-gray-200">
              <CardContent className="p-12 text-center">
                <AlertCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No sold items yet</h3>
                <p className="text-gray-500">Your completed sales will appear here once you make your first sale.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
