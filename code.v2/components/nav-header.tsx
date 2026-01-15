import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Building2, FileText } from "lucide-react"

interface NavHeaderProps {
  title: string
  showBackButton?: boolean
}

export function NavHeader({ title, showBackButton = true }: NavHeaderProps) {
  return (
    <header className="border-b border-border bg-card">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {showBackButton && (
              <Link href="/">
                <Button variant="ghost" size="icon">
                  <ArrowLeft className="w-5 h-5" />
                </Button>
              </Link>
            )}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center">
                <Building2 className="w-5 h-5 text-primary" />
              </div>
              <h1 className="text-xl font-semibold">{title}</h1>
            </div>
          </div>

          <Link href="/documentation">
            <Button variant="ghost" size="sm">
              <FileText className="w-4 h-4 mr-2" />
              Документация
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
