import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { getWhatsAppLink } from '@/lib/utils'

const waPath = 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z'

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white overflow-hidden">
      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Ambient glow blobs */}
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-teal-600/15 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-600/15 rounded-full blur-3xl translate-y-1/3" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-24 md:py-32">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">

          {/* Left: Text content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Status pill */}
            <div className="inline-flex items-center gap-2 bg-teal-500/15 border border-teal-400/30 text-teal-300 text-xs font-semibold px-4 py-2 rounded-full mb-8">
              <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
              Bangladesh–Malaysia Labour Corridor · B2B Only
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] mb-6 tracking-tight">
              Workforce{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-300">
                Documentation
              </span>
              {' '}&amp;{' '}
              <br />
              Compliance Support
            </h1>

            <p className="text-lg text-slate-300/90 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              B2B documentation, compliance reporting, employer liaison, and post-arrival welfare-data support for licensed agencies, Malaysian employers, HRO partners, and ESG teams.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={getWhatsAppLink('Hello, I would like to book a 15-minute compliance call with Keystone Workforce Bridge.')}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="whatsapp" size="lg" className="w-full sm:w-auto shadow-lg shadow-green-900/30">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={waPath} />
                  </svg>
                  Book a Compliance Call
                </Button>
              </a>
              <a href="#wro-check">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40 backdrop-blur-sm"
                >
                  Run Free WRO Check
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Button>
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 pt-10 border-t border-white/10 flex flex-wrap gap-8 justify-center lg:justify-start">
              {[
                { num: '5', label: 'B2B Services' },
                { num: 'BD–MY', label: 'Corridor Specialist' },
                { num: '0', label: 'Worker Fees Charged' },
              ].map(s => (
                <div key={s.label} className="text-center lg:text-left">
                  <p className="text-2xl font-extrabold text-white mb-0.5">{s.num}</p>
                  <p className="text-xs text-slate-400 font-medium">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Logo card */}
          <div className="flex-shrink-0">
            <div className="relative">
              {/* Outer glow */}
              <div className="absolute -inset-8 rounded-3xl bg-teal-500/10 blur-2xl" />
              {/* Card */}
              <div className="relative bg-white rounded-2xl shadow-2xl p-8 flex flex-col items-center justify-center gap-4" style={{ width: 280, minHeight: 280 }}>
                <Image
                  src="/images/logo-white.png"
                  alt="Keystone Workforce Bridge"
                  width={220}
                  height={110}
                  className="w-full h-auto object-contain"
                  priority
                />
                <div className="w-full border-t border-slate-100 pt-4 text-center space-y-1">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Dhaka, Bangladesh</p>
                  <p className="text-xs text-teal-600 font-medium">B2B Documentation &amp; Compliance</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-50 to-transparent opacity-5" />
    </section>
  )
}
