import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

const Footer = () => {
  
  return (
    <>
     <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="text.secondary"
        color="white"
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={3} >
                <Box borderBottom={1}><h3>Redes sociales</h3></Box>
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
                        Medellin, Antioquia - 050001
                    </Link>
                </Box>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box borderBottom={1}><h3>Contactos</h3></Box>
              <Box>
                <Link href="/" color="inherit">
                  Contact
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Support
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Privacy
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box borderBottom={1}><h3>Enlaces</h3></Box>
              <Box>
                <Link href="/" color="inherit">
                  Login
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Register
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Box borderBottom={1}><h3>Información</h3></Box>
              <Box>
              Información acerca de nuestros nuevos productos
                
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  History
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Roll
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
            Online Construction © {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Footer;