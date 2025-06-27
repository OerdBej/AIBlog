import { Outlet } from "react-router";
import NavBar from "./Navbar";

export default function Layout() {
  return (
    <>
      <NavBar />
      <main className="flex flex-col gap-8 py-8 my-4 px-12 lg:px-0">
        <Outlet />
      </main>
    </>
  );
}
