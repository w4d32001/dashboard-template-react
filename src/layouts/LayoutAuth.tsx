import { Outlet } from "react-router-dom"

export const LayoutAuth = () => {
  return (
    <div className="min-h-screen flex justify-center items-center p-4">
        <Outlet></Outlet>
    </div>
  )
}
