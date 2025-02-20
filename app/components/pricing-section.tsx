"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"

export function PricingSection() {
  return (
    <section className="py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Simple, Transparent Pricing</h2>
          <p className="mt-4 text-muted-foreground">Choose the plan that's right for you</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="relative p-6 h-full flex flex-col">
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-sm rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold">{plan.name}</h3>
                  <div className="mt-2">
                    <span className="text-3xl font-bold">${plan.price}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                  <p className="mt-2 text-muted-foreground">{plan.description}</p>
                </div>
                <div className="space-y-3 flex-1">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className="mt-6" variant={plan.popular ? "default" : "outline"}>
                  Get Started
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const plans = [
  {
    name: "Starter",
    price: 0,
    description: "Perfect for trying out our platform",
    features: ["1 AI model", "1,000 API calls/month", "Community support", "Basic analytics"],
    popular: false,
  },
  {
    name: "Pro",
    price: 49,
    description: "For professional developers and small teams",
    features: [
      "10 AI models",
      "100,000 API calls/month",
      "Priority support",
      "Advanced analytics",
      "Team collaboration",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: 199,
    description: "For large organizations with custom needs",
    features: [
      "Unlimited AI models",
      "1M+ API calls/month",
      "24/7 dedicated support",
      "Custom analytics",
      "Advanced security",
      "SLA guarantee",
    ],
    popular: false,
  },
]

