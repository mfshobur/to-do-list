import Button from './Button'

const List = ({ delList }) => {
  return (
    <div className='toDo'>
        <input type='checkbox' />
        <input type='text' placeholder='to do' />
        <Button onClick={delList} text='delete' padding='1px 7px' color='red' />
    </div>
  )
}

export default List