"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AuthHeader } from "@/components/auth-header"
import { CheckCircle, Clock, AlertTriangle, Download, Eye, MessageCircle } from "lucide-react"

// Mock transaction history
const transactions = [
  {
    id: "TXN-2024-001",
    crop: "Wheat",
    variety: "HD-2967",
    quantity: 100,
    amount: 221300,
    status: "completed",
    date: "2024-03-15",
    farmer: "Rajesh Kumar",
    location: "Panipat, Haryana",
    deliveryDate: "2024-03-20",
    paymentMethod: "UPI",
  },
  {
    id: "TXN-2024-002",
    crop: "Rice",
    variety: "Basmati 1121",
    quantity: 50,
    amount: 176500,
    status: "in-escrow",
    date: "2024-03-18",
    farmer: "Suresh Singh",
    location: "Karnal, Haryana",
    deliveryDate: "2024-03-25",
    paymentMethod: "Card",
  },
  {
    id: "TXN-2024-003",
    crop: "Cotton",
    variety: "Bt Cotton",
    quantity: 25,
    amount: 146450,
    status: "pending",
    date: "2024-03-19",
    farmer: "Ramesh Patel",
    location: "Ahmedabad, Gujarat",
    deliveryDate: "2024-03-28",
    paymentMethod: "Net Banking",
  },
  {
    id: "TXN-2024-004",
    crop: "Tomato",
    variety: "Hybrid",
    quantity: 10,
    amount: 12600,
    status: "disputed",
    date: "2024-03-10",
    farmer: "Lakshmi Devi",
    location: "Bangalore, Karnataka",
    deliveryDate: "2024-03-15",
    paymentMethod: "UPI",
  },
]

export default function TransactionsPage() {
  const [statusFilter, setStatusFilter] = useState("all")

  const filteredTransactions = transactions.filter((txn) => statusFilter === "all" || txn.status === statusFilter)

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Completed</Badge>
      case "in-escrow":
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">In Escrow</Badge>
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Pending</Badge>
      case "disputed":
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Disputed</Badge>
      default:
        return <Badge variant="secondary">Unknown</Badge>
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-5 h-5 text-green-600" />
      case "in-escrow":
        return <Clock className="w-5 h-5 text-blue-600" />
      case "pending":
        return <Clock className="w-5 h-5 text-yellow-600" />
      case "disputed":
        return <AlertTriangle className="w-5 h-5 text-red-600" />
      default:
        return <Clock className="w-5 h-5 text-gray-600" />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AuthHeader />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Transaction History</h1>
          <p className="text-muted-foreground">Track all your payments and transactions</p>
        </div>

        {/* Summary Cards */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Transactions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{transactions.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Value</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">
                ₹{(transactions.reduce((acc, txn) => acc + txn.amount, 0) / 100000).toFixed(1)}L
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">In Escrow</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">
                {transactions.filter((txn) => txn.status === "in-escrow").length}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Completed</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">
                {transactions.filter((txn) => txn.status === "completed").length}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filter */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Filter Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Transactions</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="in-escrow">In Escrow</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="disputed">Disputed</SelectItem>
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        {/* Transactions List */}
        <div className="space-y-4">
          {filteredTransactions.map((transaction) => (
            <Card key={transaction.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {getStatusIcon(transaction.status)}
                    <div>
                      <div className="font-semibold text-lg">{transaction.crop}</div>
                      <div className="text-sm text-muted-foreground">{transaction.variety}</div>
                    </div>
                  </div>
                  {getStatusBadge(transaction.status)}
                </div>

                <div className="grid md:grid-cols-4 gap-4 mb-4">
                  <div>
                    <div className="text-sm text-muted-foreground">Transaction ID</div>
                    <div className="font-mono text-sm">{transaction.id}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Farmer</div>
                    <div className="font-medium">{transaction.farmer}</div>
                    <div className="text-xs text-muted-foreground">{transaction.location}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Quantity</div>
                    <div className="font-medium">{transaction.quantity} quintals</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Amount</div>
                    <div className="font-semibold text-lg">₹{transaction.amount.toLocaleString()}</div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mb-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Date: </span>
                    {new Date(transaction.date).toLocaleDateString()}
                  </div>
                  <div>
                    <span className="text-muted-foreground">Delivery: </span>
                    {new Date(transaction.deliveryDate).toLocaleDateString()}
                  </div>
                  <div>
                    <span className="text-muted-foreground">Payment: </span>
                    {transaction.paymentMethod}
                  </div>
                </div>

                <div className="flex gap-2 pt-4 border-t">
                  <Button variant="outline" size="sm">
                    <Eye className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Receipt
                  </Button>
                  {transaction.status === "disputed" && (
                    <Button variant="outline" size="sm">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Resolve Dispute
                    </Button>
                  )}
                  {transaction.status === "in-escrow" && (
                    <Button size="sm" className="bg-primary hover:bg-primary/90">
                      Confirm Delivery
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredTransactions.length === 0 && (
          <Card>
            <CardContent className="text-center py-12">
              <div className="text-muted-foreground">No transactions found for the selected filter.</div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
