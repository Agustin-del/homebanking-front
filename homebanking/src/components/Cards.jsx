import { useMediaQuery } from "react-responsive"

export const Cards = ({color, type, cardHolder, number, date, CVV}) => {
const isDesktop = useMediaQuery({minWidth:1024})  

  switch(color) {
      case 'GOLD':
          color = "bg-gradient-to-r from-[#BE8C29] to-yellow-500"
          break
      case 'SILVER':
          color ="bg-gradient-to-r from-[#6A696F] to-gray-400" 
          break
      case 'TITANIUM':
          color ="bg-gradient-to-r from-[black] to-gray-900"
          break
    }
  
    return (
      <div className={`card relative max-h-[170px] max-w-[270px] lg:max-h-[260px] lg:max-w-[400px] flex flex-col justify-end px-6 py-10 text-white rounded-3xl gap-0 lg:gap-8 ${color}`}>
        <div className ="flex gap-3 lg:gap-6 items-center">
          <div className="flex flex-col">
            <p className=" text-base lg:text-3xl">MASTER CARD</p>
            <p>{type}</p>
          </div>
          <img className="h-[38px] lg:h-[60px]" src="/ico.png"></img>
        </div>
        <div className="flex lg:gap-6">
        <div className="flex items-center gap-4">
          <p className="text-base lg:text-2xl font-medium">{number}</p>
          {isDesktop ?  <div className="self-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 58 36" height="36" width="58">
            <circle fillOpacity="0.62" fill="#EB001B" r="18" cy="18" cx="18"></circle>
            <circle fill="#F79E1B" r="18" cy="18" cx="40" opacity="5"></circle>
            </svg>
        </div> :
        <div className="self-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 58 36" height="36" width="58">
          <circle fillOpacity="0.62" fill="#EB001B" r="14" cy="18" cx="18"></circle>
          <circle fill="#F79E1B" r="14" cy="18" cx="40" opacity="5"></circle>
          </svg>
        </div>
        }
        </div>
        </div>
        <div className="flex justify-between gap-4 lg:gap-10 items-center">
          <p className="text-sm lg:text-lg font-medium">{cardHolder}</p>
          <div className=" text-sm lg:text-base flex-1 flex flex-col justify-center items-center">
            <p>Valid Date</p>
            <p>{date}</p>
          </div>
          <div className ="text-sm lg:text-base flex gap-2">
            <p>CVV</p>
            <p>{CVV}</p>
          </div>
        </div>
      </div>
  )
}
