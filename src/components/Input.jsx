import '../css/Input.css'

export function Input(props) {

  return (
    <div className="Input">
      <label htmlFor="">{props.name}:</label>
      <input type={props.type} />
    </div>
  )
}