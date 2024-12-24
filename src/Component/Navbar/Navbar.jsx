import { useEffect, useState } from "react";
import { FaLocationArrow } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { TbWorld } from "react-icons/tb";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`fixed top-0 left-0 w-full   z-40 transition-colors duration-300 ${isScrolled
            ? "bg-[#F5F4F2] shadow-xl"
            : "bg-[#F5F4F2] border-b"
            }`}>

            <div className="flex justify-between p-4">

                <div className="flex gap-5 ml-4">
                    {/* Logo */}
                    <h1 className="font-bold text-3xl">Яндекс Еда</h1>

                    {/* Search Input */}
                    <div className="relative w-64 transition-all">
                        <input
                            type="text"
                            placeholder="Найти в ресторане"
                            id="searchInput"
                            className="w-full h-full py-2 pl-10 pr-4 text-gray-700 bg-white border-2 rounded-2xl outline-none transition-all border-gray-300"
                        />
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3">

                            <IoIosSearch className="w-6 h-7 font-bold text-gray-600 transition-all" />
                        </div>
                    </div>

                    <div className="flex justify-center items-center gap-2 bg-[#FCE000] border-2 rounded-2xl w-56">
                        <FaLocationArrow />
                        <p className="font-semibold">Enter delivery address</p>
                    </div>
                </div>

                <div className="flex justify-center items-center gap-6">

                    <div className="  flex-row items-center justify-center ">
                        <TbWorld className="w-6 h-7 font-bold text-gray-700 transition-all ml-2" />
                        <h1 className="font-semibold">English</h1>
                    </div>


                    <div className="border p-3 w-24 bg-[#E8E8E6] rounded-xl">
                        <h1 className="text-center font-semibold">Login</h1>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Navbar;