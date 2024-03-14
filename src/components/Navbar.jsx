import { useState } from "react"

export default function Navbar() {

    const [state, setState] = useState(false)
    return <>
    <header className="p-4  text-gray-800">
	<div className="container flex justify-between h-16 mx-auto">
		<a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
			<h1 className="font-bold text-4xl">P<span className="text-green-600">cl</span></h1>
		</a>
		<ul className="items-stretch hidden space-x-3 lg:flex">
			<li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent  border-green-600">Home</a>
			</li>
			<li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Features</a>
			</li>
			<li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Community</a>
			</li>
			<li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Blog</a>
			</li>
			<li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Pricing</a>
			</li>
			<li className="flex">
            <button className="self-center px-8 py-3 font-semibold rounded bg-green-600 text-gray-50">Register Now</button>
			</li>
		</ul>
		<div className="lg:hidden relative">

		<button className="p-4" onClick={() => setState(state => !state)}>
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-800">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</button>

        <div className={`${state && "hidden"} absolute rounded shadow top-full right-0`}>

        <ul className="flex flex-col gap-2 p-4 rounded bg-white" onClick={() => setState(state => !state)}>
			
			<li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Home</a>
			</li>
			<li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Features</a>
			</li>
			<li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Community</a>
			</li>
			<li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Blog</a>
			</li>
			<li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Pricing</a>
			</li>
            <hr />
			<li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Register Now</a>
			</li>
		
		</ul>
        </div>
        </div>
	</div>
</header>
    </>
}