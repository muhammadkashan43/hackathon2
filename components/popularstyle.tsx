import Image from "next/image"

export default function PopularStyle() {
  return (
    <div className="container max-w-[1341px] m-auto mx-auto px-4 py-12">
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Vertical Text */}


        {/* Hero Image */}
        <div className="md:col-span-2 relative aspect-[5/4]">
          <Image
            src="/Image(2).png"
            alt="Modern Orange Chair"
            className="object-cover rounded-lg"
            priority
            fill
          />
        </div>

        {/* Grid Images */}
        <div className="grid grid-cols-2 gap-4">
          <div className="relative aspect-square">
            <Image
              src="/Image(3).png"
              alt="White Tufted Chair"
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </div>
          <div className="relative aspect-square">
            <Image
              src="/Image.png"
              alt="White Wooden Chair"
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </div>
          <div className="relative aspect-square">
            <Image
              src="/Image(9).png"
              alt="Gray Upholstered Chair"
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </div>
          <div className="relative aspect-square">
            <Image
              src="/Image.png"
              alt="White Wooden Chair"
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

