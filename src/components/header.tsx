function Header() {
  return (
    <div className="bg-[#212437] flex flex-row text-[#f9fdff] p-8 justify-between">
      <div className="w-[600px] text-center"> Vignesh Balasubramaniam </div>
      <div className=" flex flex-row justify-center gap-10 w-full">
        <button className="hover:text-[#ff4b57]">Home</button>
        <button className="hover:text-[#ff4b57]">About</button>
        <button className="hover:text-[#ff4b57]">Contact Us</button>
      </div>
    </div>
  );
}

export default Header;
