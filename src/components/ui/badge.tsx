import * as React from 'react'
import { cn } from '@/lib/utils'

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'teal' | 'navy' | 'green' | 'amber' | 'red' | 'slate'
}

export function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  const variants = {
    default: 'bg-slate-100 text-slate-700',
    teal: 'bg-teal-100 text-teal-800',
    navy: 'bg-blue-900 text-blue-100',
    green: 'bg-green-100 text-green-800',
    amber: 'bg-amber-100 text-amber-800',
    red: 'bg-red-100 text-red-800',
    slate: 'bg-slate-200 text-slate-700',
  }
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide',
        variants[variant],
        className
      )}
      {...props}
    />
  )
}
