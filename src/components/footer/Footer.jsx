import {
  faFacebook,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#2c3e50] text-white py-[40px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 md:px-20 my-4">
          <div className="text-center">
            <h3 className="uppercase text-2xl font-semibold">Location</h3>
            <p className="text-lg mt-3">
              2215 John Daniel Drive <br />
              Clark, MO 65243
            </p>
          </div>

          <div className="text-center">
            <h3 className="uppercase text-2xl font-semibold">around the web</h3>
            <ul className="flex justify-center mt-3 gap-3">
              <li className="w-[40px] h-[40px] flex justify-center items-center border border-white rounded-full">
                <a href="">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
              <li className="w-[40px] h-[40px] flex justify-center items-center border border-white rounded-full">
                <a href="">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li className="w-[40px] h-[40px] flex justify-center items-center border border-white rounded-full">
                <a href="">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </li>
              <li className="w-[40px] h-[40px] flex justify-center items-center border border-white rounded-full">
                <a href="">
                  <FontAwesomeIcon icon={faGlobe} />
                </a>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <h3 className="uppercase text-2xl font-semibold">
              About freelancer
            </h3>
            <p className="text-lg mt-3">
              Freelance is a free to use, licensed Bootstrap theme created by
              Route
            </p>
          </div>
        </div>
      </footer>
      <section className="copyright bg-[#1a252f] py-[10px] text-center">
        <p className="text-[#f0f8ff] text-lg">Copyright © Your Website 2021</p>
      </section>
    </>
  );
}
