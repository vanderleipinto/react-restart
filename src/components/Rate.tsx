type Props = {
  rate: number;
}

export const Rate = ({rate}: Props) => {

let emojiss = ['','😔','😕','😐','😃','🤩'];
let emojis = ''
rate = Math.floor(rate)
if (rate<0) rate = 0;
if (rate>5) rate = 5;

emojis = emojiss[rate].repeat(rate) + '😶'.repeat(5-rate)

return (
  <div>
    {rate} {emojis}
  </div>
)
  
}

