"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Line, LineChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

export function ExpensesTrend() {
  // Mock data - weekly expenses
  const data = [
    { week: "Нед 1", amount: 5000, approved: 5000, pending: 0 },
    { week: "Нед 2", amount: 8500, approved: 8500, pending: 0 },
    { week: "Нед 3", amount: 15000, approved: 15000, pending: 0 },
    { week: "Нед 4", amount: 45000, approved: 0, pending: 45000 },
  ]

  const chartConfig = {
    amount: {
      label: "Всего",
      color: "hsl(var(--primary))",
    },
    approved: {
      label: "Одобрено",
      color: "hsl(var(--chart-2))",
    },
    pending: {
      label: "Ожидает",
      color: "hsl(var(--chart-3))",
    },
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Динамика расходов</CardTitle>
        <CardDescription>Расходы по неделям за текущий месяц</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis dataKey="week" className="text-xs" />
              <YAxis className="text-xs" />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Line type="monotone" dataKey="amount" stroke="var(--color-amount)" strokeWidth={2} dot={{ r: 4 }} />
              <Line type="monotone" dataKey="approved" stroke="var(--color-approved)" strokeWidth={2} dot={{ r: 4 }} />
              <Line type="monotone" dataKey="pending" stroke="var(--color-pending)" strokeWidth={2} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>

        <div className="mt-6 grid grid-cols-3 gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary" />
              <p className="text-sm text-muted-foreground">Всего</p>
            </div>
            <p className="text-lg font-bold">73,500 ₽</p>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-chart-2" />
              <p className="text-sm text-muted-foreground">Одобрено</p>
            </div>
            <p className="text-lg font-bold">28,500 ₽</p>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-chart-3" />
              <p className="text-sm text-muted-foreground">Ожидает</p>
            </div>
            <p className="text-lg font-bold">45,000 ₽</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
