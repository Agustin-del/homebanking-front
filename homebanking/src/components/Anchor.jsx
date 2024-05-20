import { Button } from "flowbite-react"
import { NavLink } from "react-router-dom"
import { IoIosPeople } from "react-icons/io";
import { FaCreditCard } from "react-icons/fa";
import { GrTransaction } from "react-icons/gr";
import { TbZoomMoney } from "react-icons/tb";
import { RiLogoutBoxLine } from "react-icons/ri";
import { useEffect, useState } from "react";

function Anchor ({text}) {
    
    let [icon, setIcon] = useState('')

    useEffect(() => {
        switch (text) {
            case "Accounts":
                setIcon (<IoIosPeople className="size-12 text-blue-500"/>)
                break
            case "Cards":
                setIcon (<FaCreditCard className="size-10 text-blue-500"/>)
                break
            case "Transaction":
                setIcon (<GrTransaction className="size-10 text-blue-500"/>)
                break
            case "Loans":
                setIcon (<TbZoomMoney className="size-10 text-blue-500"/>)
                break
            case "Logout":
                setIcon (<RiLogoutBoxLine className="size-10 text-blue-500"/>)
                break   
        }
    }, [])

    return (
        <div className="flex gap-2  lg:gap-2 p-2  items-center">
            <NavLink to={text}>
              <div className="flex items-center gap-2">
                {icon}
                <Button className ="w-[150px] text-lg" size="lg" >{text}</Button>
              </div>
            </NavLink>
        </div>
    )
}

export default Anchor