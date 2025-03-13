import React from "react";

function About() {
  return (
    <div className="flex flex-col items-start md:pt-10">
      <main className="mx-auto max-w-[800px] flex-1 p-6 md:p-12">
        <h1 className="mt-6 mb-6 text-left text-2xl leading-tight font-semibold md:mt-12 md:text-center md:text-5xl">
          Who We Are
        </h1>
        <p className="mt-6 max-w-prose text-sm leading-relaxed text-gray-700 md:text-xl">
          At Briz Doors, we believe that simplicity is strength. A door is not
          just an entry—it’s a statement of precision, balance, and purpose.
          <br />
          Our approach is simple: we create doors that are functional,
          efficient, and designed to fit seamlessly into any space.
          <br />
          We understand the importance of ease, which is why we’ve built a
          system that makes selecting and ordering your doors straightforward
          and efficient. Whether for commercial spaces or specialized
          environments, our streamlined process ensures you get exactly what you
          need, when you need it.
          <br />
          Our focus is on what matters most: quality, precision, and simplicity.
          Every detail is crafted with intention, ensuring your space is
          enhanced without excess.
          <br />
          <br />
          <span className="font-semibold">
            Briz Doors: Doors made simple, designed to last.
          </span>
        </p>
      </main>
    </div>
  );
}

export default About;
