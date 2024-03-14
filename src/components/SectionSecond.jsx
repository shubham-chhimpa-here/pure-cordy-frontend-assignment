import img from '../assets/img4.png'
export default function SectionSecond() {

    return <>
        <section className=" text-gray-700 mb-4 ">
            <div className="justify-center flex flex-col mx-auto lg:flex-row  gap-4">
                <div className="w-full lg:w-1/3" >
                    <img src={img} alt="sectionimg" />
                </div>
                <div className="flex flex-col p-6  lg:p-10 max-w-2xl ">
                    
                    <h2 className="text-4xl font-semibold leading-none">How to design your site footer like we did</h2>
                    <p className="mt-4 mb-8  text-sm">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores inventore veniam aperiam pariatur non accusantium totam voluptatum assumenda, enim porro quas vitae at earum. Quos sunt repudiandae iusto animi necessitatibus?
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores inventore veniam aperiam pariatur non accusantium totam voluptatum assumenda, enim porro quas vitae at earum. Quos sunt repudiandae iusto animi necessitatibus?
                    </p>
                    <button className="self-start px-10 py-3 text-lg font-medium rounded bg-green-600 text-gray-50">Learn More</button>
                </div>
            </div>
        </section>
    </>
}