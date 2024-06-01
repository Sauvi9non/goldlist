import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './components/App';
import Page from './components/Page';
import ErrorPage from './components/ErrorPage';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/:noteId/:pageDate",
    element: <Page />,
    errorElement: <ErrorPage />,
  },
]);

const rootElement = document.getElementById("root");
//rootElement가 null이 아니면, ReactDOM.createRoot(rootElement)를 통해 렌더링한다.
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
