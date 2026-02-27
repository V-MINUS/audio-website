import type { Metadata } from 'next'
import ShopClient from '@/components/ShopClient'

export const metadata: Metadata = {
  title: 'Shop',
  description: 'Official Teahan Pro Audio & Lighting merchandise — T-shirts, hoodies, beanies and more.',
}

export default function ShopPage() {
  return <ShopClient />
}
