import { useState, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { FormInput } from "./FormInput"
import { LockClosedIcon } from "@heroicons/react/24/solid"
import AuthService from "../services/Auth"

export function SecretQuestionMFA() {
  const [answer, setAnswer] = useState("")
  const [error, setError] = useState("")
  const [secretQuestion, setSecretQuestion] = useState("")
  const [userId, setUserId] = useState(null)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const userData = location.state?.userData
    if (userData && userData.question && userData.status === "WAITING_FOR_SECURITY_QUESTION") {
      setSecretQuestion(userData.question)
      setUserId(userData.userId)
    } else {
      // Redirect to login if no valid data is present
      navigate("/login")
    }
  }, [location, navigate])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    if (!answer.trim()) {
      setError("La respuesta es obligatoria")
      return
    }

    // Validación contra inyecciones
    const sqlPattern = /(\b(SELECT|INSERT|UPDATE|DELETE|FROM|WHERE|DROP|TABLE|ALTER)\b)|('|"|;|--|\/\*|\*\/|@@|@)/i
    const scriptPattern = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi

    if (sqlPattern.test(answer) || scriptPattern.test(answer)) {
      setError("Entrada no válida. Por favor, evite caracteres especiales o palabras clave.")
      return
    }

    try {
      const response = await AuthService.validateSecurityAnswer({
        userId: userId,
        securityAnswer: answer,
      })

      if (response.data.token) {
        // Security answer validated successfully
        const profile = await AuthService.getProfile()
        const dashboardRoutes = {
          Guest: "/error/forbidden",
          Leader: "/dashboard/leader",
          Collaborator: "/dashboard/collaborator",
          Moderator: "/dashboard/moderator",
          Admin: "/dashboard/admin",
        }
        navigate(dashboardRoutes[profile.data.role] || "/error/forbidden")
      }
    } catch (error) {
      if (error.response) {
        switch (error.response.data.message) {
          case "INCORRECT_SECURITY_ANSWER":
            setError("Respuesta de seguridad incorrecta. Por favor, inténtelo de nuevo.")
            break
          case "USER_NOT_FOUND":
            setError("Usuario no encontrado. Por favor, vuelva a iniciar sesión.")
            navigate("/login")
            break
          default:
            setError("Ocurrió un error inesperado. Por favor, inténtelo de nuevo más tarde.")
        }
      } else {
        setError("Ocurrió un error al verificar la respuesta. Por favor, inténtelo de nuevo.")
      }
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#D9D0C1]/30">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg overflow-hidden">
        <div className="bg-[#40251B] p-4 flex items-center justify-center">
          <LockClosedIcon className="h-6 w-6 text-white mr-2" />
          <h2 className="text-xl font-bold text-white">Verificación de Seguridad</h2>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="text-center mb-4">
            <p className="text-sm text-gray-600">Por favor, responda a su pregunta de seguridad:</p>
            <p className="text-lg font-medium text-[#40251B] mt-2">{secretQuestion}</p>
          </div>
          <FormInput
            label="Su respuesta"
            id="security_answer"
            name="security_answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            error={error}
          />
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#40251B] hover:bg-[#40251B]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#40251B]"
            >
              Verificar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

