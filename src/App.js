import Home from "./Pages/Home/Home"
import Login from "./Pages/Login/Login"
import Listing from "./Pages/Listing/Listing"
import List from "./Pages/Listing/List"
import New from "./Pages/Listing/New"
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"
import { productInputs, userInputs } from "./FormData"
import "./Style/dark.scss"
import { useContext } from "react"
import { DarkModeContext } from "./Context/DarkModeContext"
import { AuthContext } from "./Context/AuthContext"

function App() {

  const { darkMode } = useContext(DarkModeContext);

  const { currentUser } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />
  }


  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="/" element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          } />

          <Route path="users">
            <Route index element={
              <RequireAuth>
                <Listing />
              </RequireAuth>
            } />

            <Route path=":userID" element={
              <RequireAuth>
                <List />
              </RequireAuth>
            } />

            <Route path="new" element=
              {
                <RequireAuth>
                  <New inputs={userInputs}
                    title="Add New User" />
                </RequireAuth>
              } />

          </Route>

          <Route path="products">
            <Route index element={
              <RequireAuth>
                <Listing />
              </RequireAuth>
            } />

            <Route path=":productID" element={
              <RequireAuth>
                <List />
              </RequireAuth>
            } />

            <Route path="new" element=
              {
                <RequireAuth>
                  <New inputs={productInputs}
                    title="Add New Product" />
                </RequireAuth>
              } />

          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;