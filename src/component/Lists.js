import List from './List'

const Lists = ({lists, delList}) => {
  return (
    <div>
        {lists.map((list) => (
          <List key={list.id} delList={() => delList(list.id)}  />
        ))}
    </div>
  )
}

export default Lists