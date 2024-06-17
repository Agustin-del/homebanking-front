import { Drawer, Sidebar, Button } from "flowbite-react";
import { useState } from "react";
import Anchor from './Anchor'
import { CiMenuBurger } from "react-icons/ci";

export default function NavigatorDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className=" flex justify-center">
          <img src="/ico.png"/>
        </div>
        <div className="flex w-[95%] justify-center">
          <Button className="w-[40px]" onClick={() => setIsOpen(true)}>
            <CiMenuBurger className="w-[15px] h-[10px]"/>
          </Button>
        </div>
      </div>
      <Drawer open={isOpen} onClose={handleClose} className="bg-blue-100 ">
        <div>
          <Drawer.Header titleIcon={() => <></>} />
          <img src="/logo.png"/>
        </div>
        <Drawer.Items>
          <Sidebar
            aria-label="Sidebar with multi-level dropdown example"
            className="[&>div]:bg-transparent [&>div]:p-0 "
          >
            <div className="flex h-full flex-col justify-between py-2 ">
              <div>
                <Sidebar.Items>
                  <Sidebar.ItemGroup>
                    <Sidebar.Item className="hover:bg-blue-100">
                      <Anchor handleClose={handleClose} text="Accounts"/>
                    </Sidebar.Item>
                    <Sidebar.Item className="hover:bg-blue-100">
                      <Anchor handleClose={handleClose} text="Cards"/>
                    </Sidebar.Item>
                    <Sidebar.Item className="hover:bg-blue-100">
                      <Anchor handleClose={handleClose} text="Transactions"/>
                    </Sidebar.Item>
                    <Sidebar.Item className="hover:bg-blue-100">
                      <Anchor handleClose={handleClose}  text="Loans"/>
                    </Sidebar.Item>
                    <Sidebar.Item className="hover:bg-blue-100">
                      <Anchor handleClose={handleClose} text="Logout"/>
                    </Sidebar.Item>
                  </Sidebar.ItemGroup>
                </Sidebar.Items>
              </div>
            </div>
          </Sidebar>
        </Drawer.Items>
      </Drawer>
    </>
  );
}