import Anchor from "./Anchor.jsx";

function Navigator () {
  
  return (    
        <>
          <nav className="flex flex-col items-center gap-10 p-4">
            <Anchor text='Accounts' />          
            <Anchor text='Cards'/>
            <Anchor text='Transaction'/>
            <Anchor text='Loans'/>
            <Anchor text='Logout'/>
          </nav>
        </>
    )
}

export default Navigator

