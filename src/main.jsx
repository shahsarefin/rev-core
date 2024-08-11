import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import router from './Routes/Routes'

import {
  RouterProvider,
} from "react-router-dom";
import "./index.css";

createRoot(document.getElementById('root')).render(
  <div className="max-w-7xl mx-auto">
    <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
  </div>
)
