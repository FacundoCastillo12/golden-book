import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faEye,
  faStar,
  faTableList,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";
import LastTenBook from "@/data/books/books";

function NovelHeader() {
  return (
    <>
      <div className="breadcrumbs flex flex-col flex-wrap items-center justify-center pl-0 text-sm sm:flex-row sm:justify-start md:pl-7">
        <ul>
          <li>
            <Link href="/#">Home</Link>
          </li>
          <li>
            <Link href="/#">{LastTenBook[0].genre[0]}</Link>
          </li>
          <li>
            <Link href="/#">{LastTenBook[0].title}</Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col flex-wrap justify-center p-2 sm:flex-row">
        <div className="flex basis-full items-center justify-center p-1 sm:basis-1/4">
          <img
            src={LastTenBook[0].cover}
            alt="Imagen"
            className=" h-[20rem] w-[16rem]"
          />
        </div>
        <div className="flex basis-3/4 flex-col text-left">
          <div className="p-1">
            <h2 className=" text-3xl font-bold">{LastTenBook[0].title}</h2>
          </div>
          <div className="my-2 flex flex-wrap gap-2 p-1 font-normal opacity-90">
            <div>
              <FontAwesomeIcon icon={faBook} />
              <span className="mx-1">{LastTenBook[0].genre[0]}</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faEye} />
              <span className="mx-1">20.4k</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faTableList} />
              <span className="mx-1">Chapter: 192</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faCalendarDays} />
              <span className="mx-1">3 Chapters/Week</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faUser} />
              <span className="mx-1">250 Readers</span>
            </div>
          </div>
          <div>
            <div className="p-1">
              <FontAwesomeIcon icon={faUser} />
              <span className="text-md mx-1">
                Authors:
                <Link href="/#" className="link-info link ml-1">
                  Karzhal
                </Link>
              </span>
            </div>
          </div>
          <div>
            <div className="p-1">
              <FontAwesomeIcon icon={faStar} className=" text-orange-400" />
              <span className="text-md font-bold opacity-75">
                {LastTenBook[0].rating}
              </span>
            </div>
          </div>

          <div className="my-2 mt-auto flex flex-wrap justify-center gap-2">
            <button type="button" className="btn-outline btn-accent btn">
              Leer
            </button>
            <button type="button" className="btn-outline btn">
              Añadir a favoritos
            </button>
            <button type="button" className="btn-outline btn-primary btn">
              Añadir a bibloteca
            </button>
            <button type="button" className="btn-outline btn-secondary btn">
              Leer luego
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default NovelHeader;
