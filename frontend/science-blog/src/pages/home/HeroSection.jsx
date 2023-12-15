import {Link} from "react-router-dom";

export const HeroSection = () => {

    return (
        <section>
            <div className="mt-20 md:mt-52 max-w-[1450px] mx-auto flex justify-between items-center lg:py-0 ">
                <div className="px-10 space-y-5 lg:py-6">
                    <h1 className="text-6xl text-[#DEDEDE] md:text-7xl max-w-xl font-serif w-11/12 sm:w-9/12">
          <span className="underline decoration-[#DEDEDE] decoration-4">
            Science Stream
          </span>{" "}
                        is a place to read, learn and explore
                    </h1>
                    <h2 className="w-9/12 text-[#89939E] font-normal">
                        It's easy and free to post your thinking on any topic and connect with
                        millions of readers.
                    </h2>
                    <button className="relative px-5 py-3 overflow-hidden font-medium text-[#89939E] bg-gray-100 border border-[#DEDEDE] rounded-lg shadow-inner group">
                        <Link to="/articles">
                            <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                            <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                            <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                            <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                            <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                            <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">Start reading</span>
                        </Link>
                    </button>
                </div>
                <div className="hidden lg:flex lg:w-64 h-32  lg:h-64 mr-4 border-2 border-[#DEDEDE] justify-center items-center">
                    <h1 className="text-[#DEDEDE] font-thin text-7xl md:text-5xl lg:text-6xl">SS</h1>
                </div>
            </div>
        </section>
    )
}