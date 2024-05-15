import Anchor from "./Anchor";

function Navigator () {
    return (    
        <nav className="flex flex-col items-center gap-10 p-4">
          <Anchor text='Accounts' />
          <Anchor text='Cards'/>
          <Anchor text='Transaction'/>
          <Anchor text='Loan'/>
        </nav>
    )
}

export default Navigator

