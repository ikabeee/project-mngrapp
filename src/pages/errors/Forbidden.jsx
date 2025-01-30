
export default function Forbidden() {
    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen gap-12 py-8 ">

            <div className="flex flex-col items-center gap-4">
                <h1 className="text-[70px] text-center font-bold">
                     ERROR 403 - FORBIDDEN
                </h1>
                <h2 className="text-[40px] font-medium text-center">
                    ¡Alto ahí campeón!
                </h2>
                <p className="text-xl text-center ">
                    Intentas acceder a un lugar muy secreto. Por favor, apaga la computadora y duerme un poco.
                </p>
            </div>
        </div>
    )
}