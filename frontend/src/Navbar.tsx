import { Link } from "react-router";

export default function NavBar() {
  return (
    <nav className="bg-[#F85525] px-4 py-8 w-full 2xl:rounded-b">
      <ul className="flex justify-between flex-wrap text-white font-bold sm:justify-center sm:gap-x-16 *:text-x1 gap-x-8 gap-y-4">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/stories">Stories</Link>
        </li>
      </ul>
    </nav>
  );
}
