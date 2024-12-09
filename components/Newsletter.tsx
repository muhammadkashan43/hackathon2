'use client'

import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const instagramImages = [
  {
    src: "/Image.png",
    alt: "Wooden bar stools with metal legs"
  },
  {
    src: "/Image(3).png",
    alt: "Modern gray swivel chair"
  },
  {
    src: "/Image(7).png",
    alt: "Pink accent chair"
  },
  {
    src: "/Image(5).png",
    alt: "Classic white wooden chair"
  },
  {
    src: "/Image(2).png",
    alt: "Modern orange chair"
  },
  {
    src: "/Image(8).png",
    alt: "Green ergonomic office chair"
  }
]

export default function Newsletter() {


  return (
    <section className="max-w-[1341px] m-auto container mx-auto px-4 py-20   space-y-16">
      {/* Newsletter Section */}
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <h2 className="text-4xl font-extrabold">
          Or Subscribe To The Newsletter
        </h2>
        <form className="flex gap-4 max-w-xl mx-auto">
          <Input
            type="email"
            placeholder="Email Address..."
            required
            className="flex-1 border-t-0 border-x-0 shadow-none border-black border-b-4"
          />
          <Button type="submit" className="shadow-none rounded-[4px] border-black border-b-4">
            SUBMIT
          </Button>
        </form>
      </div>

      {/* Instagram Section */}
      <div className="space-y-8">
        <h2 className="text-3xl font-extrabold mb-4 text-center">
          Follow Products And Discounts On Instagram
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {instagramImages.map((image, index) => (
            <div key={index} className="relative aspect-square group overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 16vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
