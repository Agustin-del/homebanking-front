import { Button, Card } from "flowbite-react";
import { NavLink } from "react-router-dom";

export function GetAccountCard({number, balance, accountId}) {

  return (
    <Card className="max-w-sm bg-blue-100 w-[360px] h-[160px]">
      <h5 className="text-sm lg:text-xl font-bold text-gray-900 ">
      Account Number: {number}
      </h5>
      <div className="flex items-center gap-4">
        <p className=" text-xs lg:text-base lg:font-normal text-gray-700 ">
          Amount:
        </p>  
        <p className="font-normal text-2xl lg:text-4xl text-gray-700">
          {`$${balance.toFixed(2).toLocaleString()}`}
        </p>
        </div>
        <div className="flex justify-center">
          <NavLink to={`/getAccount/${accountId}`}>
            <Button>
              <div className ="flex items-center">
              <p className="text-xs lg:text-base">Check Account</p>
              <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              </div>
            </Button>
          </NavLink>
        </div>
    </Card>
  );
}