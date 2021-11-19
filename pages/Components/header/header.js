import Hamburger from "./hamburger";

const Header = () => {
  const headerstyle = `py-5 lg:px-52 px-10 border-b border-gray-200 flex justify-between items-center bg-white fixed w-full `;
  const signupstyle = `rounded-lg bg-black px-6 py-3 text-white text-sm font-bold hover:bg-blue-400 transition duration-400`;
  const loginstyle = `rounded-lg bg-white px-6 py-3 text-black text-sm font-bold hover:bg-black hover:text-white transition duration-400 border border-black`;

  const showinfo = () =>{
    
  }

  return (
    <div class={headerstyle}>
      <span class="text-3xl font-sans font-bold">Thinkify</span>
      <div class="md:hidden cursor-pointer" onClick={() => showinfo()}>
        <Hamburger />
      </div>
      <div class="justify-between gap-5 items-center md:flex hidden" id="info">
        <a class="font-bold" href="#">
          Become a mentor
        </a>
        <a class="font-bold" href="#">
          Find a mentor
        </a>
        <button class={loginstyle}>Login</button>
        <button class={signupstyle}>Sign Up</button>
      </div>
    </div>
  );
};

export default Header;
