"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What types of chairs do you offer?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quis modi ullam animi labore veniam sunt nequam quis ullam cum distinctio deserunt, quis expedita non inventore quis totam quident."
  },
  {
    question: "How can we get in touch with you?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quis modi ullam animi labore veniam sunt nequam quis ullam cum distinctio deserunt, quis expedita non inventore quis totam quident."
  },
  {
    question: "Do your chairs come with a warranty?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quis modi ullam animi labore veniam sunt nequam quis ullam cum distinctio deserunt, quis expedita non inventore quis totam quident."
  },
  {
    question: "What will be delivered? And When?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quis modi ullam animi labore veniam sunt nequam quis ullam cum distinctio deserunt, quis expedita non inventore quis totam quident."
  },
  {
    question: "Can I try a chair before purchasing?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quis modi ullam animi labore veniam sunt nequam quis ullam cum distinctio deserunt, quis expedita non inventore quis totam quident."
  },
  {
    question: "How do I clean and maintain my Comforty chair?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quis modi ullam animi labore veniam sunt nequam quis ullam cum distinctio deserunt, quis expedita non inventore quis totam quident."
  }
]

export default function FAQSection() {
  return (
    <section className="containero px-4  mx-aut py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl mb-4 font-extrabold">Questions Looks Here</h2>
          <p className="text-muted-foreground">
            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <Accordion key={index} type="single" collapsible>
              <AccordionItem value={`item-${index}`} className="border px-6 rounded-lg">
                <AccordionTrigger className="hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  )
}

