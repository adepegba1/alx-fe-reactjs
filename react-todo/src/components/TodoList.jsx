const myList = [
  {
    id: 1,
    task: "Cleaning",
    description: "Cleaning the house for 30 minutes",
  },
  {
    id: 2,
    task: "Drawing",
    description: "Draw my favourite dog on A4 paper",
  },
  {
    id: 3,
    task: "Coding",
    description: "Code for 1 hour to learn more about Python",
  },
];

function TodoList() {
  return (
    <>
      <div>
        {myList.map((item) => (
          <div key={item.id}>
            <h2>Task: {item.task}</h2>
            <p>Description: {item.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default TodoList;
