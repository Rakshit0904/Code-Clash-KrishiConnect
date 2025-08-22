"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { AuthHeader } from "@/components/auth-header"
import { Shield, CreditCard, Banknote, Smartphone, CheckCircle, Clock, AlertCircle } from "lucide-react"

// Mock transaction data
const mockTransaction = {
  id: "TXN-2024-001",
  crop: "Wheat",
  variety: "HD-2967",
  quantity: 100,
  unit: "quintals",
  pricePerUnit: 2200,
  totalAmount: 220000,
  farmer: {
    name: "Rajesh Kumar",
    location: "Panipat, Haryana",
    verified: true,
  },
  trader: {
    name: "Amit Traders",
    location: "Delhi",
    verified: true,
  },
  escrowFee: 2200, // 1% of total amount
  platformFee: 1100, // 0.5% of total amount
  finalAmount: 221300,
}

export default function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState("")
  const [step, setStep] = useState(1) // 1: Details, 2: Payment, 3: Confirmation
  const [processing, setProcessing] = useState(false)

  const handlePayment = async () => {
    setProcessing(true)
    // Simulate payment processing
    setTimeout(() => {
      setProcessing(false)
      setStep(3)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AuthHeader />

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Secure Payment</h1>
          <p className="text-muted-foreground">Complete your transaction with escrow protection</p>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center space-x-4">
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full ${
                step >= 1 ? "bg-primary text-primary-foreground" : "bg-gray-200 text-gray-500"
              }`}
            >
              1
            </div>
            <div className={`w-16 h-1 ${step >= 2 ? "bg-primary" : "bg-gray-200"}`} />
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full ${
                step >= 2 ? "bg-primary text-primary-foreground" : "bg-gray-200 text-gray-500"
              }`}
            >
              2
            </div>
            <div className={`w-16 h-1 ${step >= 3 ? "bg-primary" : "bg-gray-200"}`} />
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full ${
                step >= 3 ? "bg-primary text-primary-foreground" : "bg-gray-200 text-gray-500"
              }`}
            >
              3
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {step === 1 && (
              <>
                {/* Transaction Details */}
                <Card>
                  <CardHeader>
                    <CardTitle>Transaction Details</CardTitle>
                    <CardDescription>Review your purchase before proceeding</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-lg">{mockTransaction.crop}</div>
                        <div className="text-muted-foreground">{mockTransaction.variety}</div>
                      </div>
                      <Badge variant="outline">Verified Farmer</Badge>
                    </div>

                    <Separator />

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-muted-foreground">Seller</div>
                        <div className="font-medium">{mockTransaction.farmer.name}</div>
                        <div className="text-sm text-muted-foreground">{mockTransaction.farmer.location}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Buyer</div>
                        <div className="font-medium">{mockTransaction.trader.name}</div>
                        <div className="text-sm text-muted-foreground">{mockTransaction.trader.location}</div>
                      </div>
                    </div>

                    <Separator />

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-muted-foreground">Quantity</div>
                        <div className="font-medium">
                          {mockTransaction.quantity} {mockTransaction.unit}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Price per Unit</div>
                        <div className="font-medium">₹{mockTransaction.pricePerUnit.toLocaleString()}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Escrow Protection */}
                <Card className="border-green-200 bg-green-50">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-green-600" />
                      <CardTitle className="text-green-800">Escrow Protection</CardTitle>
                    </div>
                    <CardDescription className="text-green-700">
                      Your payment is protected until delivery is confirmed
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-green-800">
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        Payment held securely until goods are delivered
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        Automatic release after confirmation
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        Dispute resolution available
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        Full refund if terms not met
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Button onClick={() => setStep(2)} className="w-full bg-primary hover:bg-primary/90" size="lg">
                  Proceed to Payment
                </Button>
              </>
            )}

            {step === 2 && (
              <>
                {/* Payment Method Selection */}
                <Card>
                  <CardHeader>
                    <CardTitle>Select Payment Method</CardTitle>
                    <CardDescription>Choose your preferred payment option</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid gap-3">
                      <div
                        className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                          paymentMethod === "upi"
                            ? "border-primary bg-primary/5"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                        onClick={() => setPaymentMethod("upi")}
                      >
                        <div className="flex items-center gap-3">
                          <Smartphone className="w-6 h-6 text-primary" />
                          <div>
                            <div className="font-medium">UPI Payment</div>
                            <div className="text-sm text-muted-foreground">
                              Pay using UPI apps like GPay, PhonePe, Paytm
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                          paymentMethod === "card"
                            ? "border-primary bg-primary/5"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                        onClick={() => setPaymentMethod("card")}
                      >
                        <div className="flex items-center gap-3">
                          <CreditCard className="w-6 h-6 text-primary" />
                          <div>
                            <div className="font-medium">Credit/Debit Card</div>
                            <div className="text-sm text-muted-foreground">Visa, Mastercard, RuPay accepted</div>
                          </div>
                        </div>
                      </div>

                      <div
                        className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                          paymentMethod === "netbanking"
                            ? "border-primary bg-primary/5"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                        onClick={() => setPaymentMethod("netbanking")}
                      >
                        <div className="flex items-center gap-3">
                          <Banknote className="w-6 h-6 text-primary" />
                          <div>
                            <div className="font-medium">Net Banking</div>
                            <div className="text-sm text-muted-foreground">Pay directly from your bank account</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Payment Form */}
                {paymentMethod === "upi" && (
                  <Card>
                    <CardHeader>
                      <CardTitle>UPI Payment</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="upi-id">UPI ID</Label>
                        <Input id="upi-id" placeholder="yourname@upi" />
                      </div>
                    </CardContent>
                  </Card>
                )}

                {paymentMethod === "card" && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Card Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="card-number">Card Number</Label>
                        <Input id="card-number" placeholder="1234 5678 9012 3456" />
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiry">Expiry Date</Label>
                          <Input id="expiry" placeholder="MM/YY" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cvv">CVV</Label>
                          <Input id="cvv" placeholder="123" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cardholder">Cardholder Name</Label>
                        <Input id="cardholder" placeholder="Name on card" />
                      </div>
                    </CardContent>
                  </Card>
                )}

                {paymentMethod === "netbanking" && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Net Banking</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="bank">Select Bank</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Choose your bank" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="sbi">State Bank of India</SelectItem>
                            <SelectItem value="hdfc">HDFC Bank</SelectItem>
                            <SelectItem value="icici">ICICI Bank</SelectItem>
                            <SelectItem value="axis">Axis Bank</SelectItem>
                            <SelectItem value="pnb">Punjab National Bank</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </CardContent>
                  </Card>
                )}

                <div className="flex gap-4">
                  <Button variant="outline" onClick={() => setStep(1)} className="flex-1">
                    Back
                  </Button>
                  <Button
                    onClick={handlePayment}
                    disabled={!paymentMethod || processing}
                    className="flex-1 bg-primary hover:bg-primary/90"
                  >
                    {processing ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Processing...
                      </div>
                    ) : (
                      `Pay ₹${mockTransaction.finalAmount.toLocaleString()}`
                    )}
                  </Button>
                </div>
              </>
            )}

            {step === 3 && (
              <Card className="border-green-200 bg-green-50">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <CardTitle className="text-green-800">Payment Successful!</CardTitle>
                  <CardDescription className="text-green-700">
                    Your payment has been processed and held in escrow
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-sm text-muted-foreground mb-2">Transaction ID</div>
                    <div className="font-mono font-medium">{mockTransaction.id}</div>
                  </div>

                  <div className="space-y-2 text-sm text-green-800">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      Payment held in escrow until delivery confirmation
                    </div>
                    <div className="flex items-center gap-2">
                      <AlertCircle className="w-4 h-4" />
                      You will receive SMS and email updates
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Button variant="outline" className="flex-1 bg-transparent">
                      Download Receipt
                    </Button>
                    <Button className="flex-1 bg-primary hover:bg-primary/90">Track Order</Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Payment Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Payment Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Crop Value</span>
                    <span>₹{mockTransaction.totalAmount.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Escrow Fee (1%)</span>
                    <span>₹{mockTransaction.escrowFee.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Platform Fee (0.5%)</span>
                    <span>₹{mockTransaction.platformFee.toLocaleString()}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total Amount</span>
                    <span>₹{mockTransaction.finalAmount.toLocaleString()}</span>
                  </div>
                </div>

                <div className="bg-blue-50 p-3 rounded-lg">
                  <div className="text-sm font-medium text-blue-800 mb-1">Escrow Protection</div>
                  <div className="text-xs text-blue-700">
                    Your money is safe and will only be released to the farmer after successful delivery
                  </div>
                </div>

                <div className="space-y-2 text-xs text-muted-foreground">
                  <div>• Secure 256-bit SSL encryption</div>
                  <div>• PCI DSS compliant payment processing</div>
                  <div>• 24/7 fraud monitoring</div>
                  <div>• Instant refund on disputes</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
