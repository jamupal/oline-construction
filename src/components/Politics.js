import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

const Politics = () => {
  
  return (
    <>
     <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor=""
        color="#000"
      >
        <Container maxWidth="lg">
          <Grid container spacing={1}>
            <Grid item xs={12} sm={3} >
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
            </Grid>
            
              
        </Container>
      </Box>
    </>
  );
};

export default Politics;