import { useState } from 'react'
import Header from './component/Header'
import Lists from './component/Lists'
// import Button from './component/Button'

function App() {
  const [lists, setList] = useState([])

  // add new list
  const addNewList = () => {
    const id = Math.floor(Math.random() * 100) + 1
    const newList = { id }

    setList([...lists, newList])
  }

  // delete list
  const deleteList = (id) => {
    setList(lists.filter((list) => list.id !== id))
  }


  return (
    <div className="container">
    <Header addNew={addNewList} />
    {lists.length > 0 ? <Lists lists={lists} delList={deleteList} /> : 'Add new list!'}
    </div>
  );
}

export default App;
