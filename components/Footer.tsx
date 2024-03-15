const Footer = () => {
  return (
    <footer className="bottom-0 fixed dark:bg-black bg-[#F2F2F2] h-24 w-full">
      <div className="py-3 pl-3">Kenya</div>
      {/* <div className=""/> */}
      <div className="justify-between flex border-t border-[#DADCE0] dark:border-[#171717] pt-3 px-3">
        <div className="flex gap-2">
          <p>About</p>
          <p>Advertising</p>
          <p>Business</p>
          <p>How Search works</p>
        </div>
        <div className="hidden md:block">
          Our third decade of climate action: join us
        </div>
        <div className="flex gap-2">
          <p>Privacy</p>
          <p>Terms</p>
          <p>Settings</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
