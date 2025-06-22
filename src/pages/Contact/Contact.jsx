import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Contact() {
  return (
    <>
      <div className="py-[150px] ">
        <div className="container ">
          <div className="text-center ">
            <h3 className="text-5xl mb-3 mt-5 font-bold text-[rgb(44, 62, 80)] uppercase">
              contact section
            </h3>
            <span
              className="relative mt-4 text-black 
                   before:content-[''] before:absolute before:top-1/2 before:left-[-30%] before:w-40 before:h-0.5 before:bg-black before:-translate-y-1/2 before:-translate-x-full
                   after:content-[''] after:absolute after:top-1/2 after:right-[0%] after:w-40 after:h-0.5 after:bg-black after:-translate-y-1/2 after:translate-x-full pr-4"
            >
              <FontAwesomeIcon icon={faStar} />
            </span>
          </div>

          <form class=" mt-5 w-[50%] mx-auto">
            <div class="relative z-0 mb-[20px] group">
              <input
                type="text"
                name="floating_username"
                id="floating_username"
                className="block py-2.5 pb-[30px]  px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 
               appearance-none dark:text-white 
               focus:outline-none focus:ring-0  peer"
                placeholder=" "
                required
              />
              <label
                for="floating_username"
                class="text-gray-700  peer-focus:font-medium absolute text-md peer-focus:text-secondary text-lg   
              duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0
               peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                userName:
              </label>
            </div>
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="number"
                name="floating_age"
                id="floating_age"
                className="block py-2.5 pb-[30px]  px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 
               appearance-none dark:text-white 
               focus:outline-none focus:ring-0  peer"
                placeholder=" "
                required
              />
              <label
                for="floating_age"
                class="text-gray-700  peer-focus:font-medium absolute text-md peer-focus:text-secondary text-lg   
              duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0
               peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                userAge:
              </label>
            </div>
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="email"
                name="floating_email"
                id="floating_email"
                className="block py-2.5 pb-[30px]  px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 
               appearance-none dark:text-white 
               focus:outline-none focus:ring-0  peer"
                placeholder=" "
                required
              />
              <label
                for="floating_email"
                class="text-gray-700  peer-focus:font-medium absolute text-md peer-focus:text-secondary text-lg   
              duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0
               peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                userEmail:
              </label>
            </div>
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="password"
                name="floating_password"
                id="floating_password"
                className="block py-2.5 pb-[30px]  px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 
               appearance-none dark:text-white 
               focus:outline-none focus:ring-0  peer"
                placeholder=" "
                required
              />
              <label
                for="floating_password"
                class="text-gray-700  peer-focus:font-medium absolute text-md peer-focus:text-secondary text-lg   
              duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0
               peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                userPassword:
              </label>
            </div>
            <button
              type="submit"
              class="text-white bg-secondary transition-colors duration-500 cursor-pointer hover:bg-green-500 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
