import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AddBus from './components/AddBus';
import SearchBus from './components/SearchBus';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import View from './components/View';
function App() {
  return (
<div>

<BrowserRouter>
<Routes>
  <Route path='/' exact element={<AddBus/>}/>
  <Route path='/search' exact element={<SearchBus/>}/>
  <Route path='/view' exact element={<View/>}/>
</Routes>
</BrowserRouter>
</div>
  );
}

export default App;
