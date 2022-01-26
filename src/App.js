import logo from './logo.svg';
import './App.css';

import Task from './screens/components/task/Task';
import Todo from './screens/components/todo/Todo';
import { useState } from 'react';
import { Layout, Space } from 'antd';

function App() {
  let [id, setId] = useState(0);
  let [tasks, setTask] = useState([]);

  return (
    <div className="App">
      <Layout>
        <Layout.Header>
          <div style={{float: 'left', color: 'white', fontFamily: 'Monoton', fontSize: '2em'}}>
            Todoista
          </div>
        </Layout.Header>
        <Layout.Content style={{height: '100%', backgroundColor: 'white',}}>
          <Task id={id} setId={setId} tasks={tasks} setTask={setTask}/>
          <br/><br/>
          <Todo tasks={tasks} setTask={setTask} />
        </Layout.Content>
      </Layout>
    </div>
  );
}

export default App;
