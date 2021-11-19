// import { useContext } from "react/cjs/react.production.min";
// import { MentorContext } from "../../MentorContext";
import Card from "./Components/card/card";
import MagGlass from "./Components/body/glass";
import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "./Components/header/header";
import Footer from "./Components/footer/footer";

const Candidates = () => {
  const bodystyle = `lg:px-52 px-10 pt-32 pb-10`;
  const selectstyle =
    "text-2xl font-bold border-b-2 border-transparent focus:border-black text-gray-400 focus:text-black";
  const loadbuttonstyle =
    "bg-black text-white text-md font-bold px-4 py-3 rounded-lg hover:shadow-md ";

  const [data, setdata] = useState(null);
  const [showdata, setshowdata] = useState(true);
  const [number, setnumber] = useState(16);

  const API = "https://randomuser.me/api/?results=" + number;

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((info) => {
        setdata(info);
        setshowdata(false);
      });
  }, [number]);

  return (
    <>
      <Header />
      <div class={bodystyle}>
        <div class="flex gap-5">
          <Link href="/">
            <a class={selectstyle}>Mentors</a>
          </Link>
          <a href="#" class={selectstyle}>
            Topics
          </a>
        </div>
        <div class="pt-5">
          <form>
            <div class="bg-gray-100 rounded-lg px-4 py-3 md:w-96 w-60 flex items-center gap-2 border border-gray-200">
              <MagGlass />
              <input
                type="text"
                placeholder="Search by company, role or language"
                class="bg-gray-100 text-gray-700 w-full focus:outline-none"
              />
            </div>
          </form>
        </div>
        <div class="pt-10 grid lg:grid-cols-4 grid-cols-2 gap-10 md:pr-2">
          {showdata ? (
            <div class="text-3xl font-bold ">Loading...</div>
          ) : (
            data.results.map((info, i) => (
              <div id={i}>
                <Card
                  name={info.name.first}
                  image={info.picture.large}
                  email={info.email}
                />
              </div>
            ))
          )}
        </div>
        <div class="grid justify-center pt-7">
          <button class={loadbuttonstyle} onClick={() => setnumber(number + 8)}>
            Load More
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Candidates;
