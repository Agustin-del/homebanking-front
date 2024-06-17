export const Welcome = ({client}) => {
  return (
    <h1 className = "text-3xl lg:text-6xl text-center p-4">{client ? `Welcome ${client}!` : "Welcome"}</h1>
  )
}
