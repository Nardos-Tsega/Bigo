import { Link } from "react-router-dom";

export default function SideNav() {
  const Navigations = [
    {
      label: "Introduction",
      path: "/introduction",
    },
    {
      label: "Constant",
      path: "/constant",
    },
    {
      label: "Linear",
      path: "/linear",
    },
    {
      label: "Logarithmic",
      path: "/logarithmic",
    },
    {
      label: "Quadratic",
      path: "/quadratic",
    },

    {
      label: "Quasilinear",
      path: "/quasilinear",
    },
    {
      label: "Exponential",
      path: "/exponential",
    },
    {
      label: "Factorial",
      path: "/factorial",
    },
  ];

  return (
    <div className="bg-[#2B2D42] fixed w-full left-0 right-0 px-12 py-6 flex border-b-4 border-[#F7E733] mb-2 justify-between">
      <div className="">
        <Link to="/" className="font-rowdies text-[#F7E733] font-bold text-5xl">
          BIGO
        </Link>
      </div>
      <div className="flex gap-8">
        {Navigations.map((item) => {
          return (
            <Link
              to={item.path}
              className="font-lato font-light text-lg text-white py-2"
              key={item.label}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
