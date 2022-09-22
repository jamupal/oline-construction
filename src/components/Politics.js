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
                <Box>Terminos de uso</Box>
                <Box>
                    <Link href="/" color="inherit">
                    Intruducción
                    </Link>
                </Box>
                <Box>
                    <Link href="/" color="inherit">
                    Derechos de propiedad intelectual
                    </Link>
                </Box>
                <Box>
                    <Link href="/" color="inherit">
                    Agente de derechos de autor
                    </Link>
                </Box>
                <Box>
                    <Link href="/" color="inherit">
                    Limitación de responsabilidad
                    </Link>
                </Box>
                <Box>
                    <Link href="/" color="inherit">
                    Política de cuenta de usuario
                    </Link>
                </Box>
                <Box>
                    <Link href="/" color="inherit">
                    Datos del usuario
                    </Link>
                </Box>
                <Box>
                    <Link href="/" color="inherit">
                    Política de uso razonable
                    </Link>
                </Box>
                <Box>
                    <Link href="/" color="inherit">
                    Violaciones y Terminación de Cuentas
                    </Link>
                </Box>
                <Box>
                    <Link href="/" color="inherit">
                    Politica de reembolso
                    </Link>
                </Box>
                <Box>
                    <Link href="/" color="inherit">
                    Actividad prohibida
                    </Link>
                </Box>
                <Box>
                    <Link href="/" color="inherit">
                    Enlaces
                    </Link>
                </Box>
                <Box>
                    <Link href="/" color="inherit">
                    Descargo de responsabilidad de garantías
                    </Link>
                </Box>
                <Box>
                    <Link href="/" color="inherit">
                    Divisibilidad
                    </Link>
                </Box>
                <Box>
                    <Link href="/" color="inherit">
                    Elegibilidad
                    </Link>
                </Box>
                <Box>
                    <Link href="/" color="inherit">
                    Renuncias
                    </Link>
                </Box>
                <Box>
                    <Link href="/" color="inherit">
                    Acuerdo completo
                    </Link>
                </Box>
                <Box>
                    <Link href="/" color="inherit">
                    Descargo de responsabilidad de garantías
                    </Link>
                </Box>
                <Box>
                    <Link href="/" color="inherit">
                    Cambios a estos Términos de uso
                    </Link>
                </Box>
                <Box>
                    <Link href="/" color="inherit">
                    Contactando con nosotros
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