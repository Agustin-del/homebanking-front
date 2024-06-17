import { useMediaQuery } from 'react-responsive'
import Navigator from './Navigator.jsx'
import NavigatorDrawer from './NavigatorDrawer.jsx'

export default function Header() {
  const isDesktop = useMediaQuery({minWidth:1024})

  return (
    <> 
      {isDesktop ? (
        <header className="w-[30%] bg-blue-100 min-h-[88vh] flex flex-col gap-10 lg:gap-0 p-4"> 
          <div className="flex justify-center">
            <img className="h-[40px] object-cover lg:h-[80px] lg:object-cover" src="/logo.png"/>
          </div>
          <Navigator/>
        </header>
        )
        : (
        <header className="w-[20%] bg-blue-100 min-h-[88vh] flex flex-col gap-10 lg:gap-0 p-4">
          <NavigatorDrawer/>
        </header>
        )
      }
    </>
  )
}

