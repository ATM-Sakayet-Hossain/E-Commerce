import React from "react";

const Partner = () => {
  return (
    <section className="px-4">
      <div className="container">
        <div className="lg:flex lg:gap-10 lg:items-center lg:px-40 lg:py-10">
          <div className="lg:w-400">
            <img src="/about-5.png" alt="about-5.png" className="w-full" />
          </div>
          <div>
            <h4 className="text-gray-400 text-2xl font-bold py-5">
              Our performance
            </h4>
            <h2 className=" text-5xl font-bold">
              Your Partner for e-commerce grocery solution
            </h2>
            <p className="text-base font-normal py-5 md:py-10 lg:text-justify">
              Ed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto
            </p>
            <p className="text-base font-normal pb-5 lg:text-justify">
              Pitatis et quasi architecto beatae vitae dicta sunt explicabo.
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partner;
