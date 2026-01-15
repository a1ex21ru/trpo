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
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"

const expenseRequestSchema = z.object({
  title: z.string().min(3, "Название должно содержать минимум 3 символа"),
  category: z.string().min(1, "Выберите категорию"),
  amount: z
    .string()
    .min(1, "Укажите сумму")
    .refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
      message: "Сумма должна быть положительным числом",
    }),
  description: z.string().min(10, "Описание должно содержать минимум 10 символов"),
  vendor: z.string().min(2, "Укажите поставщика"),
})

type ExpenseRequestFormValues = z.infer<typeof expenseRequestSchema>

interface ExpenseRequestFormProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ExpenseRequestForm({ open, onOpenChange }: ExpenseRequestFormProps) {
  const form = useForm<ExpenseRequestFormValues>({
    resolver: zodResolver(expenseRequestSchema),
    defaultValues: {
      title: "",
      category: "",
      amount: "",
      description: "",
      vendor: "",
    },
  })

  function onSubmit(data: ExpenseRequestFormValues) {
    console.log("[v0] Expense request submitted:", data)
    toast.success("Заявка успешно создана", {
      description: `Заявка "${data.title}" отправлена на рассмотрение`,
    })
    form.reset()
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Новая заявка на расход</DialogTitle>
          <DialogDescription>
            Заполните форму для создания заявки на закупку. Все поля обязательны для заполнения.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Название заявки</FormLabel>
                  <FormControl>
                    <Input placeholder="Например: Закупка офисной мебели" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Категория</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите категорию" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="office-supplies">Офисные принадлежности</SelectItem>
                        <SelectItem value="equipment">Оборудование</SelectItem>
                        <SelectItem value="furniture">Мебель</SelectItem>
                        <SelectItem value="software">Программное обеспечение</SelectItem>
                        <SelectItem value="travel">Командировки</SelectItem>
                        <SelectItem value="marketing">Маркетинг</SelectItem>
                        <SelectItem value="other">Прочее</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Сумма (₽)</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="10000" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="vendor"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Поставщик</FormLabel>
                  <FormControl>
                    <Input placeholder="Название компании или магазина" {...field} />
                  </FormControl>
                  <FormDescription>Укажите, где планируется совершить покупку</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Описание</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Подробно опишите, что необходимо приобрести и для каких целей..."
                      className="min-h-32"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>Укажите обоснование необходимости покупки</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
                Отмена
              </Button>
              <Button type="submit">Создать заявку</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
