"use client";
import { useState } from "react";

/*
3. What programming languages can participants use in the contest?
- 

4.  
Who was Father Richard William Timm, and why is the contest named in his honor?

Father Richard William Timm was a notable figure known for his contributions to academia, humanitarianism, and biodiversity exploration. The contest is named in his honor to celebrate his enduring influence and legacy in these realms.
What educational backgrounds are eligible to participate in FTMPC 4.0?

FTMPC 4.0 is open to students from various educational backgrounds, including schools, colleges (including HSC batch-2023), and corresponding institutions such as polytechnic institutes (4th year and below).
What programming languages can participants use in the contest?

Participants can use Python, C, or C++ programming languages to tackle challenges inspired by the International Olympiad in Informatics (IOI) format.


4. How long will the preliminary contest last, and what format will it follow?
- The preliminary contest will last for 3 hours and will follow the IOI format.

5. What measures are in place to address plagiarism issues during the contest?

Contestants may use pre-existing third-party code but should be wary of template duplication to prevent confusion. Plagiarism, including sharing or copying code during the contest, results in immediate disqualification at the judges' discretion.
*/
const FAQS = [
  {
    title: "Why it is called NDCFT?",
    desc: "It is a fun name combining both Non Fungible Token and Notre Dame College.",
  },
  {
    title: "Why should I buy from this marketplace?",
    desc: "Our marketplace provides you with NFTs based on your personal preferences curated by our AI. So you will always get what you desire.",
  },
  {
    title: "Who can buy from NDCFT marketplace?",
    desc: "Anyone who can use Internet can buy form our website, obviously you must have the money :)",
  },
  {
    title: "Who made this website?",
    desc: "Wasef Rahman Swapnil, the genius made this website all by himself.",
  },
  {
    title: "What tech stack did he use to make this website?",
    desc: "Swapnil used NextJS, Tailwind CSS to build this website.",
  },
];
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number>(1);
  //here index starts from 1. 0 means all closed
  return (
    <section className="px-3 mt-36 text-white w-screen flex flex-col items-center h-fit pt-16 pb-16 object-cover  text-center">
      <div className="container">
        <div className="mb-16 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Recently Asked <span className="text-purple-600">Questions</span>
        </div>
        {FAQS.map((data, index) => (
          <div key={index}>
            <h2 className="text-lg font-bold Nunito">
              <button
                onClick={() =>
                  setOpenIndex((s) => (s === index + 1 ? 0 : index + 1))
                }
                type="button"
                className={`flex items-center justify-between w-full p-5 font-bold rtl:text-right text-white border ${
                  index !== FAQS.length - 1 || openIndex === index + 1
                    ? "border-b-0"
                    : ""
                } border-gray-200 ${
                  index === 0
                    ? "rounded-t-xl"
                    : index === FAQS.length - 1 && openIndex !== index + 1
                    ? "rounded-b-xl"
                    : ""
                } focus:ring-4 focus:ring-gray-200    hover:bg-gray-700  gap-3`}
              >
                <span>{data.title}</span>
                <svg
                  className={`w-3 h-3 ${
                    openIndex === index + 1 ? "rotate-180" : "-rotate-90"
                  } shrink-0`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div>
              <div
                style={{
                  display: openIndex === index + 1 ? "block" : "none",
                }}
                className={`p-5 border transition-all ${
                  index !== FAQS.length - 1 ? "border-b-0" : "rounded-b-xl"
                } border-gray-200  overflow-hidden`}
              >
                <p className="mb-2 text-white">{data.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
