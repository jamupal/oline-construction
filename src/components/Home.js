import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  boxPadding: {
    flexGrow: 1,
    paddingTop: "2rem",
    paddingBottom: "1rem",
    
  },
  dateFooter: {
    paddingTop: "2rem",
    paddingBottom: "2rem",
  },
  home: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'url(../images/construccion.jpg) no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    paddingTop: '5rem',
    paddingBottom: '10rem',
    height: '26.7rem',
    textAlign: '-webkit-center',
},
homeContent: {
    textAlign: 'center',
    width:'60rem',
},
btn: {
    marginTop: '1rem',
    display: 'inline-block',
    padding:'.8rem 3rem',
    fontSize: '1.7rem',
    borderRadius: '.5rem',
    border:'.2rem solid #000',
    color:'#000',
    cursor: 'pointer',
    background: 'none',
}
}));

const Home = () => {
const classes = useStyles();
  return (
    <>
    
     <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        className={classes.home}
      >
        <Container textAlign="center" maxWidth="lg">
            <Grid item xs={12} sm={6}>
                <Typography  variant='h4' color='textPrimary' component='p'>Productos para el hogar</Typography>
            </Grid>

            <Grid className={classes.homeContent} item xs={12} sm={6}>
                <Typography variant='h6' color='textPrimary' component='p'>
                    Venta en línea de productos de construcción para la solución de los problemas de regeneración y construcción en tu hogar.
                </Typography>
            </Grid>

            <Grid className={classes.btn}>
                <Typography variant='h6' color='textPrimary' component='p'>
                    <Link href="/products"  color="inherit">
                      Productos
                    </Link>
                </Typography>
            </Grid>
            
        </Container>
        
      </Box>
    </>
  );
};

export default Home;