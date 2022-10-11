//import logo from './logo.svg';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Blog';
import Errorpage from './Errorpage';
import Home from './Home';
import Main from './Main';
import Quizqus from './Quizqus';
import Statistics from './Statistics';
import Topic from './topic/Topic';

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Main></Main>,
      errorElement:<Errorpage></Errorpage>,
      children:[
        {
          path:"/",
          element:<Home></Home>
        },
        {
          path:"/blog",
          element:<Blog></Blog>
        },
        {
          path:"/statistics",
          loader: async()=>{
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
          element:<Statistics></Statistics>
        },
        {
          path:"/home",
          element:<Home></Home>
        },
        {
          path:"/topic",
          element:<Topic></Topic>,
          loader: async()=>{
            return fetch("https://openapi.programming-hero.com/api/quiz");
          }
        },
        {
          path:"/quiz/:id",
          element:<Quizqus></Quizqus>,
          loader:async({params})=>{
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
          }
        }
      ]
    }
    
  ])
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
