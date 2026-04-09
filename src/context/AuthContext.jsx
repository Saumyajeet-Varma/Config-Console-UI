import { createContext, useContext, useEffect, useState } from "react";
import axios from "../config/axios";

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const initAuth = async () => {

            try {
                const token = localStorage.getItem("accessToken");

                if (!token) {
                    setLoading(false);
                    return;
                }

                const res = await axios.get("/auth/me", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                setUser(res.data);
            }
            catch (err) {
                console.log(err);
                logout();
            }
            finally {
                setLoading(false);
            }
        }

        initAuth()

    }, [])

    const login = (data) => {

        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
        localStorage.setItem("user", JSON.stringify(data.user));

        setUser(data.user);
    };

    const logout = () => {

        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("user");

        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);