import { Cart } from './components/Cart/Cart';
import { Header } from './components/header/Header';
import { HomePage } from './pages/HomePage/HomePage';
function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <Cart />
    </div>
  )
}

export default App;
