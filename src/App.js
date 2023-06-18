import { Route, Routes } from 'react-router-dom';
import { AppContext } from './context';
import { HomePage } from './pages/HomePage/HomePage';
import { ProtectedPage } from './components/ProtectedPage/ProtectedPage';
import * as PropTypes from "prop-types";
import Main from './pages/MainPage/Main';


function App() {
  function PrivateRoute(props) {
    return null;
}

  PrivateRoute.propTypes = {children: PropTypes.node};

  return (
    <div className="App">
      <AppContext.Provider>
        <Routes>
          <Route path='/main' element={<Main />}/>
          <Route path='/home' element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }>
          </Route>
        </Routes>
      </AppContext.Provider>
    </div>
  )
}

export default App;
