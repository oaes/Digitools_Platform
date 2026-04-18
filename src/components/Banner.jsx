import React from "react";
import bannerImg from "../assets/products/banner.png";
// import circleIcon from "../assets/products/";
import playBtnImg from "../assets/products/Play.png";

const Banner = () => {
  return (
    <section className="flex gap-20 flex-col-reverse md:flex-row md:justify-center items-center py-6 px-6 lg:px-20">
      {/* banner content  */}
      <div className="space-y-6 text-center md:text-start md:basis-1/2">
        <div className="py-2 px-4 bg-[#E1E7FF] rounded-full flex items-center gap-2.5 w-fit mx-auto md:mx-0">
          <div>{/* <img src={circleIcon} alt="Circle Icon" /> */}</div>
          <p className="text-base font-medium bg-linear-to-l from-[#9514FA] to-[#4F39F6] bg-clip-text text-transparent">
            🧿New: AI-Powered Tools Available
          </p>
        </div>

        <div className="space-y-6">
          <h1 className="text-5xl lg:text-6xl font-bold lg:font-extrabold text-[#101727] leading-snug">
            Supercharge Your <br />{" "}
            <span className="bg-linear-to-l from-[#9514FA] to-[#4F39F6] bg-clip-text text-transparent">
              Digital Workflow
            </span>
          </h1>
          <p className="text-lg text-[#627382] w-9/12 mx-auto md:mx-0">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today. Explore
            Products
          </p>
        </div>

        <div className="flex items-center gap-6 justify-center md:justify-start">
          <button className="text-sm font-semibold text-white px-5 py-2 rounded-full bg-linear-to-l from-[#9514FA] to-[#4F39F6] hover:opacity-90 transition-colors duration-200 cursor-pointer">
            Explore Products
          </button>

          <button className="text-sm font-semibold px-5 py-2 border rounded-full bg-linear-to-l from-[#9514FA] to-[#4F39F6] bg-clip-text hover:text-transparent transition-colors duration-200 cursor-pointer flex items-center gap-2">
            <span>
              <img src={playBtnImg} alt="Play button image" />
            </span>
            Watch Demo
          </button>
        </div>
      </div>

      {/* banner image */}
      <div className=" md:basis-1/2">
        <img className="w-full" src={bannerImg} alt="Banner image" />
      </div>
    </section>
  );
};

export default Banner;
