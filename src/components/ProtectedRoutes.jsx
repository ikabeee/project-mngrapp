/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router";
import AuthService from "../services/Auth";
import { Spinner } from "@heroui/spinner";
export default function ProtectedRoutes({allowedRoles}) {
    const [isLoading, setIsLoading] = useState(true);
    const [userRole, setUserRole] = useState(null);
    useEffect(() => {
        const verifyAuth = async () => {
            try {
                const response = await AuthService.getProfile()
                setUserRole(response.data.role);
            } catch (error) {
                setUserRole(null)

            } finally {
                setIsLoading(false);
            }
        };
        verifyAuth();
    }, []);
    if (isLoading) {
        return <Spinner color="warning" label="Cargando..." />;
    }
    if (!userRole) {
        return <Navigate to='/login' replace />
    }
    if (!allowedRoles.includes(userRole)) {
        return <Navigate to='/error/forbidden' replace />
    }
    return <Outlet />
}