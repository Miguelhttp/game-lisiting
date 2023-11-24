// import { useState } from "react";
import logo from "../../assets/images/logo.png";
import { HiOutlineMagnifyingGlass, HiMoon, HiSun } from "react-icons/hi2";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useEffect } from "react";

export default function Header() {
  // const [toggle, setToggle] = useState(true)
  const {theme, setTheme}  = useContext(ThemeContext)

  useEffect(() => {
    console.log("Theme", theme)
  }, [])

  return (
    <div className="flex items-center p-3">
      <img src={logo} width={60} height={60} />
      <div className="flex bg-slate-200 p-2 w-full items-center mx-5 rounded-full">
        <HiOutlineMagnifyingGlass className="text-black" />
        <input
          type="text"
          placeholder="Search Games"
          className="px-2 bg-transparent outline-none"
        />
      </div>
      <div>
        {theme === "light" ? (
          <HiMoon
            className="text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer"
            onClick={() => {setTheme("dark"); localStorage.setItem('theme', 'dark')}}
          />
        ) : (
          <HiSun
            className="text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer"
            onClick={() => {setTheme("light"); localStorage.setItem("theme", "light");}}
          />
        )}
      </div>
    </div>
  );
}
