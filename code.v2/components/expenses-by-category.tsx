"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

export function ExpensesByCategory() {
  // Mock data
  const data = [
    { category: "Мебель", amount: 45000, count: 1 },
    { category: "ПО", amount: 25000, count: 1 },
    { category: "Офисные принадлежности", amount: 3500, count: 1 },
    { category: "Маркетинг", amount: 0, count: 0 },
    { category: "Оборудование", amount: 0, count: 0 },
  ]

  const chartConfig = {
    amount: {
      label: "Сумма",
      color: "hsl(var(--primary))",
    },
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Расходы по категориям</CardTitle>
        <CardDescription>Распределение расходов за текущий месяц</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis dataKey="category" className="text-xs" angle={-45} textAnchor="end" height={100} />
              <YAxis className="text-xs" />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="amount" fill="var(--color-amount)" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>

        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
          {data.map((item) => (
            <div key={item.category} className="space-y-1">
              <p className="text-sm text-muted-foreground">{item.category}</p>
              <p className="text-lg font-bold">{item.amount.toLocaleString("ru-RU")} ₽</p>
              <p className="text-xs text-muted-foreground">{item.count} заявок</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
