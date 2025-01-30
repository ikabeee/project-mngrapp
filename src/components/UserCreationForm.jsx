import { useState } from "react";
import { UserPlusIcon } from "@heroicons/react/24/solid";
import { FormInput } from "./FormInput";
import { FormSelect } from "./FormSelect";

const roles = ["Invitado", "Usuario", "Administrador"];

// Función para validar contra inyecciones
const validateAgainstInjection = (value) => {
  const sqlPattern =
    /(\b(SELECT|INSERT|UPDATE|DELETE|FROM|WHERE|DROP|TABLE|ALTER)\b)|('|"|;|--|\/\*|\*\/|@@|@)/i;
  const scriptPattern = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;

  if (sqlPattern.test(value) || scriptPattern.test(value)) {
    return "Entrada no válida. Por favor, evite caracteres especiales o palabras clave.";
  }
  return null;
};

export function UserCreationForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    payrollNumber: "",
    security_question: "",
    security_answer: "",
    role: "Invitado",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Validación contra inyecciones para todos los campos
    for (const [key, value] of Object.entries(formData)) {
      const injectionError = validateAgainstInjection(value);
      if (injectionError) {
        newErrors[key] = injectionError;
      }
    }

    if (!formData.firstName.trim()) {
      newErrors.firstName = "El nombre es obligatorio";
    } else if (formData.firstName.length < 2) {
      newErrors.firstName = "El nombre debe tener al menos 2 caracteres";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "El apellido es obligatorio";
    } else if (formData.lastName.length < 2) {
      newErrors.lastName = "El apellido debe tener al menos 2 caracteres";
    }

    if (!formData.username.trim()) {
      newErrors.username = "El nombre de usuario es obligatorio";
    } else if (formData.username.length < 3) {
      newErrors.username =
        "El nombre de usuario debe tener al menos 3 caracteres";
    } else if (!/^[a-zA-Z0-9_]+$/.test(formData.username)) {
      newErrors.username =
        "El nombre de usuario solo puede contener letras, números y guiones bajos";
    }

    if (!formData.email.trim()) {
      newErrors.email = "El correo electrónico es obligatorio";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Formato de correo electrónico inválido";
    }

    if (!formData.password.trim()) {
      newErrors.password = "La contraseña es obligatoria";
    } else if (formData.password.length < 8) {
      newErrors.password = "La contraseña debe tener al menos 8 caracteres";
    } else if (
      !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/.test(
        formData.password
      )
    ) {
      newErrors.password =
        "La contraseña debe contener al menos una letra mayúscula, una minúscula, un número y un carácter especial";
    }

    if (formData.payrollNumber && !/^\d+$/.test(formData.payrollNumber)) {
      newErrors.payrollNumber =
        "El número de nómina debe contener solo dígitos";
    }

    if (!formData.security_question.trim()) {
      newErrors.security_question = "La pregunta de seguridad es obligatoria";
    } else if (formData.security_question.length < 10) {
      newErrors.security_question =
        "La pregunta de seguridad debe tener al menos 10 caracteres";
    }

    if (!formData.security_answer.trim()) {
      newErrors.security_answer = "La respuesta de seguridad es obligatoria";
    } else if (formData.security_answer.length < 3) {
      newErrors.security_answer =
        "La respuesta de seguridad debe tener al menos 3 caracteres";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setFormData({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
        payrollNumber: "",
        security_question: "",
        security_answer: "",
        role: "Invitado",
      });
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="bg-[#40251B] p-4 flex items-center">
        <UserPlusIcon className="h-6 w-6 text-white mr-2" />
        <h2 className="text-xl font-bold text-white">Crear Nuevo Usuario</h2>
      </div>
      <form onSubmit={handleSubmit} className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormInput
            label="Nombre"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            error={errors.firstName}
          />
          <FormInput
            label="Apellido"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            error={errors.lastName}
          />
        </div>
        <FormInput
          label="Nombre de Usuario"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          error={errors.username}
        />
        <FormInput
          label="Correo Electrónico"
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />
        <FormInput
          label="Contraseña"
          id="password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
        />
        <FormInput
          label="Número de Nómina (Opcional)"
          id="payrollNumber"
          name="payrollNumber"
          value={formData.payrollNumber}
          onChange={handleChange}
          error={errors.payrollNumber}
        />
        <FormInput
          label="Pregunta de Seguridad"
          id="security_question"
          name="security_question"
          value={formData.security_question}
          onChange={handleChange}
          error={errors.security_question}
        />
        <FormInput
          label="Respuesta de Seguridad"
          id="security_answer"
          name="security_answer"
          value={formData.security_answer}
          onChange={handleChange}
          error={errors.security_answer}
        />
        <FormSelect
          label="Rol"
          id="role"
          name="role"
          value={formData.role}
          onChange={handleChange}
          options={roles}
        />
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#40251B] hover:bg-[#40251B]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#40251B]"
          >
            Crear Usuario
          </button>
        </div>
      </form>
    </div>
  );
}
