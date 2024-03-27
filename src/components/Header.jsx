/* rafc para crear un coponente base */
import logo from "../assets/images/logo.svg"
import { Navbar } from "./Navbar"

export const Header = () => {
  return (
    <header className="flex justify-between items-center mb-8">
      <img src={logo} alt="Logo" />

      <Navbar />

    </header>
  )
}


