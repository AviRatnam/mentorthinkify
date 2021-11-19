// import { useParams } from "react-router";
import { useRouter } from "next/router";
import Favourite from "./favourite";
import Github from "./github";
import Linkedin from "./linkedin";
import Resume from "./resume";
import Threedots from "./threedots";

const MentorInfo = () => {
  const router = useRouter();
  const { mentorname } = router.query;

  const bodystyle = `lg:px-52 px-10 pt-32 pb-10`;

  return (
    <div class={bodystyle}>
      <div class="flex gap-5 items-center">
        <span class="text-3xl font-bold ">{mentorname}</span>
        <Linkedin width={25} height={25} />
        <Github width={25} height={25} />
        <Resume width={24} height={24} />
      </div>
      <div class="pt-5 flex gap-3">
        <Threedots />
        <Favourite />
      </div>
      <div class="lg:px-52 px-10 pt-5 ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
        pellentesque ut justo non maximus. Proin tortor arcu, sollicitudin id
        quam in, accumsan gravida lacus. In mattis quam ac nisi scelerisque
        rutrum. Etiam fermentum varius felis, nec placerat lectus imperdiet id.
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
        inceptos himenaeos. Quisque lacus neque, feugiat ac rutrum at, laoreet
        in sapien. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aliquam vitae justo quis tellus commodo aliquet at ac tellus. Quisque id
        quam nec augue porta pulvinar at a nisl. Ut a dignissim odio. Morbi et
        metus magna. Curabitur eget feugiat ligula. Pellentesque pharetra justo
        eu risus cursus, ac posuere est blandit. Nam at enim eget enim finibus
        facilisis ac id quam. Pellentesque faucibus ultrices scelerisque.
        Curabitur nec sem justo. Phasellus ac viverra dui. In nec tempor ante.
        Sed non interdum nisi. Quisque nec rhoncus odio. Integer semper
        consectetur libero, nec consequat tortor faucibus eu. Vivamus vestibulum
        accumsan mi a pharetra. Nunc id tellus at quam efficitur varius sed ac
        nulla. Phasellus aliquam sagittis ipsum, ut condimentum libero elementum
        a. Nunc tempus dapibus neque in pharetra. In at varius lectus. Cras ut
        nunc posuere, efficitur arcu sed, viverra lorem.
      </div>
      <div class="pt-5 lg:px-52 px-10 ">
        <div class="shadow-md px-5 py-3 rounded-lg ">
          <div class="text-lg font-bold pb-3">Book an Appointment</div>
          <div class="flex gap-10">
            <a
              class="bg-gradient-to-r from-green-400 to-blue-500 px-5 py-3 rounded-lg text-lg text-white font-bold w-1/2"
              href="#"
            >
              Course 1
            </a>
            <a
              class="bg-gradient-to-r from-purple-400 to-red-500 px-5 py-3 rounded-lg text-lg text-white font-bold w-1/2"
              href="#"
            >
              Course 2
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorInfo;
