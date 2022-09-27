import { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Politics from "./components/Politics";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./components/Signin";
import SignUp from "./components/Signup";
import { onAuthStateChanged } from 'firebase/auth'
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
import Checkout from "./components/ProcessOrder/Checkout";
import Products from "./Pages/Products";
import Home from "./components/Home";
import Manage from "./components/manage/Manage";
import Information from "./components/Information";
import CheckoutPage from "./Pages/CheckoutPage";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { auth, getRol } from "./firebase";
  
function App() {
  const [{ user }, dispatch] = useStateValue();

  const userRol = async (uid) => {
    const getuser = await getRol(`users/${uid}`);
    const rolUser = getuser.data()
    const dataUser ={
      rol: rolUser.rol,
      fullName: `${rolUser.name} ${rolUser.lastName}`
    }
    return dataUser;
  }

  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      console.log(authUser);
      if (authUser) {
        userRol(authUser.uid).then((dataUser) => {
          console.log(dataUser)
          const userData = {
          uid : authUser.uid,
          email: authUser.email,
          rol: dataUser.rol,
          fullName: dataUser.fullName,
        }
          dispatch({
          type: actionTypes.SET_USER,
          user: userData,
        });
        })
       
      } else {
        dispatch({
          type: actionTypes.SET_USER,
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className='app'>
        <Navbar />
        <Switch>
          <Route path='/signup'>
            <SignUp />
          </Route>
          <Route path='/signin'>
            <SignIn />
          </Route>
          <Route path='/checkout-page'>
            <CheckoutPage />
          </Route>
          <Route path='/politics'>
            <Politics />
          </Route>
          <Route path='/checkout'>
            <Checkout />
          </Route>
          <Route path='/products'>
            <Products />
          </Route>
           <Route path='/information'>
            <Information />
          </Route>
           <Route path='/manage'>
            <Manage />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
        <Footer />
        <div> <a href="http://api.whatsapp.com/send?phone=3052947688" className="btn-wsp" target="_blank">
        <WhatsAppIcon color="default"/>
    </a></div>
      </div>
    </Router>
  );
}

export default App;
