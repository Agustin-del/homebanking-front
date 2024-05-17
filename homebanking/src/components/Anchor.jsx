function Anchor ({text}) {
    return (
        <div className="flex gap-2  lg:gap-2 p-2  items-center">
            <img className= "h-[20px] lg:h-[35px]" src={`/${text}.png`}/>
            <a className="bg-white text-center p-2 rounded-lg text-[11px] lg:text-lg lg:w-[120px] w-[100px]">{text}</a>
        </div>
    )
}

export default Anchor