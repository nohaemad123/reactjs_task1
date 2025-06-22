import userAvatar from "../../assets/avataaars.svg";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  return (
    <div className="h-screen bg-secondary flex flex-col justify-center items-center">
      <img src={userAvatar} style={{ width: "250px", height: "250px" }} />
      <h2 className="text-4xl mt-5 font-bold text-white uppercase">
        start Framework
      </h2>
      <span
        className="relative mt-3 text-white 
    before:content-[''] before:absolute before:top-1/2 before:left-[-30%] before:w-40 before:h-0.5 before:bg-white before:-translate-y-1/2 before:-translate-x-full
    after:content-[''] after:absolute after:top-1/2 after:right-[0%] after:w-40 after:h-0.5 after:bg-white after:-translate-y-1/2 after:translate-x-full pr-4"
      >
        <FontAwesomeIcon icon={faStar} />
      </span>
      <p className="mt-3 text-white">
        Graphic Artist - Web Designer - Illustrator
      </p>
    </div>
  );
}
