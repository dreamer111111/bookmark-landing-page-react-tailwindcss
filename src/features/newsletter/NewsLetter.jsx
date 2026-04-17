import { useState } from "react";
import Container from "../../components/ui/Container";
import Button from "../../components/ui/Button";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !emailRegex.test(email)) {
      setError(true);
    } else {
      setError(false);
      console.log("Joined with:", email);
      setEmail(""); 
    }
  };

  return (
    <section className="bg-brand-blue py-16 text-white">
      <Container className="max-w-md md:max-w-xl">
        <div className="text-center">
          <h2 className="uppercase tracking-[0.3em] text-sm mb-8">
            35,000+ already joined
          </h2>
          <h3 className="text-2xl md:text-3xl font-medium mb-8 leading-tight max-w-md mx-auto">
            Stay up-to-date with what we’re doing
          </h3>
          
          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row gap-4 md:gap-2 items-start justify-center"
            noValidate
          >
            <div className="relative w-full md:flex-1">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError(false);
                }}

                className={`w-full px-5 h-12 bg-white rounded-md text-brand-dark focus:outline-none border-2 transition-all ${
                  error ? "border-brand-red" : "border-transparent"
                }`}
              />

              {error && (
                <img
                  src="/images/icon-error.svg"
                  alt="Error"
                  className="absolute right-4 top-1/2 -translate-y-1/2"
                />
              )}

              {error && (
                <div className="bg-brand-red text-white text-[10px] italic font-medium text-left px-3 py-1 rounded-b-md absolute w-full z-10">
                  Whoops, make sure it's an email
                </div>
              )}
            </div>

            <Button
              type="submit"
              variant="danger"
              className="w-full md:w-auto h-12 px-6 rounded-md border-2 border-brand-red hover:bg-white hover:text-brand-red flex items-center justify-center shadow-none"
              children="Contact Us"
            />
          </form>
        </div>
      </Container>
    </section>
  );
};

export default NewsLetter;