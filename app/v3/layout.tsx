// V3 layout — scopes DM Sans font to the /v3 route without affecting V1 or V2.
// Lora (serif) is inherited from the root layout via --font-lora CSS variable.

import { DM_Sans } from 'next/font/google'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export default function V3Layout({ children }: { children: React.ReactNode }) {
  return (
    // Apply DM Sans variable here so font-dm-sans Tailwind class works inside /v3
    <div className={dmSans.variable}>
      {children}
    </div>
  )
}
