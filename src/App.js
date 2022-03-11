import './App.css';
import SearchPage from './pages/SearchPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<SearchPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
