import Container from "../ui/Container";
import Button from "../ui/Button";

const Hero = () => {
  return (
    <section className="relative overflow-x-clip pt-8 pb-32 md:pt-20 md:pb-48">
      <div className="absolute top-20 md:top-40 -right-5 bg-brand-blue w-[75%] md:w-[40%] h-52 md:h-87.5 rounded-l-full -z-10 translate-y-10" />

      <Container className="flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-medium text-brand-dark mb-6 leading-tight">
            A Simple Bookmark Manager
          </h1>
          <p className="text-brand-gray font-normal text-lg mb-8 max-w-lg mx-auto md:mx-0">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <Button variant="primary" className="px-4 md:px-6 shadow-md border-brand-blue hover:border-brand-blue" children="Get it on Chrome" />
           
            
            <Button 
              variant="secondary" 
              className="px-4 md:px-6 shadow-md border-2 border-transparent hover:border-brand-dark bg-white text-brand-dark" children="Get it on Firefox"
            />
              
          </div>
        </div>

        <div className="flex-1 relative">
          <img
            src="/images/illustration-hero.svg"
            alt="Bookmark Manager Illustration"
            className="w-full relative z-10"
          />
        </div>
      </Container>
    </section>
  );
};

export default Hero;