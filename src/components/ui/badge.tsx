
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { CheckCircle, CircleDot, LoaderCircle, XCircle } from "lucide-react"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground",
        outline: "text-foreground",
        inProgress: "border-amber-200 bg-[#FDF6EC] text-amber-700 dark:border-amber-800 dark:bg-amber-950 dark:text-amber-400",
        live: "border-green-200 bg-green-50 text-green-700 dark:border-green-800 dark:bg-green-950 dark:text-green-400",
        completed: "border-green-200 bg-green-50 text-green-700 dark:border-green-800 dark:bg-green-950 dark:text-green-400",
        cancelled: "border-red-200 bg-red-50 text-red-700 dark:border-red-800 dark:bg-red-950 dark:text-red-400"
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  const icon = React.useMemo(() => {
    switch(variant) {
      case "inProgress":
        return <LoaderCircle className="h-3 w-3" />;
      case "live":
        return <CircleDot className="h-3 w-3" />;
      case "completed":
        return <CheckCircle className="h-3 w-3" />;
      case "cancelled":
        return <XCircle className="h-3 w-3" />;
      default:
        return null;
    }
  }, [variant]);

  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props}>
      {icon}
      {props.children}
    </div>
  )
}

export { Badge, badgeVariants }
