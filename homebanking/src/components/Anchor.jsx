import { Button } from "flowbite-react"
import { NavLink, useNavigate } from "react-router-dom"
import { IoIosPeople } from "react-icons/io";
import { FaCreditCard } from "react-icons/fa";
import { GrTransaction } from "react-icons/gr";
import { TbZoomMoney } from "react-icons/tb";
import { RiLogoutBoxLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/actions/authActions";


function Anchor ({text, handleClose}) {
    
    const navigate = useNavigate()
    const [icon, setIcon] = useState('')
    const [color, setColor] = useState('')
    const dispatch = useDispatch()
    
    useEffect(() => {
      switch (text) {
        case "Accounts":
          setIcon (<IoIosPeople className="size-12 text-blue-500"/>)
          break
        case "Cards":
          setIcon (<FaCreditCard className="size-10 text-blue-500"/>)
          break
        case "Transactions":
          setIcon (<GrTransaction className="size-10 text-blue-500"/>)
          break
        case "Loans":
          setIcon (<TbZoomMoney className="size-10 text-blue-500"/>)
          break
        case "Logout":
          setIcon (<RiLogoutBoxLine className="size-10 text-blue-500"/>)
          break   
      }
    }, [text])

    const handleLogout = () => {
      navigate('/Logout')
      dispatch(logout())
    }

    const handleClick = () => {
      if (text === "Logout") {
        handleLogout()
      }
      handleClose()
    }
    
    return (
      <>
        <div className="flex gap-2 p-2 items-center">
          <NavLink to={"/" + text} className ={({isActive}) => {
            isActive ? setColor("bg-blue-300 text-black"): setColor("")
          }}>
            <div className="flex items-center gap-2">
              {icon}
              <Button className ={"w-[150px] text-lg "  + color} size="lg" onClick={handleClick}>{text}</Button>
            </div>
          </NavLink>
        </div>
        {/* {loggingOut && (    
          <Card className="max-w-sm absolute right-[58vh] top-[40vh] bg-blue-200">         
            <p className="font-bold text-gray-700">
              Logging out...
            </p>
          </Card>
        )} */}
        </>
    )
}

export default Anchor