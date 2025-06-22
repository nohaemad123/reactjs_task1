import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function About() {
  return (
    <div className="h-screen bg-secondary flex flex-col justify-center items-center">
      <div className="flex flex-wrap justify-between flex-col items-center mx-auto max-w-screen-xl p-4">
        <h3 className="text-4xl mt-5 font-bold text-white uppercase">
          About component
        </h3>
        <span
          className="relative mt-3 text-white 
          before:content-[''] before:absolute before:top-1/2 before:left-[-30%] before:w-40 before:h-0.5 before:bg-white before:-translate-y-1/2 before:-translate-x-full
          after:content-[''] after:absolute after:top-1/2 after:right-[0%] after:w-40 after:h-0.5 after:bg-white after:-translate-y-1/2 after:translate-x-full pr-4"
        >
          <FontAwesomeIcon icon={faStar} />
        </span>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 md:px-20 mt-5 text-white text-lg">
          <p>
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
          <p>
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
        </div>
      </div>
    </div>
  );
}
