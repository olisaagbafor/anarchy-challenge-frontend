import './App.css';
import {Helmet} from 'react-helmet';
import {Routes, Route} from 'react-router-dom';
import Error404 from './pages/Error404';
import Home from './pages/Home';
import Login from './pages/Login';
import DefaultLayout from './components/DefaultLayout';
import AuthPage from './pages/AuthPage';
import SignUp from './pages/SignUp';

function App() {
  return (
    
    <div className="App h-screen w-full">

      <Helmet>
        <title>Anarcy || Assessment!</title>
        <meta name="description" content="All for the interview 1 first phase" />
      </Helmet>

     <Routes>
      <Route element={<DefaultLayout/>}>
        <Route  index element={<Home/>}/>
      </Route>
        <Route path='/auth/login' element={<AuthPage/>}/>
        <Route path='/auth/sign-up' element={<SignUp/>}/>
        <Route path='/auth/login/identifier' element={<Login/>}/>
      <Route path='/*' element={<Error404/>}/>
     </Routes>
      
    </div>
  );
}

export default App;
