"use client"

import { useState } from "react"
import { NavHeader } from "@/components/nav-header"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus } from "lucide-react"
import { ExpenseRequestForm } from "@/components/expense-request-form"
import { ExpenseRequestsList } from "@/components/expense-requests-list"

export default function EmployeePage() {
  const [showRequestForm, setShowRequestForm] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <NavHeader title="Панель сотрудника" />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-2">Мои заявки на расходы</h2>
            <p className="text-muted-foreground">Создавайте и отслеживайте заявки на закупку</p>
          </div>
          <Button onClick={() => setShowRequestForm(true)} size="lg">
            <Plus className="w-5 h-5 mr-2" />
            Новая заявка
          </Button>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-4">
            <TabsTrigger value="all">Все</TabsTrigger>
            <TabsTrigger value="pending">Ожидание</TabsTrigger>
            <TabsTrigger value="approved">Одобрено</TabsTrigger>
            <TabsTrigger value="rejected">Отклонено</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <ExpenseRequestsList filter="all" />
          </TabsContent>

          <TabsContent value="pending" className="mt-6">
            <ExpenseRequestsList filter="pending" />
          </TabsContent>

          <TabsContent value="approved" className="mt-6">
            <ExpenseRequestsList filter="approved" />
          </TabsContent>

          <TabsContent value="rejected" className="mt-6">
            <ExpenseRequestsList filter="rejected" />
          </TabsContent>
        </Tabs>

        <ExpenseRequestForm open={showRequestForm} onOpenChange={setShowRequestForm} />
      </main>
    </div>
  )
}
