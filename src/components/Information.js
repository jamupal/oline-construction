import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import FacebookIcon from '@mui/icons-material/Facebook';
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
},
heading: {
    textAlign: "center",
    paddingBottom: "3rem",
    color: "rgb(0,0,0)"
  },
  headingTopograpy: {
    background: "#F7921A",
    color:"#fff",
    display: "inline-block",
    padding: ".5rem 3rem",
    clipPath: "polygon(100% 0, 93% 50%, 100% 99%, 0% 100%, 7% 50%, 0% 0%)",
    fontWeight: "bold",
    fontSize: "xx-large",
  },
  ulClass: {
    paddingLeft: "2rem",
    },
}));

const Information = () => {
const classes = useStyles();
  return (
    <>
      <Box className={classes.heading}><Typography className={classes.headingTopograpy} variant='h6' color='textPrimary' component='p'>
        Despacho a Domicilio    
      </Typography></Box>
      <Grid container justify="center" alignItems="center"  spacing={1}>
        <Grid item xs={4} sm={4} md={4}>
            <Paper width={100} height={200}>
                <Box  textAlign="center" >
                    <Box ><img width={110} height={110} src="../images/estado.png" alt="" /></Box>
                    <Typography variant='h5' width="Mac-content" color='textPrimary' component='p'>
                        Buen estado
                    </Typography>
                    <Typography variant='p' width="Mac-content" color='textPrimary' component='p'>
                        Nos encargamos de mantener nuestros productos en un buen estado.
                    </Typography>
                </Box>
            </Paper>
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
            <Paper width={100} height={200}>
                <Box  textAlign="center" >
                    <Box ><img width={110} height={110} src="../images/contra-entrega.png" alt="" /></Box>
                    <Typography variant='h5' width="Mac-content" color='textPrimary' component='p'>
                        Contra entrega
                    </Typography>
                    <Typography variant='p' width="Mac-content" color='textPrimary' component='p'>
                        Te llevamos el producto hasta la puerta de tu casa con más confianza.
                    </Typography>
                </Box>
            </Paper>
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
           <Paper width={100} height={200}>
                <Box  textAlign="center" >
                    <Box ><img width={110} height={110} src="../images/pago-facil.png" alt="" /></Box>
                    <Typography variant='h5' width="Mac-content" color='textPrimary' component='p'>
                        Pagos faciles
                    </Typography>
                    <Typography variant='p' width="Mac-content" color='textPrimary' component='p'>
                        Te brindamos los métodos de pago acorde a tu necesidad.
                    </Typography>
                </Box>
            </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={6} itemAlign="center">
            <Paper>
                <Box textAlign="center" p={3}>
                    <Typography variant='h6' width="Mac-content" color='textPrimary' component='p'>
                        Términos y Condiciones:
                    </Typography>
                </Box>
                <Box >
                    <Typography variant='p' width="Mac-content" color='textPrimary' component='p'>
                        <ul className={classes.ulClass}>
                        <li>El plazo de entrega contará a partir de la recepción del pago de la orden.</li>
                        <li>Los tiempos de entrega varían en función de la zona de envió y las opciones de entrega seleccionadas.</li>
                        <li>No aplica para promesas de entrega Mismo día y Express.</li>
                        <li>No hay un monto de compra mínimo o máximo para el valor de los productos.</li>
                        <li>Aplica de momento en el barrio que se mencionará enseguida:<strong>MEDELLIN: Manrique central.</strong></li>
                    </ul>
                    </Typography>
                </Box>
            </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Information;