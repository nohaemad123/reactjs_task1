import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function Gallery({ gallery }) {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <div
        className="gallery relative group cursor-pointer"
        onClick={() => setSelectedImage(gallery.image)}
      >
        <img src={gallery.image} alt="" />
        <div
          className="overlay text-white text-3xl flex justify-center items-center
          absolute top-0 left-0 right-0 bottom-0
          opacity-0 group-hover:opacity-80
          transition-opacity duration-1000 ease-in-out
          bg-[#1abc9ce6]"
        >
          <FontAwesomeIcon icon={faPlus} />
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-[rgb(13,110,253)]/25 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="modal" className="w-[600px] " />
          </div>
        </div>
      )}
    </>
  );
}
