"use client"

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExpensesByCategory } from "@/components/expenses-by-category"
import { ExpensesTrend } from "@/components/expenses-trend"
import { BudgetOverview } from "@/components/budget-overview"
import { TopExpenses } from "@/components/top-expenses"

export function FinancialReports() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Финансовые отчеты</CardTitle>
          <CardDescription>Аналитика расходов и планирование бюджета</CardDescription>
        </CardHeader>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <BudgetOverview />
        <TopExpenses />
      </div>

      <Tabs defaultValue="category" className="w-full">
        <TabsList>
          <TabsTrigger value="category">По категориям</TabsTrigger>
          <TabsTrigger value="trend">Динамика</TabsTrigger>
        </TabsList>

        <TabsContent value="category" className="mt-6">
          <ExpensesByCategory />
        </TabsContent>

        <TabsContent value="trend" className="mt-6">
          <ExpensesTrend />
        </TabsContent>
      </Tabs>
    </div>
  )
}
