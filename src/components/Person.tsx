// JSX e variáveis, funções e objetos

const getWeekday = () => {
  return new Intl.DateTimeFormat('pt-BR', {weekday: 'long'}).format(new Date());
}

const data = {
  name: 'Elon Musk',
  avatar: 'https://files.sunoresearch.com.br/p/uploads/2018/09/Elon-Musk-2-400x300.jpg',
  roles: ['Ceo da Tesla', 'Ceo da Spacex']
}
export const Person = () => {
  const name: string = 'Elon Musk'
  const avatar: string = 'https://files.sunoresearch.com.br/p/uploads/2018/09/Elon-Musk-2-400x300.jpg'

  return (
    <div>
      <h1 style={{color: 'green', fontSize: '30px'}} >Hoje é {getWeekday()}</h1>
      <img src={avatar} alt={data.name} className="w-40"/>

      <ul>
        <li>{data.roles[1]}</li>
        <li>{data.roles[0]}</li>
      </ul>
    </div>
  )
}