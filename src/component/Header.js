import Button from './Button'

const Header = ({ addNew }) => {
  return (
    <header className='header'>
      <h1>To Do List</h1>
      <Button text='add' onClick={addNew} />
    </header>
  )
}

export default Header