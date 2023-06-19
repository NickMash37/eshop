import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import Main from './pages/MainPage/Main';


function App() {

  return (
    <div className="App">
        <Routes>
          <Route path='/main' element={<Main />}/>
          <Route path='/home' element={<HomePage />} />
        </Routes>
    </div>
  )
}

export default App;
