import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Root from "./layout/Root"
import Landing from "./Pages/Landing"
import Download from "./Pages/Download"


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root/>}>
        <Route index element={<Landing/>}/>
        <Route path="/download" element={<Download/>}/>
      </Route>
    )
  )
  return (
    <RouterProvider router={router}/>
  )
}

export default App
