import {
  RiArrowDownSLine,
  RiChat3Line,
  RiLogoutCircleLine,
  RiNotification3Line,
  RiSettings3Line,
  RiThumbUpLine,
} from "react-icons/ri";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/zoom.css";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <header className="h-[7vh] xl:h-[10vh] border-b border-secondary-100 p-8 flex items-center justify-end">
      <nav className="flex items-center gap2">
        <Menu
          menuButton={
            <MenuButton className="relative hover:bg-secondary-100 p-2 rounded-lg transition-colors">
              <RiNotification3Line />
              <span className="absolute -top-0.5 right-0 bg-primary py-0.5 px-[5px] box-content text-black rounded-full text-[8px] font-bold">
                2
              </span>
            </MenuButton>
          }
          transition
          arrow
          align="end"
          menuClassName="bg-secondary-100 p-4"
        >
          <h2 className="text-gray-200 text-center ">Notificaciones</h2>
          <hr className="my-6 border-gray-500" />
          <MenuItem className="p-0 bg-transparent">
            <Link
              to="/profile"
              className="text-gray-300 flex flex-1 items-center gap-4 py-2 px-4 hover:bg-secondary-900 transition-colors rounded-lg"
            >
              <img
                src="https://img.freepik.com/foto-gratis/cierre-dientes-hombre-moreno-sonriendo_1187-5800.jpg"
                alt=""
                className="w-8 h-8 object-cover rounded-full"
              />
              <div className="text-sm flex flex-col ">
                <div className="flex items-center justify-between gap-4">
                  <span>Morph</span>
                  <span className="text-[8px]">15-09-2024</span>
                </div>
                <p className="text-gray-500 text-xs">
                  Lorem, ipsum dolor sit amet...
                </p>
              </div>
            </Link>
          </MenuItem>
          <MenuItem className="p-0 bg-transparent">
            <Link
              to="/"
              className="text-gray-300 flex flex-1 items-center gap-4 py-2 px-4 hover:bg-secondary-900 transition-colors rounded-lg"
            >
              <RiThumbUpLine className="p-2 rounded-full bg-blue-200 text-blue-700 box-content" />
              <div className="text-sm flex flex-col ">
                <div className="flex items-center justify-between gap-4">
                  <span>Nuevo like</span>
                  <span className="text-[8px]">15-09-2024</span>
                </div>
                <p className="text-gray-500 text-xs text-wrap">
                  Le gusta tu publicación...
                </p>
              </div>
            </Link>
          </MenuItem>
          <MenuItem className="p-0 bg-transparent">
            <Link
              to="/"
              className="text-gray-300 flex flex-1 items-center gap-4 py-2 px-4 hover:bg-secondary-900 transition-colors rounded-lg"
            >
              <RiChat3Line className="p-2 rounded-full bg-yellow-200 text-yellow-700 box-content" />
              <div className="text-sm flex flex-col ">
                <div className="flex items-center justify-between gap-4">
                  <span>Nuevo mensaje</span>
                  <span className="text-[8px]">15-09-2024</span>
                </div>
                <p className="text-gray-500 text-xs">
                  mensajes
                </p>
              </div>
            </Link>
          </MenuItem>
          <hr className="my-6 border-gray-500" />
          <MenuItem className="p-0 bg-transparent flex justify-center cursor-default">
            <Link to="/" className="text-gray-400 text-sm hover:text-white transition-colors">
              Todas las notificaciones
            </Link>
          </MenuItem>
        </Menu>
        <Menu
          menuButton={
            <MenuButton className="flex items-center gap-x-2 hover:bg-secondary-100 py-2 px-4 rounded-lg transition-colors">
              <img
                src="https://img.freepik.com/foto-gratis/cierre-dientes-hombre-moreno-sonriendo_1187-5800.jpg"
                alt=""
                className="w-6 h-6 object-cover rounded-full"
              />
              <span>Morph</span>
              <RiArrowDownSLine />
            </MenuButton>
          }
          transition
          arrow
          align="end"
          menuClassName="bg-secondary-100 p-4"
        >
          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              to="/profile"
              className="flex items-center gap-x-4 rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 py-2 px-6 flex-1"
            >
              <img
                src="https://img.freepik.com/foto-gratis/cierre-dientes-hombre-moreno-sonriendo_1187-5800.jpg"
                alt=""
                className="w-8 h-8 object-cover rounded-full"
              />
              <div className="flex flex-col gap-1">
                <span className="text-sm">Morph</span>
                <span className="text-xs text-gray-500">morph@gmail.com</span>
              </div>
            </Link>
          </MenuItem>
          <hr className="my-6 border-gray-500" />
          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              to="/coifg"
              className="flex items-center gap-x-4 rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 py-2 px-6 flex-1"
            >
              <RiSettings3Line /> Configuración
            </Link>
          </MenuItem>
          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              to="/coifg"
              className="flex items-center gap-x-4 rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 py-2 px-6 flex-1"
            >
              <RiLogoutCircleLine /> Cerrar sesión
            </Link>
          </MenuItem>
        </Menu>
      </nav>
    </header>
  );
};
