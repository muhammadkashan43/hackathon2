"use client"

import Image from "next/image"
import { Heart, Trash2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function ShoppingCart() {
  return (
    <div className="max-w-[1341px] m-auto  mx-auto container px-4 py-8">
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-bold mb-4">Bag</h2>
          
          {/* First Item */}
          <div className="flex gap-4 py-4">
            <div className="relative w-24 h-24 bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src="/Image.png"
                alt="Library Stool Chair"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">Library Stool Chair</h3>
                  <p className="text-sm text-muted-foreground">Ashen Slate/Cobalt Bliss</p>
                </div>
                <p className="text-sm">MRP: $99</p>
              </div>
              <div className="mt-2 flex items-center gap-4">
                <div className="text-sm">
                  <span className="text-muted-foreground">Size</span> L
                </div>
                <div className="text-sm">
                  <span className="text-muted-foreground">Quantity</span> 1
                </div>
              </div>
              <div className="mt-4 flex gap-4">
                <button className="text-muted-foreground hover:text-primary">
                  <Heart className="w-5 h-5" />
                </button>
                <button className="text-muted-foreground hover:text-destructive">
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <Separator />

          {/* Second Item */}
          <div className="flex gap-4 py-4">
            <div className="relative w-24 h-24 bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src="/Image(2).png"
                alt="Library Stool Chair"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">Library Stool Chair</h3>
                  <p className="text-sm text-muted-foreground">Ashen Slate/Cobalt Bliss</p>
                </div>
                <p className="text-sm">MRP: $99</p>
              </div>
              <div className="mt-2 flex items-center gap-4">
                <div className="text-sm">
                  <span className="text-muted-foreground">Size</span> L
                </div>
                <div className="text-sm">
                  <span className="text-muted-foreground">Quantity</span> 1
                </div>
              </div>
              <div className="mt-4 flex gap-4">
                <button className="text-muted-foreground hover:text-primary">
                  <Heart className="w-5 h-5" />
                </button>
                <button className="text-muted-foreground hover:text-destructive">
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="lg:col-span-1">
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Summary</h2>
            
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>$198.00</span>
              </div>
              
              <div className="flex justify-between text-sm">
                <span>Estimated Delivery & Handling</span>
                <span className="text-green-600">Free</span>
              </div>
              
              <Separator />
              
              <div className="flex justify-between font-medium">
                <span>Total</span>
                <span>$198.00</span>
              </div>
              
              <Button className="w-full h-16  bg-teal-500 hover:bg-teal-600 rounded-full">
                Member Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

