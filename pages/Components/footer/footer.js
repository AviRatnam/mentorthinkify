const Footer = () => {
  const footerstyle = `bg-gray-100 border-t border-gray-200 md:px-52 pt-5 pb-5 px-10  `;

  return (
    // <div class="absolute inset-x-0 bottom-0">
      <div class={footerstyle}>
        <span class="text-3xl font-sans font-bold ">Thinkify</span>
        <div class="border-b-2 border-gray-200 pt-1"></div>
      </div>
    // </div>
  );
};

export default Footer;
