import Register from './Register';
import Login from './Login';
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/' element={<Register />} />
                <Route path='/home' element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

