import { useEffect, useState } from "react"

export default function HeroComponent() {
    const [state, setSate] = useState(0)


    return <>
        <section className="bg-gray-100 text-gray-800 relative">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-2xl font-bold leading-none sm:text-6xl">Ac mattis
                        <span className="text-green-600">senectus</span>erat pharetra
                    </h1>
                    <p className="mt-6 mb-8 text-lg sm:mb-12">Dictum aliquam porta in condimentum ac integer
                        <br className="hidden md:inline lg:hidden" />turpis pulvinar, est scelerisque ligula sem
                    </p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded text-gray-50 bg-green-600">Suspendisse</a>

                    </div>
                </div>
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img src="assets/svg/Business_SVG.svg" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                </div>
            </div>
            <div className="absolute bottom-4 left-[50%]  transform -translate-x-[50%] flex gap-4">

                <button onClick={() => setSate(() => 0)} className={` p-1  rounded-full ${state == 0 ? "bg-green-600" : "bg-gray-300"}`}></button>
                <button onClick={() => setSate(() => 1)} className={` p-1  rounded-full ${state == 1 ? "bg-green-600" : "bg-gray-300"}`}></button>
                <button onClick={() => setSate(() => 2)} className={` p-1  rounded-full ${state == 2 ? "bg-green-600" : "bg-gray-300"}`}></button>


            </div>
        </section>
    </>
}