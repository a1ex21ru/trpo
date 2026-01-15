"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Eye, Calendar, DollarSign, Package } from "lucide-react"
import { ExpenseRequestDetails } from "@/components/expense-request-details"

interface ExpenseRequest {
  id: string
  title: string
  category: string
  amount: number
  vendor: string
  description: string
  status: "pending" | "approved" | "rejected"
  createdAt: string
  reviewedAt?: string
  reviewedBy?: string
  comments?: string
}

// Mock data
const mockRequests: ExpenseRequest[] = [
  {
    id: "1",
    title: "Закупка офисной мебели",
    category: "furniture",
    amount: 45000,
    vendor: "IKEA",
    description: "Необходимо приобрести 3 рабочих стола и 3 офисных кресла для новых сотрудников",
    status: "pending",
    createdAt: "2025-01-15T10:30:00",
  },
  {
    id: "2",
    title: "Лицензии на ПО",
    category: "software",
    amount: 25000,
    vendor: "Microsoft",
    description: "Продление годовых лицензий Microsoft 365 для команды разработки",
    status: "approved",
    createdAt: "2025-01-10T14:20:00",
    reviewedAt: "2025-01-11T09:15:00",
    reviewedBy: "Иванов И.И.",
    comments: "Одобрено. Необходимо для работы команды.",
  },
  {
    id: "3",
    title: "Канцелярские товары",
    category: "office-supplies",
    amount: 3500,
    vendor: "Комус",
    description: "Закупка бумаги, ручек, блокнотов и других канцелярских принадлежностей",
    status: "approved",
    createdAt: "2025-01-08T11:00:00",
    reviewedAt: "2025-01-08T16:30:00",
    reviewedBy: "Петрова А.С.",
  },
  {
    id: "4",
    title: "Рекламная кампания",
    category: "marketing",
    amount: 150000,
    vendor: "Яндекс.Директ",
    description: "Запуск рекламной кампании на 3 месяца для продвижения нового продукта",
    status: "rejected",
    createdAt: "2025-01-05T09:45:00",
    reviewedAt: "2025-01-06T10:00:00",
    reviewedBy: "Сидоров П.П.",
    comments: "Отклонено. Превышен месячный бюджет на маркетинг. Предложите альтернативный план.",
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

const statusLabels: Record<string, string> = {
  pending: "Ожидание",
  approved: "Одобрено",
  rejected: "Отклонено",
}

const statusVariants: Record<string, "default" | "secondary" | "destructive" | "outline"> = {
  pending: "secondary",
  approved: "default",
  rejected: "destructive",
}

interface ExpenseRequestsListProps {
  filter: "all" | "pending" | "approved" | "rejected"
}

export function ExpenseRequestsList({ filter }: ExpenseRequestsListProps) {
  const [selectedRequest, setSelectedRequest] = useState<ExpenseRequest | null>(null)

  const filteredRequests = filter === "all" ? mockRequests : mockRequests.filter((req) => req.status === filter)

  if (filteredRequests.length === 0) {
    return (
      <Card>
        <CardContent className="flex flex-col items-center justify-center py-12">
          <Package className="w-12 h-12 text-muted-foreground mb-4" />
          <p className="text-muted-foreground text-center">
            {filter === "all" ? "У вас пока нет заявок" : `Нет заявок со статусом "${statusLabels[filter]}"`}
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Список заявок</CardTitle>
          <CardDescription>
            {filter === "all"
              ? `Всего заявок: ${filteredRequests.length}`
              : `Заявок со статусом "${statusLabels[filter]}": ${filteredRequests.length}`}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Название</TableHead>
                <TableHead>Категория</TableHead>
                <TableHead>Сумма</TableHead>
                <TableHead>Статус</TableHead>
                <TableHead>Дата</TableHead>
                <TableHead className="text-right">Действия</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredRequests.map((request) => (
                <TableRow key={request.id}>
                  <TableCell className="font-medium">{request.title}</TableCell>
                  <TableCell>{categoryLabels[request.category]}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <DollarSign className="w-4 h-4 text-muted-foreground" />
                      {request.amount.toLocaleString("ru-RU")} ₽
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={statusVariants[request.status]}>{statusLabels[request.status]}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {new Date(request.createdAt).toLocaleDateString("ru-RU")}
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm" onClick={() => setSelectedRequest(request)}>
                      <Eye className="w-4 h-4 mr-2" />
                      Подробнее
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <ExpenseRequestDetails
        request={selectedRequest}
        open={!!selectedRequest}
        onOpenChange={(open) => !open && setSelectedRequest(null)}
      />
    </>
  )
}
