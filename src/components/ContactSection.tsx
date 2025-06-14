import { useEffect, useState, useRef } from 'react';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-24 bg-brand-primary/10 relative" ref={sectionRef}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 sm:h-32 bg-gradient-to-b from-brand-secondary/20 to-transparent"></div>
      <div className="absolute -top-10 right-10 w-24 h-24 sm:w-40 sm:h-40 bg-brand-highlight/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-20 w-20 h-20 sm:w-32 sm:h-32 bg-brand-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10 px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <span className={`inline-block text-brand-primary uppercase text-xs sm:text-sm font-medium tracking-wider transition-all duration-700 ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-4'}`}>Envianos tu consulta</span>
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-semibold text-brand-primary mt-2 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-4'}`}>Contactate con nuestros profesionales</h2>
        </div>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 gap-4 sm:gap-6 md:gap-8">
          <div className="max-w-xl mx-auto bg-white p-6 sm:p-8 rounded-lg shadow-lg flex flex-col items-center text-center transition-all duration-700 transform hover:-translate-y-2 hover:shadow-xl" style={{ transitionDelay: '300ms' }}>
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-brand-accent mb-5 transition-transform duration-300 hover:scale-110 group">
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp Logo" className="w-10 h-10" />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-brand-primary">WhatsApp</h3>
            <p className="text-2xl font-bold text-brand-highlight">+54 9 11 5884-6134</p>
            <a 
              href="https://wa.me/5491158846134" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mt-5 bg-brand-accent text-brand-dark font-medium py-3 px-6 rounded-full shadow-md transition-all duration-300 hover:shadow-lg hover:brightness-105 focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 focus:outline-none relative overflow-hidden group text-lg"
            >
              <span className="absolute inset-0 w-0 bg-gradient-to-r from-brand-accent to-brand-background rounded-full transition-all duration-500 ease-out group-hover:w-full"></span>
              <span className="relative z-10">Enviar mensaje</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;