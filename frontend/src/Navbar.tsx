import { Link } from "react-router";

export default function NavBar() {
  const isLoggedIn = true;
  const user = "oerdbej@gmail.com";
  return (
    <nav className="px-4 py-8 bg-[#FF6500] 2xl:rounded-b w-full">
      <ul className="flex justify-between flex-wrap gap-x-8 gap-y-4 text-white font-bold sm:justify-center sm:gap-x-16 *:text-xl">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/stories">Stories</Link>
        </li>
        {isLoggedIn && (
          <li>
            User: <span className="text-red">👤 {user}</span>
          </li>
        )}
      </ul>
    </nav>
  );
}
