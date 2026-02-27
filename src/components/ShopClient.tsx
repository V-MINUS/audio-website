'use client'

import { useState } from 'react'
import { ShoppingCart, Plus, Minus, X, ShoppingBag, Truck, Shield, RotateCcw } from 'lucide-react'
import { cn } from '@/lib/utils'

type Product = {
  id: number
  name: string
  price: number
  category: string
  description: string
  sizes?: string[]
  colors?: string[]
  badge?: string
  emoji: string
}

const products: Product[] = [
  {
    id: 1,
    name: 'Teahan Sound T-Shirt',
    price: 25,
    category: 'Clothing',
    description: 'Premium heavyweight cotton tee. Teahan Pro Audio & Lighting logo front, small logo back.',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Navy', 'White'],
    badge: 'Best Seller',
    emoji: '👕',
  },
  {
    id: 2,
    name: 'Teahan Sound Beanie Hat',
    price: 18,
    category: 'Accessories',
    description: 'Warm ribbed knit beanie. Embroidered Teahan logo. One size fits all.',
    colors: ['Black', 'Charcoal', 'Navy'],
    badge: 'New',
    emoji: '🧢',
  },
  {
    id: 3,
    name: 'Teahan Sound Hoodie',
    price: 45,
    category: 'Clothing',
    description: 'Premium pullover hoodie, heavyweight fleece. Chest logo print, subtle back text.',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Graphite'],
    emoji: '🧥',
  },
]

type CartItem = Product & { qty: number; selectedSize?: string; selectedColor?: string }

