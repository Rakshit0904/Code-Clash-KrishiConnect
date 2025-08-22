"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Globe } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function LanguageSelector() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <div className="flex items-center space-x-1">
      <Globe className="w-4 h-4 text-muted-foreground" />
      <Select value={language} onValueChange={(value) => setLanguage(value as "en" | "hi")}>
        <SelectTrigger className="w-20 h-8 border-none bg-transparent text-sm text-muted-foreground">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="en">{t("english")}</SelectItem>
          <SelectItem value="hi">{t("hindi")}</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}
