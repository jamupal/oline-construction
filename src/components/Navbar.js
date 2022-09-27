import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import logo from "../assets/cuttevents.png";
import { Badge, Button, CssBaseline } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { useStateValue } from "../StateProvider";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";
import { actionTypes } from "../reducer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "7rem",
  },
  appBar: {
    backgroundColor: "whitesmoke",
    boxShadow: "none",
  },
  grow: {
    flexGrow: 1,
    
  },
  button: {
    marginLeft: theme.spacing(2),
  },
  image: {
    marginRight: "10px",
  },
  link: {
    textDecoration: "none",
  },
  firtsElement: {
    marginLeft: "5rem",
  },
  secondElement: {
    marginLeft: "5rem",
    marginRight: "5rem"
  },
  textColor: {
    fontWeight: 'bold',
    color: 'rgb(247, 146, 26 )',
  },
    colorLink: {
      color: '#000',
      textDecoration: "none",
    },
  cart: {
    color: 'rgb(247, 146, 26 )'
  }
  
}));

const Navbar = () => {
  const classes = useStyles();
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();

  const handleAuth = () => {
    if (user) {
      auth.signOut();
      dispatch({
        type: actionTypes.EMPTY_BASKET,
        basket: [],
      });
      history.push("/");
    }
  };

  console.log('pepa ', user);

  return (
    <>
      <CssBaseline />
      <div className={classes.root}>
        <AppBar position='fixed' className={classes.appBar}>
          <Toolbar>
            <Link className={classes.link} to='/'>
              <IconButton className={classes.textColor}>
                Online Construction
              </IconButton>
            </Link>
            <div className={classes.firtsElement}>
              <Typography variant='h6' color='textPrimary' component='p'>
              <Link className={classes.colorLink} to="/products"  color="inherit">
                Productos
              </Link>
            </Typography>
            </div>
            <div className={classes.secondElement}>
              <Typography variant='h6' color='textPrimary' component='p'>
              <Link className={classes.colorLink} to="/information"  color="inherit">
                Información
              </Link>
            </Typography>
            </div>

            <div className={classes.grow}>
              <Typography variant='h6' color='textPrimary' component='p'>
              <Link className={classes.colorLink} to="/politics"  color="inherit">
                Politica de uso
              </Link>
            </Typography>
            </div>
            {user && user.rol === "ADMIN" ?
            <div className={classes.grow}>
              <Typography variant='h6' color='textPrimary' component='p'>
              <Link className={classes.colorLink} to="/manage"  color="inherit">
                Panel administrativo
              </Link>
            </Typography>
            </div>
            : ""}

            <div className={classes.grow} />
            <Typography variant='h6' color='textPrimary' component='p'>
              Bienvenido {user ? user.fullName : "usuario"}
            </Typography>
            <div className={classes.button}>
              <Link to={!user && "/signin"}>
                <Button onClick={handleAuth} variant='outlined'>
                  <strong>{user ? "Salir" : "Entrar"}</strong>
                </Button>
              </Link>

              <Link to='/checkout-page'>
                <IconButton aria-label='show cart items' color='inherit'>
                  <Badge badgeContent={basket?.length} color='secondary'>
                    <ShoppingCart className={classes.cart} fontSize='large' />
                  </Badge>
                </IconButton>
              </Link>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};

export default Navbar;
