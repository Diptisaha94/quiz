//import logo from './logo.svg';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Topic from './topic/Topic';

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Header></Header>
    },
    {
      path:"/topic",
      loader: async()=>{
        return fetch("https://openapi.programming-hero.com/api/quiz");
      },
      element:<Topic></Topic>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
