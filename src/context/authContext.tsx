"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { AuthContextType, User } from "@/components/types/types";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const fetchUserDetails = async (userId: any, token: any) => {
    axios
      .get(`/api/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.status == 200) {
          setUser(response.data);
        } else {
          throw new Error("Failed to fetch user details");
        }
      })
      .catch((error) => {
        console.error("Error fetching user details:", error);
        logout();
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUserId = localStorage.getItem("userId");

    if (storedToken) {
      setToken(storedToken);
      fetchUserDetails(storedUserId, storedToken);
    } else {
      setIsLoading(false);
    }
  }, []);

  const login = async (username: string, password: string) => {
    setIsLoading(true);
    try {
      const response = await axios.post("/login", { username, password });
      if (response.status === 200 && response.data.token) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userId", response.data.id);
        setToken(response.data.token);
        setUser(response.data.id);

        router.push(`/dashboard/${response.data.id}`);
      } else {
        console.error(`Unexpected status code: ${response.status}`);
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Login failed:", error.response?.data || error.message);
      } else {
        console.error("Login failed:", error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
    router.push("/");
  };

  const value = {
    user,
    token,
    isLoading,
    login,
    logout,
    fetchUserDetails,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
