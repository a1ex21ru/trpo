"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Calendar, DollarSign, Package, Store, User, MessageSquare } from "lucide-react"

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
  pending: "Ожидание рассмотрения",
  approved: "Одобрено",
  rejected: "Отклонено",
}

const statusVariants: Record<string, "default" | "secondary" | "destructive" | "outline"> = {
  pending: "secondary",
  approved: "default",
  rejected: "destructive",
}

interface ExpenseRequestDetailsProps {
  request: ExpenseRequest | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ExpenseRequestDetails({ request, open, onOpenChange }: ExpenseRequestDetailsProps) {
  if (!request) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <DialogTitle className="text-2xl mb-2">{request.title}</DialogTitle>
              <DialogDescription>Заявка #{request.id}</DialogDescription>
            </div>
            <Badge variant={statusVariants[request.status]} className="text-sm">
              {statusLabels[request.status]}
            </Badge>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Package className="w-4 h-4" />
                <span>Категория</span>
              </div>
              <p className="font-medium">{categoryLabels[request.category]}</p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <DollarSign className="w-4 h-4" />
                <span>Сумма</span>
              </div>
              <p className="font-medium text-lg">{request.amount.toLocaleString("ru-RU")} ₽</p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Store className="w-4 h-4" />
                <span>Поставщик</span>
              </div>
              <p className="font-medium">{request.vendor}</p>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span>Дата создания</span>
              </div>
              <p className="font-medium">
                {new Date(request.createdAt).toLocaleDateString("ru-RU", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>

          <Separator />

          <div className="space-y-2">
            <h4 className="font-semibold">Описание</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{request.description}</p>
          </div>

          {(request.reviewedAt || request.reviewedBy || request.comments) && (
            <>
              <Separator />
              <div className="space-y-4">
                <h4 className="font-semibold">Информация о рассмотрении</h4>

                {request.reviewedBy && (
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="w-4 h-4" />
                      <span>Рассмотрел</span>
                    </div>
                    <p className="font-medium">{request.reviewedBy}</p>
                  </div>
                )}

                {request.reviewedAt && (
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>Дата рассмотрения</span>
                    </div>
                    <p className="font-medium">
                      {new Date(request.reviewedAt).toLocaleDateString("ru-RU", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                )}

                {request.comments && (
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MessageSquare className="w-4 h-4" />
                      <span>Комментарий</span>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-4">
                      <p className="text-sm leading-relaxed">{request.comments}</p>
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
