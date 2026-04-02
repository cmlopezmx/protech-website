import { Phone } from "lucide-react"
import { cn } from "@/lib/utils"

interface PhoneButtonProps {
  className?: string
}

export function PhoneButton({ className }: PhoneButtonProps) {
  return (
    <a
      href="tel:+17133779200"
      className={cn(
        "inline-flex items-center gap-2 rounded-lg bg-amber px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber/50 whitespace-nowrap",
        className
      )}
    >
      <Phone className="size-4 shrink-0" />
      (713) 377-9200
    </a>
  )
}
