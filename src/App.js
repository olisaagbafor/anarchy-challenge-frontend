import './App.css';
import {Helmet} from 'react-helmet';
import {Routes, Route} from 'react-router-dom';
import Error404 from './pages/Error404';
import Home from './pages/Home';
import DefaultLayout from './components/DefaultLayout';

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
     </Routes>
      
    </div>
  );
}

export default App;
