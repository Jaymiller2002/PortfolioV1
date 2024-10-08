import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from 'react-router-dom';

// Project styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import About from './About';
import App from './App';
import ErrorPage from './ErrorPage';
import Header from './Header';
import Footer from './Footer';
import Projects from './Projects';
import Skills from './Skills';

function Layout() {
  return (
    <>
      <Header />
      <div id='page-content'>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/projects',
        element: <Projects />
      },
      {
        path: '/skills',
        element: <Skills />
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
