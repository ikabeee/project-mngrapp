import { SecretQuestionMFA } from "./components/SecretQuestionMFA"

function App() {
  const handleMFASubmit = (answer) => {
    console.log("MFA answer submitted:", answer)
    // Aquí iría la lógica para verificar la respuesta
  }

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-1 overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-[#D9D0C1]/30">
          <SecretQuestionMFA secretQuestion="¿Cuál es el nombre de tu primera mascota?" onSubmit={handleMFASubmit} />
        </main>
      </div>
    </div>
  )
}

export default App

