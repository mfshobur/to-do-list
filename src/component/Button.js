const Button = ({ text, padding, color, onClick }) => {
  return (
      <button className='btn' onClick={onClick} style={{padding: padding, backgroundColor: color }} >
        {text}
      </button>
  )
}

export default Button