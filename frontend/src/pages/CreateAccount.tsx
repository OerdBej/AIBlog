import { useState } from "react";
import { useNavigate } from "react-router";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";

export default function CreateAccount() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  function validateForm() {
    if (!email || !password || !confirmPassword) {
      setError("All fields are required.");
      return false;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return false;
    }
    setError("");
    return true;
  }

  async function createAccount() {
    setIsSubmitting(true);
    try {
      // user authenticate and to go stories
      await createUserWithEmailAndPassword(getAuth(app), email, password);
      navigate("/stories");
    } catch (err) {
      console.error(err);
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Account creation failed.");
      }
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (validateForm()) {
      await createAccount();
    }
  }

  function handleNavigateLogin(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();
    navigate("/login");
  }

  return (
    <form
      className="flex flex-col gap-6 self-center w-full text-white max-w-md my-12"
      onSubmit={handleSubmit}
    >
      <input
        className="bg-transparent border-b-2 border-[#4FD1C5] focus:border-[#FF6500] outline-none p-2 text-white placeholder-gray-400 transition-colors duration-200"
        type="email"
        id="email"
        placeholder="Email"
        value={email}
        autoComplete="username"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="bg-transparent border-b-2 border-[#4FD1C5] focus:border-[#FF6500] outline-none p-2 text-white placeholder-gray-400 transition-colors duration-200"
        type="password"
        id="password"
        placeholder="Password"
        value={password}
        autoComplete="new-password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        className="bg-transparent border-b-2 border-[#4FD1C5] focus:border-[#FF6500] outline-none p-2 text-white placeholder-gray-400 transition-colors duration-200"
        type="password"
        id="confirmPassword"
        placeholder="Confirm Password"
        value={confirmPassword}
        autoComplete="new-password"
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      {error && <div className="text-red-500 text-sm">{error}</div>}
      <button
        className={`px-4 py-2 rounded font-bold transition-colors duration-200 ${
          isSubmitting
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-[#FF6500] hover:bg-[#FF884D] active:bg-[#bc9c41] text-white"
        }`}
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Creating..." : "Create Account"}
      </button>
      <div className="text-center mt-4">
        <a
          href="/login"
          className="text-sm text-gray-500 hover:text-gray-300 transition-colors duration-200 cursor-pointer"
          onClick={handleNavigateLogin}
        >
          Have an account? Sign in here
        </a>
      </div>
    </form>
  );
}
