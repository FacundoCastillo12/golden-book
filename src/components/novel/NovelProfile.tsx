import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import LastTenBook from "@/data/books/books";

function NovelProfile() {
  return (
    <div className=" bg-base-100 p-4 dark:bg-gray-900 sm:w-[20rem]">
      <div className="flex flex-col items-center ">
        <div className="avatar my-2">
          <div className="w-24 rounded-full ring ring-primary ring-offset-2 ring-offset-base-100">
            <img
              src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              alt="Profile imagen author"
            />
          </div>
        </div>
        <div className="text-center font-semibold">
          <h3 className=" text-lg font-semibold">Autor</h3>
        </div>
        <div className="flex flex-wrap gap-2 py-1">
          <FontAwesomeIcon icon={faEnvelope} />
          <FontAwesomeIcon icon={faUser} />
        </div>
      </div>
      <div className="my-2 flex justify-center">
        <button type="button" className="btn-outline btn-primary btn">
          Donar
        </button>
      </div>
    </div>
  );
}

export default NovelProfile;
