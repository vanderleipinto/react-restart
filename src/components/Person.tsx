type Props = {
  name: string,
  avatar: string,
  roles: string[],
  address?: string //valor opcional, pode ou não receber valores por parâmetros.
}


export const Person = ({name, avatar, roles}: Props) => {
  
  return (
      <>
        <h1>{name}</h1>
        <img 
          src={avatar} 
          alt={name}
          className="w-40"
        />

        <ul>
          <li>{roles[0]}</li>
          <li>{roles[1]}</li>
        </ul>
      
      </>
   
    )
}