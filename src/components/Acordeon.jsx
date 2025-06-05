import { useState } from "react";

const Acordeon = ({accordionData}) => {
    const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-5xl mx-auto bg-white shadow-md p-4 pb-8">
      {accordionData.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="border-b border-slate-200">
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center py-5 text-slate-800 cursor-pointer"
            >
              <span>{item.question}</span>
              <span
                className={`transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d={
                      isOpen
                        ? "M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                        : "M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z"
                    }
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? "max-h-40" : "max-h-0"
              }`}
            >
              <div className="pb-5 text-sm text-slate-500">{item.answer}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Acordeon