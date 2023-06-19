import { Route, Link, Routes } from 'react-router-dom';
import TaskForm from './Project/AddTasks';
import Tasks from './Project/Tasks';
import TransferList from './Project/ManageTask';

function AppRouter() {
  return (
    <>
    <h1>Task Manager</h1>
      <nav>
        <ul style={{ display: 'flex', justifyContent: 'center', listStyle: 'none' }}>
          <li style={{ margin: '0 10px' }}>
            <Link to="/">Home</Link>
          </li>
          <li style={{ margin: '0 10px' }}>
            <Link to="/Tasks">Tasks</Link>
          </li>
        </ul>
      </nav>
        <Routes>
          <Route path="/" element={<TransferList />} />
          <Route path="/Tasks" element={<Tasks />} />
        </Routes>
     </>
  );
}

export default AppRouter;
