
function Hero() {
    return (
        <section className="text-gray-600 body-font bg-gray-100">
            <div className="container mx-auto flex px-5 py-14 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 flex justify-items-center items-center place-content-center">
                    <img className="object-cover object-center rounded" alt="hero" src="person-img.png" />
                </div>
                <div className="lg:flex-grow md:w-1/2 pr-4 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-2 font-medium text-gray-900">Hello, <br/>
                      <span className="text-5xl ">I'm <b className="text-blue-500 hover:text-blue-600"> Vimal Sahu</b></span>
                    </h1>
                    <h3 className="mb-2 font-medium text-gray-700">Full-Stack Developer</h3>
                    <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.
                   <br/>Line 39:11:  The href attribute is required for an anchor to be keyboard accessible. Provide a valid, navigable address as the href value. If you cannot provide an href </p>
                    <div className="flex justify-center">
                        <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Hire Me</button>
                        <button className="ml-4 inline-flex text-gray-700  border-2 border-gray-700 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Download CV</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero