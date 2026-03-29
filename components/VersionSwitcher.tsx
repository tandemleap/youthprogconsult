// Version switcher badge — shown on V1, V2, and V3 for side-by-side comparison during review.
// Fixed to the bottom-right corner so it doesn't interfere with page content or nav.
// Remove this component before going live with a final version.

interface Props {
  current: 'v1' | 'v2' | 'v3'
}

const versions = [
  { id: 'v1' as const, label: 'V1', href: '/' },
  { id: 'v2' as const, label: 'V2', href: '/v2' },
  { id: 'v3' as const, label: 'V3', href: '/v3' },
]

export default function VersionSwitcher({ current }: Props) {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-1 bg-navy-dark/90 backdrop-blur-sm border border-warm/15 rounded-2xl px-3 py-2.5 shadow-xl">
      <span className="text-warm/35 text-xs font-medium mr-2">Viewing</span>
      {versions.map((v, i) => (
        <span key={v.id} className="flex items-center gap-1">
          {i > 0 && <span className="text-warm/20 text-xs">·</span>}
          {v.id === current ? (
            <span className="text-warm text-sm font-semibold px-1">{v.label}</span>
          ) : (
            <a
              href={v.href}
              className="text-sky-light hover:text-warm text-sm font-medium px-1 transition-colors"
            >
              {v.label}
            </a>
          )}
        </span>
      ))}
    </div>
  )
}
