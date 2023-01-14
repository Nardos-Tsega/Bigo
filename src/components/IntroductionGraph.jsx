import { useState } from "react";
import { VictoryLine, VictoryChart, VictoryAxis } from "victory";

const data = {
  constant: [
    { x: 1, y: 1 },
    { x: 10, y: 1 },
    { x: 20, y: 1 },
    { x: 40, y: 1 },
    { x: 60, y: 1 },
    { x: 80, y: 1 },
    { x: 100, y: 1 },
  ],
  linear: [
    { x: 1, y: 1 },
    { x: 10, y: 10 },
    { x: 20, y: 20 },
    { x: 40, y: 40 },
    { x: 60, y: 60 },
    { x: 80, y: 80 },
    { x: 100, y: 100 },
  ],
  quadratic: [
    { x: 1, y: 1 },
    { x: 10, y: 100 },
    { x: 20, y: 400 },
    { x: 40, y: 1600 },
    { x: 60, y: 3600 },
    { x: 80, y: 6400 },
    { x: 100, y: 10000 },
  ],

  logarithmic: [
    { x: 1, y: 0 },
    { x: 10, y: 3.322 },
    { x: 20, y: 4.322 },
    { x: 40, y: 5.322 },
    { x: 60, y: 5.907 },
    { x: 80, y: 6.322 },
    { x: 100, y: 6.644 },
  ],

  quasilinear: [
    { x: 1, y: 0 },
    { x: 10, y: 33.22 },
    { x: 20, y: 86.44 },
    { x: 40, y: 212.88 },
    { x: 60, y: 354.42 },
    { x: 80, y: 505.76 },
    { x: 100, y: 664.4 },
  ],

  exponential: [
    { x: 1, y: 2 },
    { x: 10, y: 1024 },
    { x: 20, y: 1048576 },
    { x: 40, y: 1099511627776 },
    { x: 60, y: 1152921504606846976 },
    { x: 80, y: 1208925819614629174706176 },
    { x: 100, y: 1267650600228229401496703205376 },
  ],

  factorial: [
    { x: 1, y: 1 },
    { x: 10, y: 3628800 },
    { x: 20, y: 2432902008176640000 },
    { x: 40, y: 815915283247897734345611269596115894272000000000 },
    {
      x: 60,
      y: 8320987112741390144276341183223364380754172606361245952449277696409600000000000000,
    },
    {
      x: 80,
      y: 71569457046263802294811533723186532165584657342365752577109445058227039255480148842668944867280814080000000000000000000,
    },
    {
      x: 100,
      y: 93326215443944152681699238856266700490715968264381621468592963895217599993229915608941463976156518286253697920827223758251185210916864000000000000000000000000,
    },
  ],
};

export default function IntroductionGraph() {
  const [selected, setSelected] = useState("constant");
  return (
    <div className="bg-[#2B2D42] shadow-lg px-8 py-8 fixed flex bottom-28 flex-col gap-8 ml-12  mr-48 rounded-md">
      <div className="flex">
        <select
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          className="h-10 rounded flex-1 px-3 focus:outline-none bg-[#F7F7F9]"
        >
          <option value="constant">O(1) – Constant Time</option>
          <option value="linear">O(n) – Linear Time</option>
          <option value="quadratic">O(n²) – Quadratic Time</option>
          <option value="logarithmic">O(log n) – Logarithmic Time</option>
          <option value="quasilinear">O(n log n) – Quasilinear Time</option>
          <option value="exponential">O(2n) – Exponential time</option>
          <option value="factorial">O(n!) – Factorial time</option>
        </select>
      </div>
      <div className="bg-[#F7F7F9] px-4 py-6 rounded-md">
        <VictoryChart>
          <VictoryAxis
            dependentAxis
            // tickFormat specifies how ticks should be displayed
            tickFormat={(x) => ``}
          />
          <VictoryAxis
            // tickValues specifies both the number of ticks and where
            // they are placed on the axis
            tickValues={data[selected].x}
          />
          <VictoryLine data={data[selected]} />
        </VictoryChart>
      </div>
    </div>
  );
}
