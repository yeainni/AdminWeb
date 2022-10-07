import Home from "./Pages/Home/Home"
import Login from "./Pages/Login/Login"
import Listing from "./Pages/Listing/Listing"
import List from "./Pages/Listing/List"
import New from "./Pages/Listing/New"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import { productInputs, userInputs } from "./FormData"
import "./Style/dark.scss"
import { useContext } from "react"
import { DarkModeContext } from "./Context/DarkModeContext"

function App() {

  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />

          <Route path="users">
            <Route index element={<Listing />} />
            <Route path=":userID" element={<List />} />
            <Route path="new" element=
              {<New inputs={userInputs}
                title="Add New User" />} />
          </Route>

          <Route path="products">
            <Route index element={<Listing />} />
            <Route path=":productID" element={<List />} />
            <Route path="new" element=
              {<New inputs={productInputs}
                title="Add New Product" />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;