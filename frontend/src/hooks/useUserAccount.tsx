import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import type { User } from "firebase/auth";

export default function useUserAccount() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), (user) => {
      setUser(user);
      setIsLoading(false);
    });
    return unsubscribe;
  }, []);

  return { user, isLoading };
}
