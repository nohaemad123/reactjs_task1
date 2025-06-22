import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import gallery1 from "../../assets/poert1.png";
import gallery2 from "../../assets/port2.png";
import gallery3 from "../../assets/port3.png";
import Gallery from "../../components/gallery/gallery";

export default function Portfolio() {
  const galleries = [
    {
      image: gallery1,
    },
    {
      image: gallery2,
    },
    {
      image: gallery3,
    },
    {
      image: gallery1,
    },
    {
      image: gallery2,
    },
    {
      image: gallery3,
    },
  ];
  return (
    <>
      <div className="py-[150px]">
        <div className="text-center">
          <h3 className="text-5xl mb-3 mt-5 font-bold text-black uppercase">
            Portfolio component
          </h3>
          <span
            className="relative mt-3 text-black 
                before:absolute before:top-1/2 before:left-[-30%] before:w-40 before:h-0.5 before:bg-black before:-translate-y-1/2 before:-translate-x-full
                after:absolute after:top-1/2 after:right-[0%] after:w-40 after:h-0.5 after:bg-black after:-translate-y-1/2 after:translate-x-full pr-4"
          >
            <FontAwesomeIcon icon={faStar} />
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 md:px-20 mt-5  text-lg">
          {galleries.map((gallery, index) => (
            <Gallery key={index} gallery={gallery} />
          ))}
        </div>
      </div>
    </>
  );
}
