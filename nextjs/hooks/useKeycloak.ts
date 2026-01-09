import keycloak from "@/lib/keycloak";
import { useEffect, useState } from "react";

export const useKeycloak = () => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const checkAuth = async () => {
        try {
            let isAuth = await keycloak.init({ onLoad: "login-required" });

            if (!isAuth) {
                throw new Error("Not Authenticated");
            }

            console.log("Authenticated via Keycloak");
            setIsAuthenticated(true);
        } catch (err: unknown) {
            console.error("Error: ", err instanceof Error ? err.message : err);
            setIsAuthenticated(false);
        } finally {
            setIsLoading(false);
        }
    }

    const handleLogout = async () => {
        keycloak.logout({ redirectUri: window.location.origin });
    }

    useEffect(() => {
        checkAuth();
    }, []);

    return { isAuthenticated, isLoading, checkAuth, handleLogout };
}