import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import Register from './pages/Register/Register';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <PrivateRoute path='/register'>
            <Register></Register>
          </PrivateRoute>
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
