// Version switcher banner — shown on both V1 and V2 for easy comparison during review.
// Fixed to the bottom-right corner so it doesn't interfere with page content or nav.
// Remove this component before going live.

interface Props {
  current: 'v1' | 'v2'
}

export default function VersionSwitcher({ current }: Props) {
  const isV1 = current === 'v1'
  const href = isV1 ? '/v2' : '/'
  const label = isV1 ? 'See V2 →' : '← See V1'
  const tag = isV1 ? 'Viewing V1' : 'Viewing V2'

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-navy-dark/90 backdrop-blur-sm border border-warm/15 rounded-2xl px-4 py-3 shadow-xl">
      <span className="text-warm/40 text-xs font-medium">{tag}</span>
      <span className="w-px h-4 bg-warm/15" />
      <a
        href={href}
        className="text-sky-light text-sm font-medium hover:text-warm transition-colors"
      >
        {label}
      </a>
    </div>
  )
}
