
export default function Reviews({ data }) {
    const { imgSrc } = data
    return <>
        <div className="bg-gray-100 text-gray-700">
            <div className="flex gap-4 justify-center p-8 bg-gray-50">
                <div className="bg-no-repeat bg-cover border justify-center flex align-center ">

                    <img src={imgSrc} alt="" /></div>
                <div className="flex flex-col gap-2 p-6  lg:p-10 max-w-4xl">

                    <p className="flex-1 pt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, reprehenderit adipisci tempore voluptas laborum quod.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit cum assumenda iure laudantium obcaecati animi sit ullam tempore dolores impedit ducimus architecto quae nam culpa, commodi saepe repudiandae nemo harum!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit cum assumenda iure laudantium obcaecati animi sit ullam tempore dolores impedit ducimus architecto quae nam culpa, commodi saepe repudiandae nemo harum!
                    </p>
                    <h1 className="text-green-600 font-semibold text-xl">Tim Smith</h1>
                    <p className="text-gray-500">British Dragon Boat Racing Association</p>
                    <a rel="noopener noreferrer" href="#" className="inline-flex items-center pt-2 pb-6 space-x-2 text-sm text-green-600">
                        <span>Meet all customers</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                        </svg>
                    </a>
                </div>

            </div>
        </div>
    </>
}