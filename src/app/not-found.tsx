import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-7xl font-extrabold text-slate-200 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-slate-900 mb-3">Page Not Found</h2>
        <p className="text-slate-600 mb-8 max-w-md">
          The page you&apos;re looking for doesn&apos;t exist. It may have been moved or removed.
        </p>
        <Link href="/">
          <Button variant="primary" size="md">Return to Home</Button>
        </Link>
      </div>
    </div>
  )
}
