import * as React from 'react';

const App = () => {

  const [tasks, setTask] = React.useState([]);
  const [input, setInput] = React.useState('');


  const AddTask = text => {
    const newTasks = [...tasks, { text }];
    setTask(newTasks);
  };

  const DeleteTask = index => {
    const newTask = [...tasks];
    newTask.splice(index, 1);
    setTask(newTask)
  };


  const addTodo = () => {
    setTask([...tasks, input])
  }



  return (
    <div>
      <h1>Todo App</h1>

      <Add addTask={AddTask} task={tasks} />
      <List list={tasks} delete={DeleteTask} />
      <hr />


    </div>
  );
};



const List = props => (
  <ul>
    {props.list.map((item) => (
      <li key={item.objectID}>

        <span>{item}</span>
        <button onClick={props.delete}>Delete</button>

      </li>
    ))}
  </ul>
);

const Add = props => (

  <div>
    {/* <form onSubmit={props.addTask}>
    <input id="add" type = "text" placeholder = "Add Task" />
    <input type = "submit" value = "Add Task" />
    </form> */}

    <input type="text" placeholder="Add Task" onChange={(e) => setInput(e.target.value)}></input>
    <button onClick={() => addTodo()}>Submit</button>
  </div>
);

export default App;
