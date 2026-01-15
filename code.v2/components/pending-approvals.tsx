"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Calendar, DollarSign, Package, Store, CheckCircle2, XCircle } from "lucide-react"
import { ApprovalDialog } from "@/components/approval-dialog"

interface ExpenseRequest {
  id: string
  title: string
  category: string
  amount: number
  vendor: string
  description: string
  status: "pending" | "approved" | "rejected"
  createdAt: string
  employeeName: string
}

// Mock data
const mockPendingRequests: ExpenseRequest[] = [
  {
    id: "1",
    title: "Закупка офисной мебели",
    category: "furniture",
    amount: 45000,
    vendor: "IKEA",
    description: "Необходимо приобрести 3 рабочих стола и 3 офисных кресла для новых сотрудников",
    status: "pending",
    createdAt: "2025-01-15T10:30:00",
    employeeName: "Смирнов А.В.",
  },
]

const categoryLabels: Record<string, string> = {
  "office-supplies": "Офисные принадлежности",
  equipment: "Оборудование",
  furniture: "Мебель",
  software: "ПО",
  travel: "Командировки",
  marketing: "Маркетинг",
  other: "Прочее",
}

export function PendingApprovals() {
  const [requests, setRequests] = useState(mockPendingRequests)
  const [selectedRequest, setSelectedRequest] = useState<ExpenseRequest | null>(null)
  const [approvalAction, setApprovalAction] = useState<"approve" | "reject" | null>(null)

  const handleApprovalClick = (request: ExpenseRequest, action: "approve" | "reject") => {
    setSelectedRequest(request)
    setApprovalAction(action)
  }

  const handleApprovalComplete = () => {
    if (selectedRequest) {
      setRequests(requests.filter((r) => r.id !== selectedRequest.id))
    }
    setSelectedRequest(null)
    setApprovalAction(null)
  }

  if (requests.length === 0) {
    return (
      <Card>
        <CardContent className="flex flex-col items-center justify-center py-12">
          <CheckCircle2 className="w-12 h-12 text-muted-foreground mb-4" />
          <p className="text-muted-foreground text-center">Нет заявок, ожидающих рассмотрения</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <>
      <div className="space-y-4">
        {requests.map((request) => (
          <Card key={request.id} className="overflow-hidden">
            <CardHeader className="bg-muted/30">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <CardTitle className="text-xl mb-1">{request.title}</CardTitle>
                  <CardDescription>
                    Заявка #{request.id} от {request.employeeName}
                  </CardDescription>
                </div>
                <Badge variant="secondary" className="text-sm">
                  Ожидает рассмотрения
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Package className="w-5 h-5 text-muted-foreground mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground mb-1">Категория</p>
                      <p className="font-medium">{categoryLabels[request.category]}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Store className="w-5 h-5 text-muted-foreground mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground mb-1">Поставщик</p>
                      <p className="font-medium">{request.vendor}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <DollarSign className="w-5 h-5 text-muted-foreground mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground mb-1">Сумма</p>
                      <p className="font-medium text-lg">{request.amount.toLocaleString("ru-RU")} ₽</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-muted-foreground mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground mb-1">Дата создания</p>
                      <p className="font-medium">
                        {new Date(request.createdAt).toLocaleDateString("ru-RU", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Separator className="my-4" />

              <div className="mb-6">
                <h4 className="font-semibold mb-2">Описание</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{request.description}</p>
              </div>

              <div className="flex gap-3">
                <Button className="flex-1" size="lg" onClick={() => handleApprovalClick(request, "approve")}>
                  <CheckCircle2 className="w-5 h-5 mr-2" />
                  Одобрить
                </Button>
                <Button
                  variant="destructive"
                  className="flex-1"
                  size="lg"
                  onClick={() => handleApprovalClick(request, "reject")}
                >
                  <XCircle className="w-5 h-5 mr-2" />
                  Отклонить
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <ApprovalDialog
        request={selectedRequest}
        action={approvalAction}
        open={!!selectedRequest && !!approvalAction}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedRequest(null)
            setApprovalAction(null)
          }
        }}
        onComplete={handleApprovalComplete}
      />
    </>
  )
}