export default function ShopClient() {
  const [cart, setCart] = useState<CartItem[]>([])
  const [cartOpen, setCartOpen] = useState(false)
  const [selections, setSelections] = useState<Record<number, { size?: string; color?: string }>>({})

  const totalItems = cart.reduce((s, i) => s + i.qty, 0)
  const totalPrice = cart.reduce((s, i) => s + i.qty * i.price, 0)

  function setSelection(id: number, key: 'size' | 'color', val: string) {
    setSelections((prev) => ({ ...prev, [id]: { ...prev[id], [key]: val } }))
  }

  function addToCart(product: Product) {
    const sel = selections[product.id] || {}
    const key = `${product.id}-${sel.size || 'default'}-${sel.color || 'default'}`
    setCart((prev) => {
      const existing = prev.find((i) => `${i.id}-${i.selectedSize || 'default'}-${i.selectedColor || 'default'}` === key)
      if (existing) return prev.map((i) => (i === existing ? { ...i, qty: i.qty + 1 } : i))
      return [...prev, { ...product, qty: 1, selectedSize: sel.size, selectedColor: sel.color }]
    })
  }

  function updateQty(idx: number, delta: number) {
    setCart((prev) =>
      prev
        .map((item, i) => (i === idx ? { ...item, qty: item.qty + delta } : item))
        .filter((item) => item.qty > 0)
    )
  }

  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-20">
      {/* Cart slide-over */}
      {cartOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="flex-1 bg-black/60 backdrop-blur-sm" onClick={() => setCartOpen(false)} />
          <div className="w-full max-w-sm bg-slate-900 border-l border-slate-800 flex flex-col">
            <div className="flex items-center justify-between p-6 border-b border-slate-800">
              <h2 className="text-white font-bold text-lg flex items-center gap-2">
                <ShoppingCart className="w-5 h-5" /> Your Basket ({totalItems})
              </h2>
              <button onClick={() => setCartOpen(false)} className="text-slate-400 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-6">
              {cart.length === 0 ? (
                <div className="text-center py-16 text-slate-500">
                  <ShoppingBag className="w-12 h-12 mx-auto mb-3 opacity-40" />
                  <p>Your basket is empty</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 card-glass p-3 rounded-xl">
                      <div className="text-3xl w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center flex-shrink-0">
                        {item.emoji}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white text-sm font-semibold truncate">{item.name}</p>
                        {(item.selectedSize || item.selectedColor) && (
                          <p className="text-slate-500 text-xs">
                            {[item.selectedSize, item.selectedColor].filter(Boolean).join(' / ')}
                          </p>
                        )}
                        <p className="text-blue-400 text-sm font-bold mt-0.5">€{item.price}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <button onClick={() => updateQty(idx, -1)} className="w-7 h-7 bg-slate-800 hover:bg-slate-700 rounded-md flex items-center justify-center text-slate-400 hover:text-white transition-colors">
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-6 text-center text-white text-sm">{item.qty}</span>
                        <button onClick={() => updateQty(idx, 1)} className="w-7 h-7 bg-slate-800 hover:bg-slate-700 rounded-md flex items-center justify-center text-slate-400 hover:text-white transition-colors">
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            {cart.length > 0 && (
              <div className="p-6 border-t border-slate-800 space-y-3">
                <div className="flex justify-between text-white font-bold text-lg">
                  <span>Total</span>
                  <span>€{totalPrice}</span>
                </div>
                <button className="btn-primary w-full justify-center py-3.5 text-base">
                  Proceed to Checkout
                </button>
                <p className="text-slate-500 text-xs text-center">Secure checkout powered by Stripe</p>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-12">
          <div>
            <h1 className="section-heading">Official Merchandise</h1>
            <p className="section-subheading">Show your support with Teahan Pro Audio & Lighting gear.</p>
          </div>
          <button
            onClick={() => setCartOpen(true)}
            className="relative p-3 bg-slate-800 hover:bg-slate-700 rounded-xl text-slate-400 hover:text-white transition-colors mt-2"
          >
            <ShoppingCart className="w-6 h-6" />
            {totalItems > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-blue-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>

        {/* Trust badges */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          {[
            { icon: Truck, label: 'Free shipping over €50' },
            { icon: Shield, label: 'Secure Stripe checkout' },
            { icon: RotateCcw, label: '30-day returns' },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="card-glass p-4 flex items-center gap-3 rounded-xl">
              <Icon className="w-5 h-5 text-blue-400 flex-shrink-0" />
              <span className="text-slate-300 text-sm">{label}</span>
            </div>
          ))}
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => {
            const sel = selections[product.id] || {}
            return (
              <div key={product.id} className="card-glass rounded-2xl overflow-hidden flex flex-col">
                {/* Image placeholder */}
                <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 h-64 flex items-center justify-center">
                  <span className="text-8xl">{product.emoji}</span>
                  {product.badge && (
                    <span className={cn(
                      'absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full',
                      product.badge === 'Best Seller' ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                    )}>
                      {product.badge}
                    </span>
                  )}
                  <div className="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur text-xs text-slate-400 px-2 py-1 rounded-md border border-slate-700">
                    Coming Soon
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-white font-bold text-lg leading-tight">{product.name}</h3>
                    <span className="text-blue-400 font-bold text-xl flex-shrink-0">€{product.price}</span>
                  </div>
                  <span className="text-xs text-slate-500 uppercase tracking-widest mb-3">{product.category}</span>
                  <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">{product.description}</p>

                  {/* Size selector */}
                  {product.sizes && (
                    <div className="mb-4">
                      <p className="text-slate-400 text-xs mb-2 font-medium uppercase tracking-widest">Size</p>
                      <div className="flex flex-wrap gap-2">
                        {product.sizes.map((size) => (
                          <button
                            key={size}
                            onClick={() => setSelection(product.id, 'size', size)}
                            className={cn(
                              'px-2.5 py-1 text-xs font-medium rounded-md border transition-all',
                              sel.size === size
                                ? 'border-blue-500 bg-blue-500/20 text-blue-300'
                                : 'border-slate-700 text-slate-400 hover:border-slate-500 hover:text-white'
                            )}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Color selector */}
                  {product.colors && (
                    <div className="mb-5">
                      <p className="text-slate-400 text-xs mb-2 font-medium uppercase tracking-widest">Colour</p>
                      <div className="flex flex-wrap gap-2">
                        {product.colors.map((color) => (
                          <button
                            key={color}
                            onClick={() => setSelection(product.id, 'color', color)}
                            className={cn(
                              'px-2.5 py-1 text-xs font-medium rounded-md border transition-all',
                              sel.color === color
                                ? 'border-blue-500 bg-blue-500/20 text-blue-300'
                                : 'border-slate-700 text-slate-400 hover:border-slate-500 hover:text-white'
                            )}
                          >
                            {color}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  <button
                    onClick={() => addToCart(product)}
                    className="btn-primary w-full justify-center py-3"
                  >
                    <ShoppingCart className="w-4 h-4" /> Add to Basket
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Wholesale / bulk note */}
        <div className="mt-16 card-glass p-6 lg:p-8 rounded-2xl text-center">
          <h3 className="text-white font-bold text-xl mb-2">Crew Orders & Bulk Pricing</h3>
          <p className="text-slate-400 mb-5">
            Ordering for a crew, team or event? Contact us for custom print runs and bulk discounts.
          </p>
          <a href="/contact" className="btn-outline">Get in Touch</a>
        </div>
      </div>
    </div>
  )
}
