import { Pinyon_Script } from "next/font/google"

type Props = {
  name: string,
  avatar?: string,
  roles: string[],
  address?: string //valor opcional, pode ou não receber valores por parâmetros.
}


export const Person = ({name, 
  avatar = 'https://st3.depositphotos.com/1767687/17621/v/1600/depositphotos_176214104-stock-illustration-default-avatar-profile-icon.jpg', 
  roles
}: Props) => {
  
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