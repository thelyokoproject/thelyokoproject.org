"use client"

import { motion } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"
import { Quote } from "lucide-react"

export function TestimonialSection() {
  return (
    <section className="py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Trusted by Industry Leaders</h2>
          <p className="mt-4 text-muted-foreground">See what our customers have to say about their experience</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="p-6 h-full flex flex-col">
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-primary/40" />
                </div>
                <p className="text-lg mb-4 flex-1">{testimonial.quote}</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} />
                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.title}</div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const testimonials = [
  {
    quote:
      "This platform has transformed how we develop and deploy AI models. The interface is intuitive and the features are powerful.",
    name: "Sarah Chen",
    title: "AI Research Lead",
    avatar: "/placeholder.svg",
  },
  {
    quote:
      "The collaboration features and version control have made our team significantly more productive. Highly recommended!",
    name: "Michael Rodriguez",
    title: "CTO, TechCorp",
    avatar: "/placeholder.svg",
  },
  {
    quote:
      "We've cut our model development time in half. The real-time processing and global distribution are game-changers.",
    name: "Emily Watson",
    title: "ML Engineer",
    avatar: "/placeholder.svg",
  },
]

