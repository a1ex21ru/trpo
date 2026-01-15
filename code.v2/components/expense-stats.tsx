"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, TrendingUp, Clock, CheckCircle2 } from "lucide-react"

export function ExpenseStats() {
  // Mock data - in real app, this would come from API
  const stats = {
    totalPending: 45000,
    totalApproved: 28500,
    pendingCount: 1,
    approvedThisMonth: 3,
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">Ожидают рассмотрения</CardTitle>
          <Clock className="w-4 h-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.pendingCount}</div>
          <p className="text-xs text-muted-foreground mt-1">На сумму {stats.totalPending.toLocaleString("ru-RU")} ₽</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">Одобрено в этом месяце</CardTitle>
          <CheckCircle2 className="w-4 h-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.approvedThisMonth}</div>
          <p className="text-xs text-muted-foreground mt-1">На сумму {stats.totalApproved.toLocaleString("ru-RU")} ₽</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">Средняя сумма заявки</CardTitle>
          <DollarSign className="w-4 h-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {Math.round(stats.totalApproved / stats.approvedThisMonth).toLocaleString("ru-RU")} ₽
          </div>
          <p className="text-xs text-muted-foreground mt-1">За текущий месяц</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">Использовано бюджета</CardTitle>
          <TrendingUp className="w-4 h-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">28%</div>
          <p className="text-xs text-muted-foreground mt-1">28,500 из 100,000 ₽</p>
        </CardContent>
      </Card>
    </div>
  )
}
