import { QueryClient, QueryClientProvider } from 'react-query';
import logo from './logo.svg';
import './App.css';
import { useRoutes } from 'react-router-dom';
import routes from './routes';
import { useEffect } from 'react';


function App() {
  const element=useRoutes(routes);

  useEffect(() => {
    console.log('DASHBOARD PROD VERSION 1.1',process.env.REACT_APP_DEV_URL);
  }, []);

  return (
   
    <div className="  h-[100%] w-[100%] bg-black">
      {element}
    </div>
  );
}

export default App;
