
export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen gap-12 py-8 ">

            <div className="flex flex-col items-center gap-4">
                <h1 className="text-[70px] text-center font-bold">
                     ERROR 404 - NOT FOUND
                </h1>
                <h2 className="text-[40px] font-medium text-center">
                    ¡Oops, olvidamos tomar en cuenta esta funcionalidad! Manda tu queja al buzón.
                </h2>
                <p className="text-xl text-center ">
                    Intentas acceder a un lugar que nadie conoce, regresa al incio de sesión.
                </p>
            </div>
        </div>
    )
}