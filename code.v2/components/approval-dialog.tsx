"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { CheckCircle2, XCircle } from "lucide-react"

const approvalSchema = z.object({
  comments: z.string().min(10, "Комментарий должен содержать минимум 10 символов"),
})

type ApprovalFormValues = z.infer<typeof approvalSchema>

interface ExpenseRequest {
  id: string
  title: string
  amount: number
}

interface ApprovalDialogProps {
  request: ExpenseRequest | null
  action: "approve" | "reject" | null
  open: boolean
  onOpenChange: (open: boolean) => void
  onComplete: () => void
}

export function ApprovalDialog({ request, action, open, onOpenChange, onComplete }: ApprovalDialogProps) {
  const form = useForm<ApprovalFormValues>({
    resolver: zodResolver(approvalSchema),
    defaultValues: {
      comments: "",
    },
  })

  function onSubmit(data: ApprovalFormValues) {
    console.log("[v0] Approval decision:", { request, action, comments: data.comments })

    if (action === "approve") {
      toast.success("Заявка одобрена", {
        description: `Заявка "${request?.title}" успешно одобрена`,
      })
    } else {
      toast.error("Заявка отклонена", {
        description: `Заявка "${request?.title}" отклонена`,
      })
    }

    form.reset()
    onComplete()
  }

  if (!request || !action) return null

  const isApproval = action === "approve"

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            {isApproval ? (
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-primary" />
              </div>
            ) : (
              <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
                <XCircle className="w-5 h-5 text-destructive" />
              </div>
            )}
            <div className="flex-1">
              <DialogTitle>{isApproval ? "Одобрить заявку" : "Отклонить заявку"}</DialogTitle>
              <DialogDescription className="mt-1">
                {request.title} • {request.amount.toLocaleString("ru-RU")} ₽
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="comments"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{isApproval ? "Комментарий (необязательно)" : "Причина отклонения"}</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder={
                        isApproval ? "Добавьте комментарий к одобрению..." : "Укажите причину отклонения заявки..."
                      }
                      className="min-h-24"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
                Отмена
              </Button>
              <Button type="submit" variant={isApproval ? "default" : "destructive"}>
                {isApproval ? "Одобрить" : "Отклонить"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
