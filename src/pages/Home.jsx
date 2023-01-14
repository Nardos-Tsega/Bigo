import React from "react";
import { useNavigate } from "react-router";

export default function Home({ setHome }) {
  let navigate = useNavigate();

  function handleGetStarted() {
    navigate("/introduction");
  }

  return (
    <div className="min-h-screen bg-[#2B2D42] grid grid-cols-12">
      <div className="col-span-7 flex flex-col items-center justify-center px-24">
        <h3 className="text-4xl font-rowdies text-[#F7E733] mb-14 self-start">
          BIGO
        </h3>
        <h3 className="text-white text-4xl font-rowdies">
          {" "}
          Are you looking for an overview of Big-O notation?
        </h3>
        <p className="text-white text-lg mt-6">
          Learning Big-O notation can seem intimidating at first, but with the
          right approach, it doesn't have to be! This project will provide an
          easy-to-follow guide for understanding Big-O notation and help you
          visualise its associated functions. You will be able to select from a
          list of functions, ranging from linear O(n) to exponential O(2^n). An
          accompanying description provides further details. With each function
          you choose, you are able to specify the amount of input and watch as a
          graph is plotted depicting the complexity of the function. Our aim is
          to make Big-O notation accessible and easy to learn for all
          programmers. So take the plunge and get up to speed with Big-O
          notation today - it's not as scary as it seems!
        </p>
      </div>
      <div className="col-span-5 bg-[#3F425F] shadow-lg rounded-md py-12 flex flex-col gap-2 items-center justify-center">
        <p></p>
        <button
          onClick={handleGetStarted}
          className="mt-4 px-16 text-lg shadow-lg hover:text-white text-[#2B2D42] bg-[#F7E733] py-4 border-2 border-[#F7E733] rounded"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
