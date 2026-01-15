"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DollarSign } from "lucide-react"

export function TopExpenses() {
  // Mock data
  const topExpenses = [
    { title: "Закупка офисной мебели", amount: 45000, category: "Мебель", status: "pending" },
    { title: "Лицензии на ПО", amount: 25000, category: "ПО", status: "approved" },
    { title: "Канцелярские товары", amount: 3500, category: "Офисные принадлежности", status: "approved" },
  ]

  const statusLabels: Record<string, string> = {
    pending: "Ожидание",
    approved: "Одобрено",
    rejected: "Отклонено",
  }

  const statusVariants: Record<string, "default" | "secondary" | "destructive"> = {
    pending: "secondary",
    approved: "default",
    rejected: "destructive",
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Крупные расходы</CardTitle>
        <CardDescription>Топ-3 заявки по сумме</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {topExpenses.map((expense, index) => (
            <div key={index} className="flex items-start gap-4 pb-4 border-b last:border-0 last:pb-0">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <DollarSign className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <p className="font-medium leading-tight">{expense.title}</p>
                  <Badge variant={statusVariants[expense.status]} className="shrink-0">
                    {statusLabels[expense.status]}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{expense.category}</p>
                <p className="text-lg font-bold">{expense.amount.toLocaleString("ru-RU")} ₽</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
