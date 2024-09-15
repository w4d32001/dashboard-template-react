import { useState } from "react";
import { RiEyeLine, RiEyeOffLine, RiLockLine, RiMacLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex justify-center items-center p-4">
      <div className="bg-secondary-100 p-8 rounded-xl w-auto lg:w-[450px]">
        <h1 className="text-3xl text-center uppercase font-bold tracking-[5px] text-white mb-10">
          Iniciar <span className="text-primary">sesión</span>
        </h1>
        <form className="mb-10">
          <button className="flex items-center justify-center py-3 px-4 gap-4 bg-secondary-900 w-full rounded-full mb-8 text-gray-100">
            <img
              src="https://w7.pngwing.com/pngs/326/85/png-transparent-google-logo-google-text-trademark-logo-thumbnail.png"
              alt=""
              className="w-4 h-4"
            />
            Ingresa con google
          </button>
          <div>
            <div className="relative mb-4">
              <RiMacLine className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
              <input
                type="email"
                className="py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary"
                placeholder="Correo electrónico"
              />
            </div>
            <div className="relative mb-8">
              <RiLockLine className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
              <input
                type={showPassword ? "text" : "password"}
                className="py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg focus:border focus:border-primary"
                placeholder="Contraseña"
              />
              {showPassword ? (
                <RiEyeOffLine
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-primary"
                />
              ) : (
                <RiEyeLine
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-primary"
                />
              )}
            </div>
            <div>
              <button
                type="submit"
                className="bg-primary text-secondary-900 font-bold w-full py-3 px-4 rounded-lg"
              >
                Ingresar
              </button>
            </div>
          </div>
        </form>
        <div className="flex flex-col items-center gap-4">
          <Link
            to="/forget-password"
            className="hover:text-primary transition-colors"
          >
            Olvidate tu contraseña?
          </Link>
          <span className="flex items-center gap-2">
            No tienes cuenta?
            <Link
              to="/register"
              className="text-primary hover:text-gray-100 transition-colors"
            >
              {" "}
              Registrate
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};
