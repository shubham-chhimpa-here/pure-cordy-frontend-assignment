export default function Articles() {
    return <>
        <section className="py-6 sm:py-12  text-gray-700">
            <div className="container p-6 mx-auto space-y-8 text-center">
                <div className="space-y-2 text-center max-w-3xl m-auto">
                    <h2 className="text-4xl font-bold">Caring is the new marketing</h2>
                    <p className="font-serif text-md text-gray-600">The Nextcent blog is the best place to read about the lastest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.</p>
                </div>
                <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
                    <article className="flex flex-col bg-gray-50">
                        <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                            <img alt="" className="object-cover w-full h-52 bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?1" />
                        </a>
                        <div className="flex flex-col gap-4 flex-1 p-6">
                         
                           
                            <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Creating Streamlined Safeguarding Processess with OneRen</h3>
                            <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline text-green-600">Readmore</a>
                        </div>
                    </article>
                    <article className="flex flex-col bg-gray-50">
                        <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                            <img alt="" className="object-cover w-full h-52 bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?2" />
                        </a>
                        <div className="flex flex-col gap-4 flex-1 p-6">
                         
                           
                            <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">What are your safeguarding responsibilites and how can you manage them?</h3>
                            <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline text-green-600">Readmore</a>
                        </div>
                    </article>
                    <article className="flex flex-col bg-gray-50">
                        <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                            <img alt="" className="object-cover w-full h-52 bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?3" />
                        </a>
                        <div className="flex flex-col gap-4 flex-1 p-6">
                         
                           
                         <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Revamping the Membership Model with Triathlon Australia</h3>
                         <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline text-green-600">Readmore</a>
                     </div>
                    </article>
                  
                </div>
            </div>
        </section>
    </>
}