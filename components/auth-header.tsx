"use client"

import { Button } from "@/components/ui/button"
import { LanguageSelector } from "@/components/language-selector"
import { useLanguage } from "@/contexts/language-context"
import Link from "next/link"
import Image from "next/image"

export function AuthHeader() {
  const { t } = useLanguage()

  return (
    <header className="border-b border-border bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/krishiconnect-logo.jpeg"
              alt="KrishiConnect Logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <span className="font-bold text-xl text-foreground">KrishiConnect</span>
          </Link>
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
  )
}
