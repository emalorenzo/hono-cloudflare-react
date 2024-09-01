import React from 'react';
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes } from './routes';

const router = createBrowserRouter(routes);

ReactDOM.hydrateRoot(
  document.getElementById('app') as HTMLElement,
  <RouterProvider router={router} />
);

console.log('Client');