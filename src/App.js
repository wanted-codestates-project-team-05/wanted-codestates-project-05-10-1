import './App.css';
import SearchPage from './pages/SearchPage';
import TestPage from './pages/TestPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<SearchPage/>}/>
        <Route path={'/test'} element={<TestPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
