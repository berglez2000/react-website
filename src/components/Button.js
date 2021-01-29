
const Button = ({ btnClass, btnText }) => {
  return (
    <>
      <button className={`btn ${btnClass} `} >{btnText}</button>
    </>
  )
}

export default Button
