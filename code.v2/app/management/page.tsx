"use client"
import { NavHeader } from "@/components/nav-header"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PendingApprovals } from "@/components/pending-approvals"
import { AllRequestsManagement } from "@/components/all-requests-management"
import { ExpenseStats } from "@/components/expense-stats"
import { FinancialReports } from "@/components/financial-reports"
import { ClipboardList, CheckCircle2, Clock, BarChart3 } from "lucide-react"

export default function ManagementPage() {
  return (
    <div className="min-h-screen bg-background">
      <NavHeader title="Панель руководства" />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Управление расходами</h2>
          <p className="text-muted-foreground">Рассмотрение заявок и контроль бюджета</p>
        </div>

        <ExpenseStats />

        <Tabs defaultValue="pending" className="w-full mt-8">
          <TabsList className="grid w-full max-w-2xl grid-cols-4">
            <TabsTrigger value="pending">
              <Clock className="w-4 h-4 mr-2" />
              Ожидают
            </TabsTrigger>
            <TabsTrigger value="all">
              <ClipboardList className="w-4 h-4 mr-2" />
              Все заявки
            </TabsTrigger>
            <TabsTrigger value="history">
              <CheckCircle2 className="w-4 h-4 mr-2" />
              История
            </TabsTrigger>
            <TabsTrigger value="reports">
              <BarChart3 className="w-4 h-4 mr-2" />
              Отчеты
            </TabsTrigger>
          </TabsList>

          <TabsContent value="pending" className="mt-6">
            <PendingApprovals />
          </TabsContent>

          <TabsContent value="all" className="mt-6">
            <AllRequestsManagement filter="all" />
          </TabsContent>

          <TabsContent value="history" className="mt-6">
            <AllRequestsManagement filter="reviewed" />
          </TabsContent>

          <TabsContent value="reports" className="mt-6">
            <FinancialReports />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
