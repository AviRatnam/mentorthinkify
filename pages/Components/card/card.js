// import Speechbubble from "./speechbubble";
import Link from 'next/link';
import Github from "../mentorinfo/github";
import Linkedin from "../mentorinfo/linkedin";
import Resume from "../mentorinfo/resume";
import Suitcase from "./suitcase";

const Card = ({ name, image, email }) => {
  const cardstyle =
    "w-75 h-card rounded-lg hover:shadow-lg shadow-md text-black cursor-pointer ";
  //flex items-end
  const imagestyle = `w-full h-3/4 overflow-hidden object-cover rounded-t-lg`;
  //h-96
  return (
    <Link href={`/mentorinfo/${name}`}>
      <div class={cardstyle}>
        <img src={image} alt="image" class={imagestyle} />
        <div class="align-baseline font-bold text-sm pl-3 pt-4">
          <div class="flex items-center justify-between">
            <div class="text-xl">{name}</div>
            <div class="flex items-center gap-2 pr-3">
              <Linkedin width={20} height={20} />
              <Github width={20} height={20} />
              <Resume width={20} height={20} />
            </div>
          </div>
          <div>Engineer</div>
          <div class="flex items-center gap-2 pt-2">
            <Suitcase />
            <span>{email}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
