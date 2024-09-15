import { useState } from "react";
import { MdOutlineSupportAgent } from "react-icons/md";
import {
  RiArrowRightSLine,
  RiBarChart2Line,
  RiCalendarTodoLine,
  RiCloseLine,
  RiEarthLine,
  RiLogoutCircleLine,
  RiMenu3Line,
} from "react-icons/ri";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [showSubMenu, setShowSubMenu] = useState(false);
  return (
    <>
      <div className={`xl:h-[100vh] overflow-y-scroll fixed xl:static w-[80%] md:w-[40%] lg:[30%] xl:w-auto h-full top-0 bg-secondary-100 p-4 flex flex-col justify-between z-50 ${showMenu ? "left-0" : "-left-full"} transition-all duration-300`}>
        <div>
          <h1 className="text-center text-2xl font-bold text-white mb-10">
            Admin<span className="text-primary text-4xl">.</span>
          </h1>
          <ul>
            <li>
              <Link
                to="/"
                className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
              >
                <RiBarChart2Line className="text-primary" />
                Analiticas
              </Link>
            </li>
            <li>
              <button
                onClick={() => setShowSubMenu(!showSubMenu)}
                className="w-full flex items-center justify-between gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
              >
                <span className="flex items-center gap-4">
                  <RiEarthLine className="text-primary" />
                  Redes Sociales
                </span>
                <RiArrowRightSLine
                  className={`${showSubMenu && "rotate-90"} transition-all`}
                />
              </button>
              <ul className={`${showSubMenu ? "h-[120px]" : "h-0"} overflow-y-hidden transition-all duration-300`}>
                <li>
                  <Link
                    to="/"
                    className="py-2 px-4 border-l hover:text-white transition-colors border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 text-white"
                  >
                    Post red social
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="py-2 px-4 border-l hover:text-white transition-colors border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-gray-500 before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100"
                  >
                    Estadisticas
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="py-2 px-4 border-l hover:text-white transition-colors border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-gray-500 before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100"
                  >
                    Perfiles
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                to="/"
                className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
              >
                <MdOutlineSupportAgent className="text-primary" />
                Soporte técnico
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
              >
                <RiCalendarTodoLine className="text-primary" />
                Calendario
              </Link>
            </li>
          </ul>
        </div>
        <nav>
          <Link
            to="/"
            className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
          >
            <RiLogoutCircleLine className="text-primary" />
            Cerrar sesión
          </Link>
        </nav>
      </div>
      <button onClick={() => setShowMenu(!showMenu)} className="fixed xl:hidden bottom-4 right-4 bg-primary text-black p-3 rounded-full z-50">
        { showMenu ? <RiCloseLine/> : <RiMenu3Line /> }
      </button>
    </>
  );
};
