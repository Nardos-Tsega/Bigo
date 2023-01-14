import IntroductionGraph from "../components/IntroductionGraph";
import Layout from "../Layout/Layout";

export default function Introduction() {
  return (
    <Layout>
      <div className="grid grid-cols-12">
        <div className="col-span-6 text-white">
          <h3 className="text-white mb-8 text-4xl font-rowdies">
            Introduction
          </h3>
          <p className="text-white text-lg">
            Big-O Notation is a way of describing how quickly an algorithm runs.
            It is an estimate of the number of operations (or steps) an
            algorithm will take to complete, given a certain number of inputs.
            Basically, Big-O notation allows you to compare the complexity of
            different algorithms. In other words, it can be used to measure how
            efficient an algorithm is in terms of time, memory or computation.
            To put it simply, the Big-O notation gives you an idea of how long
            something will take to run. The most commonly used Big-O notations
            are O(n), O(log n) and O(n2). <br />
            <br /> O(n) is the simplest type of Big-O notation and represents
            the time complexity for an algorithm that is linear or linearithmic.
            Simply put, this means that when the size of the input increases by
            one, the running time of the algorithm increases by one. This is the
            most common notation and can be used in many different types of
            algorithms.
            <br />
            <br /> O(log n) is a more advanced form of Big-O notation and
            represents the time complexity for an algorithm that is logarithmic
            in nature. In other words, when the size of the input increases by
            one, the running time of the algorithm increases by a logarithmic
            factor. This type of notation is often used when dealing with large
            amounts of data, such as when sorting or searching algorithms are
            involved. <br />
            <br />
            Finally, O(n2) represents the time complexity for an algorithm that
            is exponential in nature. This means that when the size of the input
            increases by one, the running time of the algorithm increases
            exponentially. Algorithms that are exponential in runtime are
            usually very difficult to solve and can cause some serious
            performance issues if not handled properly.
            <br />
            <br /> In conclusion, Big-O notation is a way to describe how
            quickly an algorithm runs and gives you an idea of how efficient it
            is. It can also be used to compare different algorithms and
            determine which one is best suited for your needs.
          </p>
        </div>
        <div className="col-span-6 mt-20">
          <IntroductionGraph />
        </div>
      </div>
    </Layout>
  );
}
