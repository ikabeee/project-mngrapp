import { Form } from "@heroui/form";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { useState } from "react";
import AuthService from "../services/Auth";
import { useNavigate } from "react-router";
import { Alert } from "@heroui/alert";
import { Spinner } from "@heroui/spinner";
export default function Login() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [isVisible] = useState(true);
    const title = "¡Oops, ocurrió un error! Inténtalo de nuevo";
    const errorMessages = {
        "UNEXPECTED_ERROR": "¡No sabemos lo que sucede!",
        "USER_NOT_FOUND": "Usuario no encontrado",
        "INCORRECT_PASSWORD": "Contraseña incorrecta", 
        "EMAIL_OR_PAYROLLNUMBER_MISSING": "Por favor, introduce tu correo electrónico"
    }
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        try {
            const formData = Object.fromEntries(new FormData(e.currentTarget));
            await AuthService.login(formData);
            const profile = await AuthService.getProfile();
            const dashboardRoutes = {
                Guest: '/error/forbidden',
                Leader: '/dashboard/leader',
                Collaborator: '/dashboard/collaborator',
                Moderator: 'dashboard/moderator',
                Admin: '/dashboard/admin',
            }
            navigate(dashboardRoutes[profile.role] || '/error/forbidden' );
        } catch (e) {
            const errorCode = e.response?.data?.message || 'NETWORK_ERROR';
            setError(errorMessages[errorCode] || 'Ocurrió un error inesperado');
        } finally {
            setLoading(false)
        }

    }


    return (
        <div className="min-h-screen bg-[#D9D0C1] flex items-center justify-center p-4">
            <div className="bg-white rounded-lg h-[32rem] w-[60rem] shadow-lg flex">
                <div className="bg-white w-1/2 flex flex-col items-center justify-center p-4 rounded-lg border-gray-200">
                    <h1 className="font-sans font-bold text-start text-[25px] mb-9 self-start ml-6">Inicia sesión</h1>
                    <Form
                        className="w-[90%] max-w-2xl flex flex-col gap-6 items-center justify-center"
                        validationBehavior="native" onSubmit={handleSubmit}
                    >
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
                                ):null}
                            </div>
                        )}
                        <Input
                            isRequired
                            type="email"
                            errorMessage="Por favor ingresa tu email de empleado"
                            className="shadow-md rounded-md"
                            label="Correo electrónico"
                            labelPlacement="inside"
                            name="email"
                            placeholder="example@utcancun.edu.mx"
                        />
                        <Input
                            isRequired
                            errorMessage="Por favor ingresa tu contraseña"
                            className="shadow-md rounded-md"
                            label="Contraseña"
                            labelPlacement="inside"
                            name="password"
                            type="password"
                            placeholder="******"
                        />
                        <Button type="submit" variant="flat" className="p-4 w-full bg-[#40251B] text-white font-bold">
                        {loading ? (<Spinner color="warning"/>) : 'Inicia sesión'}
                        </Button>
                    </Form>
                </div>
                <div className="bg-[#40251B] w-1/2 flex flex-col items-center justify-center p-4 rounded-r-lg">
                    <h1 className="font-sans font-bold text-white text-[35px]">Bienvenido</h1>
                </div>
            </div>
        </div>
    )
}