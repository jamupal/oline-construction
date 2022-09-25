import { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Politics from "./components/Politics";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./components/Signin";
import SignUp from "./components/Signup";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";
import Checkout from "./components/ProcessOrder/Checkout";
import Products from "./Pages/Products";
import Home from "./components/Home";
import Information from "./components/Information";
import CheckoutPage from "./Pages/CheckoutPage";

  import WhatsAppIcon from '@mui/icons-material/WhatsApp';



function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log(authUser);
      if (authUser) {
        dispatch({
          type: actionTypes.SET_USER,
          user: authUser,
        });
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
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
        <Footer />
        <di> <a href="http://api.whatsapp.com/send?phone=3052947688" class="btn-wsp" target="_blank">
        <WhatsAppIcon color="default"/>
    </a></di>
      </div>
    </Router>
  );
}

export default App;
