import { Badge } from '@/components/ui/badge'

const trustItems = [
  { label: 'Documentation Workflow Support', icon: '📋', color: 'teal' as const },
  { label: 'Compliance Reporting', icon: '✅', color: 'teal' as const },
  { label: 'Employer Liaison', icon: '🤝', color: 'teal' as const },
  { label: 'Welfare-Data Reporting', icon: '📊', color: 'teal' as const },
  { label: 'Not a Recruitment Agency', icon: '🚫', color: 'red' as const },
  { label: 'No Worker Fees Collected', icon: '🚫', color: 'red' as const },
  { label: 'No Passport Handling', icon: '🚫', color: 'red' as const },
]

export function TrustBar() {
  return (
    <section className="bg-slate-50 border-y border-slate-200 py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap gap-3 justify-center">
          {trustItems.map(item => (
            <Badge key={item.label} variant={item.color} className="text-xs py-1.5 px-3">
              <span className="mr-1">{item.icon}</span>
              {item.label}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  )
}
