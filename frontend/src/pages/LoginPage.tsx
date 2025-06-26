import { useState } from "react";
import { useNavigate } from "react-router";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase"; // import your firebase app

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }
    setError("");
    setIsSubmitting(true);
    try {
      await signInWithEmailAndPassword(getAuth(app), email, password);
      navigate("/stories");
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Login failed.");
      }
    } finally {
      setIsSubmitting(false);
    }
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
        autoComplete="current-password"
        onChange={(e) => setPassword(e.target.value)}
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
        {isSubmitting ? "Logging in..." : "Login"}
      </button>
    </form>
  );
}
