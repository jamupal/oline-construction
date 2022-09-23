import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import FacebookIcon from '@mui/icons-material/Facebook';
import { makeStyles } from "@material-ui/core/styles";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const useStyles = makeStyles((theme) => ({
  boxPadding: {
    flexGrow: 1,
    paddingTop: "2rem",
    paddingBottom: "1rem",
    
  },
  dateFooter: {
    paddingTop: "2rem",
    paddingBottom: "2rem",
  }
}));

const Footer = () => {
const classes = useStyles();
  return (
    <>
    
     <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor= "rgb(247, 146, 26 )"
        color="white"
        className={classes.boxPadding}
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6} >
                <Box borderBottom={1}><h3>Redes sociales</h3></Box>
                <Box>
                    <Link href="https://www.facebook.com/" target="_blank" rel="noopener" color="inherit">      
                        <FacebookIcon color="default"/>
                    </Link>
                    <Link href="http://api.whatsapp.com/send?phone=3052947688" target="_blank" rel="noopener" color="inherit">      
                        <WhatsAppIcon color="default"/>
                    </Link>
                </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box borderBottom={1}><h3>Contactos</h3></Box>
              <Box>
                    <Link href="/" color="inherit">
                    +573052947688
                    </Link>
                </Box>
                <Box>
                    <Link href="/" color="inherit">
                        andr3s.valoyes@gmail.com
                    </Link>
                </Box>
        
              <Box>
                <Link href="/" color="inherit">
                
                  Medellín, Antioquia - 050001
                </Link>
              </Box>
            </Grid>
            
            
          </Grid>
          <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }} className={classes.boxPadding}>
            Online Construction © {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Footer;