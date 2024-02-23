"use client"
import { useState, useEffect } from "react";
import { IoIosHome, IoIosCube, IoMdInformationCircle, IoMdList, IoIosConstruct } from "react-icons/io";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import NavLink from "./NavLink ";
import { MdCastForEducation, MdMedicalServices, MdOutlineContactPhone } from "react-icons/md";
import { GiSkills } from "react-icons/gi";



const SubNavbar = () => {
    const Links = [
        {
            id: 1,
            path: "/",
            title: "Home",
            icon: <IoIosHome />,
        },
        {
            id: 2,
            path: "/about",
            title: "About ME",
            icon: <IoMdInformationCircle />,
        },
        {
            id: 3,
            path: "/skill",
            title: "Skill",
            icon: <GiSkills />,
        },
        {
            id: 4,
            path: "/summary",
            title: "Summary",
            icon: <MdCastForEducation />,
        },
        {
            id: 5,
            path: "/service",
            title: "Service",
            icon: <MdMedicalServices />,
        },
        {
            id: 6,
            path: "/contact",
            title: "Contact",
            icon: <MdOutlineContactPhone />,
        }
    ];



    const [open, setOpen] = useState(false);
    const controls = useAnimation();
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            const isScrollingDown = currentScrollPos > prevScrollPos;

            const threshold = 78;

            if (isScrollingDown && currentScrollPos > threshold) {
                controls.start({ opacity: 0, y: -50 });
            } else {
                controls.start({ opacity: 1, y: 0 });
            }

            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [prevScrollPos, controls]);

    const closeMenu = () => setOpen(false);


    return (
        <motion.nav
            className={`fixed top-0 left-0 w-full z-50 bg-[#149ECA] shadow-lg`}
            animate={controls}
            initial={{ opacity: 1, y: 0 }}
        >
            <div className=" container mx-auto py-3 flex flex-col md:flex-row justify-between items-center">
                <motion.div
                    className="flex items-center gap-14"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link
                        href="/"
                        className="font-bold  text-2xl flex items-center font-[Poppins] text-white"
                    >
                        <span className="text-3xl text-indigo-600 mr-2">
                            <ion-icon name="logo-ionic"></ion-icon>
                        </span>
                        JUNAYET | <span className=" text-gray-600 ml-1">SHIBLU</span>
                    </Link>
                    <div className="md:hidden ml-2">
                        <motion.div
                            onClick={() => setOpen(!open)}
                            className="text-3xl cursor-pointer transition-transform duration-300 transform"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            {open ? (
                                <FiX onClick={closeMenu} className="text-2xl text-white" />
                            ) : (
                                <FiMenu className="text-2xl text-white" />
                            )}
                        </motion.div>
                    </div>

                </motion.div>

                <ul
                    className={`md:flex md:items-center md:space-x-6 md:pb-0 pb-3 ${open ? "block" : "hidden md:block"
                        }`}
                >
                    {Links.map((link) => (
                        <motion.li
                            key={link.name}
                            className="md:my-0 my-2"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <NavLink href={link.path} icon={link.icon} title={link.title} />
                        </motion.li>
                    ))}
                </ul>
            </div>
        </motion.nav>
    );
};

export default SubNavbar;