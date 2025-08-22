"use client"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Users, Shield, Globe, Truck, BarChart3 } from "lucide-react"
import { LanguageSelector } from "@/components/language-selector"
import { useLanguage } from "@/contexts/language-context"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Image
                src="/krishiconnect-logo.jpeg"
                alt="KrishiConnect Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                {t("features")}
              </a>
              <Link href="/prices" className="text-muted-foreground hover:text-foreground transition-colors">
                {t("priceDashboard")}
              </Link>
              <Link href="/forecasts" className="text-muted-foreground hover:text-foreground transition-colors">
                {t("aiForecasts")}
              </Link>
              <a href="#for-farmers" className="text-muted-foreground hover:text-foreground transition-colors">
                {t("forFarmers")}
              </a>
              <a href="#for-traders" className="text-muted-foreground hover:text-foreground transition-colors">
                {t("forTraders")}
              </a>
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                {t("about")}
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <LanguageSelector />
              <Link href="/login">
                <Button variant="ghost" size="sm">
                  {t("signIn")}
                </Button>
              </Link>
              <Link href="/signup">
                <Button size="sm" className="bg-primary hover:bg-primary/90">
                  {t("getStarted")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-6 bg-red-600 hover:bg-red-600 text-white">{t("directFarmToTrader")}</Badge>
          <h1 className="font-bold text-5xl md:text-6xl text-foreground mb-6 leading-tight">
            {t("marketplaceTitle").split(" ").slice(0, 2).join(" ")}
            <br />
            {t("marketplaceTitle").split(" ").slice(2).join(" ")}
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            {t("marketplaceSubtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button size="lg" className="text-lg px-8 bg-primary hover:bg-primary/90">
                {t("getStarted")}
              </Button>
            </Link>
            <Link href="/prices">
              <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                {t("viewLivePrices")}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-bold text-3xl md:text-4xl text-foreground mb-4">{t("smartTradingTitle")}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("smartTradingSubtitle")}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <Card className="border-border hover:shadow-lg transition-shadow bg-orange-50">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle className="font-semibold">{t("liveMarketPrices")}</CardTitle>
                <CardDescription>{t("liveMarketPricesDesc")}</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow bg-red-50">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle className="font-semibold">{t("aiDemandForecasts")}</CardTitle>
                <CardDescription>{t("aiDemandForecastsDesc")}</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow bg-yellow-50">
              <CardHeader>
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-yellow-600" />
                </div>
                <CardTitle className="font-semibold">{t("directTrading")}</CardTitle>
                <CardDescription>{t("directTradingDesc")}</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow bg-red-50">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle className="font-semibold">{t("securePayments")}</CardTitle>
                <CardDescription>{t("securePaymentsDesc")}</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow bg-orange-50">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle className="font-semibold">{t("multiLanguage")}</CardTitle>
                <CardDescription>{t("multiLanguageDesc")}</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow bg-red-50">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Truck className="w-6 h-6 text-red-600" />
                </div>
                <CardTitle className="font-semibold">{t("logisticsSupport")}</CardTitle>
                <CardDescription>{t("logisticsSupportDesc")}</CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">10,000+</div>
              <div className="text-muted-foreground">{t("activeFarmers")}</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">5,000+</div>
              <div className="text-muted-foreground">{t("verifiedTraders")}</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">₹50Cr+</div>
              <div className="text-muted-foreground">{t("totalTrades")}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="font-bold text-3xl md:text-4xl text-foreground mb-4">{t("transformTitle")}</h2>
          <p className="text-xl text-muted-foreground mb-8">{t("transformSubtitle")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 bg-primary hover:bg-primary/90">
              {t("joinAsFarmers")}
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
              {t("joinAsTraders")}
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 bg-white border-t border-border">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image
                  src="/krishiconnect-logo.jpeg"
                  alt="KrishiConnect Logo"
                  width={120}
                  height={40}
                  className="h-8 w-auto"
                />
              </div>
              <p className="text-sm text-muted-foreground">
                Connecting farmers and traders directly for transparent, efficient agricultural trading.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">{t("platform")}</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>
                  <Link href="/prices" className="hover:text-foreground transition-colors">
                    {t("livePrices")}
                  </Link>
                </div>
                <div>
                  <Link href="/forecasts" className="hover:text-foreground transition-colors">
                    {t("marketForecasts")}
                  </Link>
                </div>
                <div>
                  <Link href="/marketplace" className="hover:text-foreground transition-colors">
                    {t("tradingDashboard")}
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">{t("support")}</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>
                  <a href="#" className="hover:text-foreground transition-colors">
                    {t("helpCenter")}
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-foreground transition-colors">
                    {t("contactUs")}
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-foreground transition-colors">
                    {t("documentation")}
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">{t("company")}</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>
                  <a href="#" className="hover:text-foreground transition-colors">
                    {t("aboutUs")}
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-foreground transition-colors">
                    {t("privacyPolicy")}
                  </a>
                </div>
                <div>
                  <a href="#" className="hover:text-foreground transition-colors">
                    {t("termsOfService")}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © 2024 KrishiConnect. {t("allRightsReserved")}.
          </div>
        </div>
      </footer>
    </div>
  )
}
