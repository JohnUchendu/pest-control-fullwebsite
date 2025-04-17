import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"; // Ensure this import path is correct

const faqs = [
  {
    question: "What types of pests do you handle?",
    answer:
      "We provide professional pest control solutions for termites, cockroaches, ants, rodents, mosquitoes, bed bugs, wasps, and more—whether at home or in your workplace.",
  },
  {
    question: "Is your pest control service safe for children and pets?",
    answer:
      "Yes! We use eco-friendly, pet-safe, and child-safe products that effectively eliminate pests without putting your family at risk.",
  },
  {
    question: "How much does pest control cost in Nigeria?",
    answer:
      "Our prices are based on the type of pest, size of the property, and level of infestation. We offer affordable and flexible packages—contact us for a free quote or inspection.",
  },
  {
    question: "Do you offer residential and commercial pest control?",
    answer:
      "Absolutely. We serve homes, offices, warehouses, restaurants, schools, and more. Whether you need a one-time treatment or ongoing protection, we've got you covered.",
  },
  {
    question: "How long does the treatment take?",
    answer:
      "Most treatments take between 30 minutes to 2 hours depending on the size of the space and type of service. We'll always explain the process before we start.",
  },
  {
    question: "Do I need to leave the house during fumigation?",
    answer:
      "In some cases, yes. For your safety, we may recommend temporarily vacating the premises. Our technicians will give you clear instructions before and after the treatment.",
  },
  {
    question: "What happens if pests return after treatment?",
    answer:
      "We stand by our work. If pests return within the guaranteed period, we’ll come back for a follow-up treatment at no extra cost.",
  },
];

export default function FAQ() {
  return (
    <section className="max-w-2xl mx-auto py-16 px-6 dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-6">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible>
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`faq-${index}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>
              <p className="text-gray-700 dark:text-gray-300">{faq.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
