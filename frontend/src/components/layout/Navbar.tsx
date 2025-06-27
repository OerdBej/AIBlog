import { getAuth, signOut } from "firebase/auth";
import { Link, useNavigate } from "react-router";
import useUserAccount from "../../hooks/useUserAccount";

export default function NavBar() {
  const { user, isLoading } = useUserAccount();
  const navigate = useNavigate();

  return (
    <nav className="px-4 py-8 bg-[#FF6500] w-full">
      <ul className="flex justify-between flex-wrap gap-x-8 gap-y-4 text-white font-bold sm:justify-center sm:gap-x-16 *:text-xl">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/stories">Stories</Link>
        </li>
        <li>
          {isLoading ? (
            <span>Loading...</span>
          ) : user ? (
            <span>
              User:{" "}
              <span className="text-red" aria-label="User email">
                👤 {user.email}
              </span>
            </span>
          ) : null}
        </li>
        <li>
          {isLoading ? (
            <span>...</span>
          ) : user ? (
            <button onClick={() => signOut(getAuth())}>Log out</button>
          ) : (
            <button onClick={() => navigate("/login")}>Log in</button>
          )}
        </li>
      </ul>
    </nav>
  );
}
