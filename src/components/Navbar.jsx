import {CircleUser, House, SquarePlus} from "lucide-react";
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
      <div className="mt-auto bg-[#f0f0e0] flex justify-around py-4 border-t border-gray-300">
          <Link to={"/"}>  <button className="text-2xl"><House /></button></Link>
          <Link to={"/create-new-product"}><button className="text-2xl"><SquarePlus /></button></Link>
          <button className="text-2xl"><CircleUser /></button>
      </div>
  )
}

export default Navbar;