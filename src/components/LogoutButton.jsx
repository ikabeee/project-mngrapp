import { useState } from "react";
import AuthService from "../services/Auth";
import { useNavigate } from "react-router";
import { Button } from "@heroui/button";
import { Spinner } from "@heroui/spinner";
import { Alert } from "@heroui/alert";

export default function LogoutButton() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isVisible] = useState(true);
    const navigate = useNavigate();
    const title = "¡Oops, ocurrió un error! Inténtalo de nuevo";

    const handleLogout = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            await AuthService.logout();
            navigate('/login');
            window.location.reload();
        } catch (e) {
            setError(e.response?.data?.message || "Error al cerrar sesión");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="relative">
            <Button
                type="button"
                onClick={handleLogout}
                className="w-full h-12 text-lg font-semibold bg-[#40251B] text-[#D9D0C1] 
             hover:bg-[#301a12] transition-all rounded-xl flex items-center justify-center"
                disabled={loading}
            >
                {loading ? <Spinner color="warning" /> : 'Cerrar sesión'}
            </Button>


            {error && (
                <div className="flex flex-col w-full">
                    {isVisible ? (
                        <Alert
                            color="danger"
                            description={error}
                            isVisible={isVisible}
                            title={title}
                            variant="faded"
                        />
                    ) : null}
                </div>
            )}
        </div>
    );
}