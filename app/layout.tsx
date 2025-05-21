import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chuck Data - Agentic Data Engineering for Databricks',
  description: 'Chuck Data is an agentic data engineering tool built for Databricks that helps you build amazing customer-centric data models and workflows.',
  keywords: 'Chuck Data, Databricks, data engineering, AI, agent, data models, workflows, PII detection, customer data',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-off-black`}>{children}</body>
    </html>
  )
}