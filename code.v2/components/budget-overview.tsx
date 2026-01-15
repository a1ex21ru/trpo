"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, AlertCircle } from "lucide-react"

export function BudgetOverview() {
  // Mock data
  const budget = {
    total: 100000,
    spent: 28500,
    remaining: 71500,
    percentUsed: 28.5,
    trend: "down", // "up" or "down"
    trendPercent: 12,
  }

  const isOverBudget = budget.percentUsed > 80
  const isWarning = budget.percentUsed > 60 && budget.percentUsed <= 80

  return (
    <Card>
      <CardHeader>
        <CardTitle>Бюджет на месяц</CardTitle>
        <CardDescription>Январь 2025</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Использовано</span>
            <span className="font-medium">
              {budget.spent.toLocaleString("ru-RU")} ₽ из {budget.total.toLocaleString("ru-RU")} ₽
            </span>
          </div>
          <Progress value={budget.percentUsed} className="h-3" />
          <div className="flex items-center justify-between">
            <Badge variant={isOverBudget ? "destructive" : isWarning ? "secondary" : "default"} className="text-xs">
              {budget.percentUsed.toFixed(1)}% использовано
            </Badge>
            {isOverBudget && (
              <div className="flex items-center gap-1 text-xs text-destructive">
                <AlertCircle className="w-3 h-3" />
                Превышен лимит
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-4 border-t">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Остаток</p>
            <p className="text-2xl font-bold">{budget.remaining.toLocaleString("ru-RU")} ₽</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-1">Тренд</p>
            <div className="flex items-center gap-2">
              {budget.trend === "down" ? (
                <>
                  <TrendingDown className="w-5 h-5 text-green-500" />
                  <span className="text-2xl font-bold text-green-500">-{budget.trendPercent}%</span>
                </>
              ) : (
                <>
                  <TrendingUp className="w-5 h-5 text-red-500" />
                  <span className="text-2xl font-bold text-red-500">+{budget.trendPercent}%</span>
                </>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
