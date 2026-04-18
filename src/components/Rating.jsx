import React from "react";

const Rating = () => {
  return (
    <section
      id="features"
      className="py-16 px-6 lg:px-52 bg-linear-to-l from-[#9514FA] to-[#4F39F6]"
    >
      <div className="flex flex-col md:flex-row justify-center divide-y md:divide-y-0 md:divide-x divide-gray-400 items-center gap-6">
        <div className="text-center text-white space-y-3 py-10 md:py-0 md:px-20">
          <h1 className="text-6xl font-bold">80K+</h1>
          <p className="text-xl font-medium">Active Users</p>
        </div>

        <div className="text-center text-white space-y-3 py-10 md:py-0 md:px-20">
          <h1 className="text-6xl font-bold">200+</h1>
          <p className="text-xl font-medium">Premium Tools</p>
        </div>

        <div className="text-center text-white space-y-3 py-10 md:py-0 md:px-20">
          <h1 className="text-6xl font-bold">4.9+</h1>
          <p className="text-xl font-medium">Ratings</p>
        </div>
      </div>
    </section>
  );
};

export default Rating;
