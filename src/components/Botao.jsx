import '../css/Botao.css'

export function Botao(props) {
  return (
    <div className="Botao" onClick={props.event}>{props.name}</div>
  )
}