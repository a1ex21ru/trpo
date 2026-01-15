"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Calendar, DollarSign, User } from "lucide-react"

interface ExpenseRequest {
  id: string
  title: string
  category: string
  amount: number
  employeeName: string
  status: "pending" | "approved" | "rejected"
  createdAt: string
  reviewedAt?: string
  reviewedBy?: string
}

// Mock data
const mockAllRequests: ExpenseRequest[] = [
  {
    id: "1",
    title: "Закупка офисной мебели",
    category: "furniture",
    amount: 45000,
    employeeName: "Смирнов А.В.",
    status: "pending",
    createdAt: "2025-01-15T10:30:00",
  },
  {
    id: "2",
    title: "Лицензии на ПО",
    category: "software",
    amount: 25000,
    employeeName: "Кузнецова М.П.",
    status: "approved",
    createdAt: "2025-01-10T14:20:00",
    reviewedAt: "2025-01-11T09:15:00",
    reviewedBy: "Иванов И.И.",
  },
  {
    id: "3",
    title: "Канцелярские товары",
    category: "office-supplies",
    amount: 3500,
    employeeName: "Петров С.Д.",
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
    employeeName: "Соколова Е.Н.",
    status: "rejected",
    createdAt: "2025-01-05T09:45:00",
    reviewedAt: "2025-01-06T10:00:00",
    reviewedBy: "Сидоров П.П.",
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

interface AllRequestsManagementProps {
  filter: "all" | "reviewed"
}

export function AllRequestsManagement({ filter }: AllRequestsManagementProps) {
  const filteredRequests =
    filter === "all" ? mockAllRequests : mockAllRequests.filter((req) => req.status !== "pending")

  return (
    <Card>
      <CardHeader>
        <CardTitle>{filter === "all" ? "Все заявки" : "История рассмотрения"}</CardTitle>
        <CardDescription>Всего заявок: {filteredRequests.length}</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Заявка</TableHead>
              <TableHead>Сотрудник</TableHead>
              <TableHead>Категория</TableHead>
              <TableHead>Сумма</TableHead>
              <TableHead>Статус</TableHead>
              <TableHead>Дата создания</TableHead>
              {filter === "reviewed" && <TableHead>Рассмотрел</TableHead>}
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredRequests.map((request) => (
              <TableRow key={request.id}>
                <TableCell className="font-medium">{request.title}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-muted-foreground" />
                    {request.employeeName}
                  </div>
                </TableCell>
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
                {filter === "reviewed" && (
                  <TableCell className="text-sm text-muted-foreground">{request.reviewedBy || "—"}</TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
