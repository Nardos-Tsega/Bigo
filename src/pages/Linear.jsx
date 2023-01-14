import Layout from "../Layout/Layout";
import LinearCode from "../assets/linear.png";
import Graph from "../components/Graph";

export default function Linear() {
  return (
    <Layout>
      <div className="grid grid-cols-12">
        <div className="col-span-6 text-white">
          <h3 className="text-white text-4xl font-rowdies">
            O(n) – Linear Time
          </h3>
          <p className="text-white text-lg mt-6">
            Big-O Notation is a way of describing how quickly an algorithm runs.
            It is an estimate of the number of operations (or steps) an
            algorithm will take to complete, given a certain number of inputs.
            Basically, Big-O notation allows you to compare the complexity of
            different algorithms. In other words, it can be used to measure how
            efficient an algorithm is in terms of time, memory or computation.
            To put it simply, the Big-O notation gives you an idea of how long
            something will take to run. The most commonly used Big-O notations
            are O(n), O(log n) and O(n2).
            <div className="bg-[#F7E733] text-black shadow-lg px-4 py-6 mt-6 rounded-md">
              <h3 className="text-black mb-2 text-xl font-rowdies">
                Sample code
              </h3>
              <img src={LinearCode} alt="LinearCode" />
            </div>
          </p>
        </div>
        <div className="col-span-4">
          <Graph />
        </div>
      </div>
    </Layout>
  );
}
