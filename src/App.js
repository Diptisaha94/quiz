//import logo from './logo.svg';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Blog';
import Header from './Header';
import Home from './Home';
import Quizqus from './Quizqus';
import Statistics from './Statistics';
import Topic from './topic/Topic';

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Header></Header>
    },
    {
      path:"/blog",
      element:<Blog></Blog>
    },
    {
      path:"/home",
      element:<Home></Home>
    },
    {
      path:"/statistics",
      element:<Statistics></Statistics>
    },
    {
      path:"/topic",
      loader: async()=>{
        return fetch("https://openapi.programming-hero.com/api/quiz");
      },
      element:<Topic></Topic>
    },
    {
      path:"/quiz/:id",
      loader:async({params})=>{
        return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
      },
      element:<Quizqus></Quizqus>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
