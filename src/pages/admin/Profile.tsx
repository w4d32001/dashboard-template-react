import { Switch } from "@headlessui/react";
import { useState } from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { IoMdAlert } from "react-icons/io";
import { RiEdit2Line, RiGithubFill, RiShieldCheckLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export const Profile = () => {
  const [enabledGoogle, setEnabledGoogle] = useState(false);
  const [enabledGitHub, setEnabledGitHub] = useState(false);
  const [enabledFaceBook, setEnabledFaceBook] = useState(false);
  return (
    <>
      <div className="bg-secondary-100 p-8 rounded-xl mb-8">
        <h1 className="texr-xl text-gray-100">Profile</h1>
        <hr className="my-8 border-gray-500/30" />
        <form>
          <div className="flex items-center mb-8">
            <div className="w-1/4">
              <p>Avatar</p>
            </div>
            <div className="flex-1">
              <div className="relative">
                <img
                  src="https://img.freepik.com/foto-gratis/cierre-dientes-hombre-moreno-sonriendo_1187-5800.jpg"
                  alt=""
                  className="w-32 h-32 object-cover rounded-lg"
                />
                <label
                  htmlFor="avatar"
                  className="absolute p-2 rounded-full hover:cursor-pointer bg-secondary-100 -top-3 left-28 text-center"
                >
                  <RiEdit2Line title="Editar" />
                </label>
                <input type="file" id="avatar" className="hidden" />
                <p className="text-gray-500 text-sm">
                  Allowed file types: png, jpg, jpeg.
                </p>
              </div>
            </div>
          </div>
          <div className="flex md:items-center gap-y-2 flex-col md:flex-row mb-8">
            <div className="w-full md:w-1/4">
              <p>
                Nombre completo <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1 flex flex-col md:flex-row items-center gap-4">
              <div className="w-full">
                <input
                  type="text"
                  className="w-full py-2 px-4 rounded-lg bg-secondary-900"
                  placeholder="Nombre(s)"
                />
              </div>
              <div className="w-full">
                <input
                  type="text"
                  className="w-full py-2 px-4 rounded-lg bg-secondary-900"
                  placeholder="Apellido(s)"
                />
              </div>
            </div>
          </div>
          <div className="flex md:items-center gap-y-2 flex-col md:flex-row mb-8">
            <div className="w-full md:w-1/4">
              <p>
                Nombre de la empresa <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1 flex items-center">
              <input
                type="text"
                className="w-full py-2 px-4 rounded-lg bg-secondary-900"
                placeholder="Empresa(s)"
              />
            </div>
          </div>
          <div className="flex md:items-center gap-y-2 flex-col md:flex-row mb-8">
            <div className="w-full md:w-1/4">
              <p>
                Numero de contacto <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1 flex items-center">
              <input
                type="text"
                className="w-full py-2 px-4 rounded-lg bg-secondary-900"
                placeholder="Contacto(s)"
              />
            </div>
          </div>
          <div className="flex md:items-center gap-y-2 flex-col md:flex-row mb-8">
            <div className="w-full md:w-1/4">
              <p>
                Pais <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1">
              <select
                name=""
                id=""
                className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900 appearance-none"
              >
                <option value="Argentina" selected>
                  Argentina
                </option>
                <option value="Perú">Perú</option>
                <option value="Colombia">Colombia</option>
                <option value="Mexico">Mexico</option>
              </select>
            </div>
          </div>
          <div className="flex md:items-center gap-y-2 flex-col md:flex-row mb-8">
            <div className="w-full md:w-1/4">
              <p>
                Ciudad <span className="text-red-500">*</span>
              </p>
            </div>
            <div className="flex-1">
              <select
                name=""
                id=""
                className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900 appearance-none"
              >
                <option value="Bogota" selected>
                  Bogota
                </option>
                <option value="Lima">Lima</option>
                <option value="Montevideo">Montevideo</option>
                <option value="Caracas">Caracas</option>
              </select>
            </div>
          </div>
        </form>
        <hr className="my-8 border-gray-500/30" />
        <div className="flex justify-end">
          <button className="bg-primary/80 text-white py-2 px-4 rounded-lg hover:bg-primary transition-colors">
            Guardar
          </button>
        </div>
      </div>
      <div className="bg-secondary-100 p-8 rounded-xl mb-8">
        <h1 className="texr-xl text-gray-100">Usuario y contraseña</h1>
        <hr className="my-8 border-gray-500/30" />
        <form action="">
          <div className="flex flex-col md:flex-row md:items-center gap-y-4 justify-between">
            <div>
              <h5 className="text-gray-100 text-xl">Correo electrónico</h5>
              <p className="text-gray-500 text-sm">morph@.com</p>
            </div>
            <div>
              <button className="w-full md:w-auto bg-secondary-900/50 py-3 px-4 rounded-lg text-white hover:bg-secondary-900 transition-colors">
                Cambiar email
              </button>
            </div>
          </div>
          <hr className="my-8 border-gray-500/30" />
          <div className="flex flex-col md:flex-row md:items-center gap-y-4 justify-between">
            <div>
              <h5 className="text-gray-100 text-xl">Contraseña</h5>
              <p className="text-gray-500 text-sm">********</p>
            </div>
            <div>
              <button className="w-full md:w-auto bg-secondary-900/50 py-3 px-4 rounded-lg text-white hover:bg-secondary-900 transition-colors">
                Cambiar contraseña
              </button>
            </div>
          </div>
        </form>
        <div className="flex flex-col md:flex-row gap-y-4 items-center justify-between gap-4 border-dashed border-2 border-blue-500 bg-blue-500/10 p-4 mt-8 rounded-lg">
          <div className="flex items-center justify-center">
            <RiShieldCheckLine className="text-blue-500 text-4xl" />
          </div>
          <div className="flex flex-col gap-2">
            <h5 className="text-gray-100 text-lg">Asegura tu cuenta</h5>
            <p className="text-gray-500 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              est, iste recusandae quam eveniet suscipit ipsa maiores laudantium
              accusantium, perspiciatis labore sapiente inventore voluptatibus
              iure dolore architecto! Totam, sapiente incidunt.
            </p>
          </div>
          <div className="flex ">
            <button className="w-full md:w-auto text-white rounded-lg bg-blue-500/80 hover:bg-blue-500 transition-colors px-4 py-2">
              Activar
            </button>
          </div>
        </div>
      </div>
      <div className="bg-secondary-100 p-8 rounded-xl mb-8">
        <h1 className="texr-xl text-gray-100">Conecta tus cuentas</h1>
        <hr className="my-8 border-gray-500/30" />
        <div className="flex flex-col md:flex-row items-center justify-start gap-4 border-dashed border-2 border-orange-500 bg-orange-500/10 p-4 my-8  rounded-lg">
          <div className="flex items-center justify-center">
            <RiShieldCheckLine className="text-orange-500 text-4xl" />
          </div>
          <div className="flex">
            <p className="text-gray-500 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              est, iste recusandae{" "}
              <Link
                to="/"
                className="text-orange-500 hover:text-orange-700 transition-colors"
              >
                learn more
              </Link>
            </p>
          </div>
        </div>
        <form action="">
          <div className="flex items-center justify-between">
            <div className="flex justify-start gap-4">
              <div className="">
                <FaGoogle className="text-5xl p-0"/>
              </div>
              <div>
                <h5 className="text-gray-100 text-md font-bold">Google</h5>
                <p className="text-gray-500 text-sm">
                  Plan property your workflow
                </p>
              </div>
            </div>
            <div>
              <Switch
                checked={enabledGoogle}
                onChange={setEnabledGoogle}
                className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-400 transition data-[checked]:bg-blue-500"
              >
                <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
              </Switch>
            </div>
          </div>
          <hr className="my-8 border-gray-500/30" />
          <div className="flex items-center justify-between">
            <div className="flex justify-start gap-4">
              <div className="">
                <RiGithubFill className="text-5xl p-0"/>
              </div>
              <div>
                <h5 className="text-gray-100 text-md font-bold">GitHub</h5>
                <p className="text-gray-500 text-sm">
                  Keep eye on your Repositories
                </p>
              </div>
            </div>
            <div>
              <Switch
                checked={enabledFaceBook}
                onChange={setEnabledFaceBook}
                className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-400 transition data-[checked]:bg-blue-500"
              >
                <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
              </Switch>
            </div>
          </div>
          <hr className="my-8 border-gray-500/30" />
          <div className="flex items-center justify-between">
            <div className="flex justify-start gap-4">
              <div className="">
                <FaFacebook className="text-5xl p-0"/>
              </div>
              <div>
                <h5 className="text-gray-100 text-md font-bold">FaceBook</h5>
                <p className="text-gray-500 text-sm">
                  Keep eye on your Repositories
                </p>
              </div>
            </div>
            <div>
              <Switch
                checked={enabledGitHub}
                onChange={setEnabledGitHub}
                className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-400 transition data-[checked]:bg-blue-500"
              >
                <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
              </Switch>
            </div>
          </div>
        </form>
      </div>
      <div className="bg-secondary-100 p-8 rounded-xl mb-8">
        <h1 className="texr-xl text-gray-100">Desactivar cuenta</h1>
        <hr className="my-8 border-gray-500/30" />
        <div className="flex flex-col md:flex-row items-center justify-start gap-4 border-dashed border-2 border-red-500 bg-red-500/10 p-4 my-8  rounded-lg">
          <div className="flex items-center justify-center">
            <IoMdAlert className="text-red-500 text-4xl" />
          </div>
          <div className="flex">
            <p className="text-gray-500 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              est, iste recusandae{" "}
              <Link
                to="/"
                className="text-red-500 hover:text-red-700 transition-colors"
              >
                learn more
              </Link>
            </p>
          </div>
        </div>
        <form action="">
          <div className="flex items-center justify-start gap-x-2">
            <input type="checkbox" name="" id="desactive" className="accent-primary w-4 h-4"/>
            <label htmlFor="desactive" className="text-gray-500">Confirmo desactivar esta cuenta</label>
          </div>
        </form>
        <hr className="my-8 border-gray-500/30" />
        <div className="flex items-center justify-end">
          <button className="bg-red-500 text-white hover:bg-red-600 transition-colors px-4 py-2 rounded-lg">Desactivar cuenta</button>
        </div>
      </div>
    </>
  );
};
