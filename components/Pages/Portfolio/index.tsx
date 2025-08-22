import LazyLoad from "@/components/LazyLoad";
import Contact from "./Contact";
import Information from "./Information";
import Navbar from "./Navbar";
import Technical from "./Technical";

export default function ComponentsPortfolio() {
  return (
    <>
      <Navbar />

      <LazyLoad>
        <header
          id="information"
          className="min-h-screen flex items-center justify-center overflow-hidden grid-dark-background"
        >
          <Information />
        </header>
      </LazyLoad>

      <LazyLoad delay={0.3}>
        <section
          id="technical"
          className="min-h-screen relative md:py-20 py-10 mx-auto md:px-32 px-5 sm:px-10 flex items-center"
        >
          <Technical />
        </section>
      </LazyLoad>

      <LazyLoad delay={0.5}>
        <section
          id="contact"
          className="min-h-screen relative md:py-20 py-10 mx-auto md:px-32 px-5 sm:px-10 flex items-center bg-[radial-gradient(circle_at_20%_30%,rgba(29,78,216,0.1),transparent_20%),radial-gradient(circle_at_20%_10%,rgba(139,92,246,0.1),transparent_20%),radial-gradient(circle_at_80%_90%,rgba(34,197,94,0.1),transparent_50%)]"
        >
          <Contact />
        </section>
      </LazyLoad>
    </>
  );
}
