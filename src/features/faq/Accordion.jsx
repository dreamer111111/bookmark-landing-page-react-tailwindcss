import React, { useState } from "react";
import AccordionItem from "./AccordionItem";
import Container from "../../components/ui/Container";
import Button from "../../components/ui/Button";
import { FAQ_DATA } from "../../data/siteData";
export const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <section className="py-20" id="faq">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-medium text-brand-dark mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-brand-gray max-w-lg mx-auto">
            Here are some of our FAQs. If you have any other questions you’d
            like answered please feel free to email us.
          </p>
        </div>
        <div className="flex flex-col items-center mb-12 border-t border-gray-200 max-w-2xl mx-auto">
          {FAQ_DATA.map((item, index) => (
            <AccordionItem
              key={index}
              question={item.question}
              answer={item.answer}
              isActive={activeIndex === index}
              onClick={() => handleToggleAccordion(index)}
            />
          ))}
        </div>
        <div className="flex justify-center">
          <a href="#">
            <Button variant="primary" className="px-8 shadow-md">
              More Info
            </Button>
          </a>
        </div>
      </Container>
    </section>
  );
};
export default Accordion;
