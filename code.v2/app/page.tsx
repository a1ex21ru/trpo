import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, UserCog, FileText } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <div className="flex justify-end mb-4">
          <Link href="/documentation">
            <Button variant="outline" size="sm">
              <FileText className="w-4 h-4 mr-2" />
              Документация системы
            </Button>
          </Link>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-3 text-balance">Система учета внутриофисных расходов</h1>
          <p className="text-muted-foreground text-lg">Выберите роль для входа в систему</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Link href="/employee" className="block group">
            <Card className="h-full transition-all hover:shadow-lg hover:border-primary/50">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Сотрудник</CardTitle>
                <CardDescription className="text-base">Подача заявок на расходы</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li>• Создание заявок на закупку</li>
                  <li>• Отслеживание статуса заявок</li>
                  <li>• Прикрепление документов</li>
                  <li>• История расходов</li>
                </ul>
                <Button className="w-full" size="lg">
                  Войти как сотрудник
                </Button>
              </CardContent>
            </Card>
          </Link>

          <Link href="/management" className="block group">
            <Card className="h-full transition-all hover:shadow-lg hover:border-accent/50">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <UserCog className="w-8 h-8 text-accent" />
                </div>
                <CardTitle className="text-2xl">Руководство</CardTitle>
                <CardDescription className="text-base">Управление и контроль расходов</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li>• Согласование заявок</li>
                  <li>• Финансовые отчеты</li>
                  <li>• Установка лимитов</li>
                  <li>• Аналитика расходов</li>
                </ul>
                <Button className="w-full" size="lg" variant="secondary">
                  Войти как руководитель
                </Button>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  )
}
