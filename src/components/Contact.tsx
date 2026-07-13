import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section
      id="contact"
      className="px-6 pt-16 pb-28 md:pt-20 md:pb-36 bg-white border-t border-black/10"
    >
      <div className="container mx-auto">
        <div className="flex items-baseline gap-3 mb-16 justify-center md:justify-start max-w-xl mx-auto">
          <h2 className="font-heading text-2xl font-bold text-[#16161d] tracking-tight">
            Contact
          </h2>
        </div>

        <div className="max-w-xl mx-auto">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
