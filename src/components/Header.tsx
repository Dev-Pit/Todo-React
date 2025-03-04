import { PiNotebookFill } from "react-icons/pi";

const Header = () => {
  return (
    <div className="lg:mx-16 md:mx-10 mx-5 my-2 p-2 rounded-[0.5rem] bg-amber-200">
      <span className="flex justify-center items-center gap-2">
        <PiNotebookFill size={25} />
        <h1 className="text-center text-3xl font-bold">My Todo</h1>
      </span>
    </div>
  );
};

export default Header;
