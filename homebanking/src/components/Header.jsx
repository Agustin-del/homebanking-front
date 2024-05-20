import Navigator from './Navigator.jsx'

export default function Header() {
  return (
      <> 
        <header className="w-[30%] bg-blue-100 min-h-[88vh] flex flex-col gap-10 lg:gap-0 p-4"> 
              <div className="flex justify-center">
                <img className="h-[40px] object-cover lg:h-[80px] lg:object-cover" src="/logo.png"/>
              </div>
            <Navigator/>
        </header>
      </>
  )
}

