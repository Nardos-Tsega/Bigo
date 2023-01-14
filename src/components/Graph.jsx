import { VictoryLine, VictoryChart, VictoryAxis } from "victory";

export default function Graph() {
  return (
    <div className="bg-[#2B2D42] shadow-lg px-8 py-8 fixed bottom-28 flex flex-col gap-8 ml-12  mr-48 rounded-md">
      <div className="bg-[#F7F7F9] px-4 py-6 rounded-md">
        <VictoryChart>
          <VictoryLine
            data={[
              { x: 1, y: 2 },
              { x: 2, y: 3 },
              { x: 3, y: 5 },
              { x: 4, y: 4 },
              { x: 5, y: 6 },
            ]}
          />
        </VictoryChart>
      </div>
      <div className="flex gap-3">
        <input
          type="text"
          className="h-10 rounded flex-1 px-3 focus:outline-none bg-[#F7F7F9]"
        />
        <button className="py-2 px-12 bg-[#E86A92] rounded text-white hover:bg-[#c14d72]">
          Plot
        </button>
      </div>
    </div>
  );
}
