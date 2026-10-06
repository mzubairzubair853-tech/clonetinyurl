import { useState } from "react";

function FAQ() {

  const [open, setOpen] = useState(null);

  const faqs = [
    {
      q: "What is a URL shortener?",
      a: "A URL shortener converts long URLs into shorter and easier-to-share links."
    },
    {
      q: "Is QuickURL free?",
      a: "Yes. You can create basic shortened links for free."
    },
    {
      q: "Can I create a custom alias?",
      a: "Yes. You can enter your own custom alias while creating a short link."
    },
    {
      q: "Can I track clicks?",
      a: "Yes. Dashboard and analytics features can show your link performance."
    }
  ];

  return (
    <div className="faq-container">

      {faqs.map((faq, index) => (

        <div className="faq-item" key={index}>

          <button
            onClick={() =>
              setOpen(open === index ? null : index)
            }
          >
            {faq.q}
            <span>{open === index ? "−" : "+"}</span>
          </button>

          {open === index && (
            <p>{faq.a}</p>
          )}

        </div>

      ))}

    </div>
  );
}

export default FAQ;