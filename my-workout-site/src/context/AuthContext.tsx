import React, { createContext, useContext, useEffect, useState } from "react";
import type { User } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase/firebaseConfig";

interface AuthContextType {
  user: User | null;
  role: "admin" | "writer" | null;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  role: null,
  loading: true,
});

export const AuthProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  // Temporary bypass auth in dev mode
  if (true) {
    return (
      <AuthContext.Provider value={{ user: null, role: null, loading: false }}>
        {children}
      </AuthContext.Provider>
    );
  }

  const [user, setUser] = useState<User | null>(null);
  const [role, setRole] = useState<"admin" | "writer" | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setUser(firebaseUser);
      if (firebaseUser) {
        const token = await firebaseUser.getIdTokenResult();
        setRole((token.claims.role as "admin" | "writer") || null);
      } else {
        setRole(null);
      }
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ user, role, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
