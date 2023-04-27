import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Form from "./components/Form";
import Showdata from "./components/Showdata";


const router = createBrowserRouter([
  {
    path:"/",
    element:<Form />
  },
  {
    path:"/show",
    element:<Showdata />
  }
]);

function App() {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  );
}

export default App;
