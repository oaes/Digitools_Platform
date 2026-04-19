import React from "react";
import icon01 from "../assets/products/user.png";
import icon02 from "../assets/products/package.png";
import icon03 from "../assets/products/rocket.png";

const Maintwo = [
  {
    number: "01",
    icon: icon01,
    title: "Create Account",
    description:
      "Sign up for free in seconds. No credit card required to get started.",
  },
  {
    number: "02",
    icon: icon02,
    title: "Choose Products",
    description: "Browse our catalog and select the tools that fit your needs.",
  },
  {
    number: "03",
    icon: icon03,
    title: "Start Creating",
    description: "Download and start using your premium tools immediately.",
  },
];

const MainTwo = () => {
  return (
    <section id="testimonials" className="bg-white py-16 lg:py-20">
      <div className="w-full mx-auto px-6 lg:px-20">
        {/* Header  */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900">
            Get Started in 3 Steps
          </h2>
          <p className="text-sm lg:text-base text-gray-500 mt-3">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        {/* Process grid  */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {Maintwo?.map((pro, index) => (
            <div
              className="relative flex flex-col items-center text-center bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
              key={index}
            >
              {/* Process Number Badge  */}
              <span className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center bg-linear-to-l from-[#9514FA] to-[#4F39F6] rounded-full text-xs font-extrabold text-white">
                {pro?.number}
              </span>

              {/* Icon  */}
              <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center mb-5 mt-4">
                <img src={pro?.icon} alt="Icon Image" />
              </div>

              {/* Title  */}
              <h3 className="text-lg font-bold text-gray-900">{pro?.title}</h3>

              {/* Description  */}
              <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                {pro?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainTwo;
