import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router";
import "./App.css";
import { login, logout, selectUser } from "./features/user/userSlice";
import { auth } from "./firebase";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        console.log(userAuth);
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else dispatch(logout);
    });
    return unsubscribe;
  });
  return (
    <div className="App">
      <Routes>
        {!user ? (
          <Route path="/login" element={<Login />} />
        ) : (
          <Route path="/" element={<Home />} />
        )}
      </Routes>
    </div>
  );
}

export default App;
