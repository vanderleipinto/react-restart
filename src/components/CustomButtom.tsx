type Props = {
  label: string;
  onClick: () => void
  // ou onClick: VoidFunction
}

export const CustomButtom = ({label, onClick}: Props) => {
  return (
    <button onClick = {onClick} className="p-3 text-white bg-blue-700">{label}</button>
  )
}