import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }
    setError("");
    setIsSubmitting(true);
    // Simulate login logic
    setTimeout(() => setIsSubmitting(false), 1000);
  }

  return (
    <form
      className="flex flex-col gap-8 self-center w-full text-white lg:max-w-3xl my-8"
      onSubmit={handleSubmit}
    >
      <label htmlFor="email" className="mb-2">
        Email
        <input
          className="p-2 border-b-4 border-[#4FD1C5] block w-full mt-1 text-black rounded focus:outline-none focus:border-[#FF6500] focus:bg-orange-50 transition-colors duration-200"
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label htmlFor="password" className="mb-2">
        Password
        <input
          className="p-2 border-b-4 border-[#4FD1C5] block w-full mt-1 text-black rounded focus:outline-none focus:border-[#FF6500] focus:bg-orange-50 transition-colors duration-200"
          type="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      {error && <div className="text-red-500 mb-2">{error}</div>}
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
