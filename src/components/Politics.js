import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, CssBaseline, Typography } from "@material-ui/core";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding: theme.spacing(3),
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
      padding: ".5rem 4rem",
      clipPath: "polygon(100% 0, 93% 50%, 100% 99%, 0% 100%, 7% 50%, 0% 0%)",
      fontWeight: "bold",
      fontSize: "xx-large",
      //marginTop: "2rem",
    },
    accordion: {
        marginTop: "2rem",
        marginBottom: "2rem",
    },
    ulClass: {
        paddingLeft: "1rem",
    },
  }));
  
const Politics = () => {
    const classes = useStyles();
   
  return (
    <>

    <CssBaseline />
     <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor=""
        color="#000">
        <Container maxWidth="lg">
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12} >
                <Box className={classes.heading}><Typography className={classes.headingTopograpy} variant='h6' color='textPrimary' component='p'>
                    Terminos   
                </Typography></Box>
        <Box>
        <div>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><h4>Introducción</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ul className={classes.ulClass}>
                    <li>Estos Términos de uso estándar del sitio web escritos en esta página web administrarán su uso de este sitio web.</li>
                    <li>Estos Términos se aplicarán completamente y afectarán su uso de este sitio web.</li>
                    <li>Al usar este sitio web, acordó aceptar todos los Términos de uso escritos aquí.</li>
                    <li>No debe usar este sitio web si no está de acuerdo con alguno de estos Términos de uso estándar del sitio web.</li>
                </ul>
          </Typography>
        </AccordionDetails>
        </Accordion>
    </div>

    <div>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><h4>Derechos de propiedad intelectual</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ul className={classes.ulClass}>
                    <li>
                        Cualquier contenido que almacene en nuestro sitio web (colectivamente, "Contenido") sigue siendo suyo, sin embargo, usted le otorga a Online Construction una licencia limitada para acceder, copiar, modificar, distribuir,
                        almacenar, transmitir, formatear, enumerar información sobre, editar, traducir, hacer trabajos derivados de, mostrar públicamente y realizar públicamente
                        Contenido en la medida necesaria para proporcionarle nuestras Funciones. La licencia que nos otorga no es exclusiva (lo que significa que es libre de licenciar su
                        Contenido para cualquier otra persona además de Online Construction), totalmente pagado y libre de regalías (lo que significa que no estamos obligados a pagarle por
                        el uso en las Características del Contenido que publica), transferible y sublicenciable (para que podamos utilizar nuestros afiliados y subcontratistas)
                        como las redes de entrega de contenido de Internet para proporcionar las Funciones) y en todo el mundo (porque Internet y las Funciones tienen un alcance global).
                        </li>
                        <li>
                        Usted es el único responsable de su Contenido y de las consecuencias de su transmisión. Usted es además responsable de garantizar que no ponga accidentalmente a
                        disposición público ningún Contenido privado. Cualquier Contenido que pueda recibir a través del uso de las Funciones de sus visitantes o de otro modo se le
                        proporciona TAL CUAL es para su información y uso personal únicamente y usted acepta no usar o explotar dicho Contenido para ningún propósito sin el
                        consentimiento expreso por escrito de la persona que posee los derechos de dicho Contenido. No ofrecemos garantías, expresas o implícitas, en cuanto al
                        Contenido o la precisión o confiabilidad del Contenido o de cualquier material o información que reciba a través de nuestras Funciones.
                        </li>
                        <li>Online Construction reconoce que no tiene derechos de propiedad intelectual sobre ninguna propiedad intelectual propiedad de sus Usuarios y cargada o utilizada en Online Construction. Cualquier propiedad intelectual de este tipo sigue siendo propiedad del usuario de Online Construction. Sin embargo, al permitir que su contenido en línea se vea públicamente, incluido cualquier contenido desarrollado con Online Construction, usted reconoce y acepta que dicho contenido público puede verse y compartirse libremente. Además, reconoce y acepta que Online Construction no es, de ninguna manera, responsable de la seguridad o protección de cualquier propiedad intelectual o contenido similar cargado en Online Construction, el cumplimiento de cualquier propiedad intelectual o derechos similares con respecto a dicho contenido, y que Online Construction deberá no será responsable de ningún reclamo, daño, responsabilidad u otros costos o gastos relacionados con el mismo.</li>
                        <li>Online Construction no realiza una prueba previa o una pantalla periódica ni revisa ningún Contenido cargado o utilizado en conexión con Online Construction, pero se reserva el derecho, a su exclusivo criterio, de examinar y revisar cualquier contenido cargado o utilizado en relación con Online Construction, y eliminar cualquier contenido que viole estos Términos de uso.</li>
                        <li>En el curso del uso de cualquiera de las Funciones, si encuentra algún Contenido con aviso (s) de copyright o cualquier característica (s) de protección de copia, acepta no eliminar dicho aviso (s) o deshabilitar dicha característica (s) de protección de copia según el caso puede ser. Al poner a disposición cualquier Contenido con derechos de autor / derechos de autor a través de Online Construction, usted afirma que tiene el consentimiento, la autorización o el permiso, según sea el caso de cada persona que pueda reclamar cualquier derecho sobre dicho Contenido para que dicho Contenido esté disponible de esa manera. Además, al poner a disposición cualquier Contenido de la manera mencionada anteriormente, usted acepta expresamente que Online Construction tendrá el derecho de bloquear el acceso o eliminar dicho Contenido puesto a su disposición, si recibimos quejas sobre cualquier ilegalidad o infracción de los derechos de terceros en dicho Contenido. . Al usar cualquiera de las Funciones y transmitir o publicar cualquier Contenido usando dicha Función, usted acepta expresamente que Online Construction determine las preguntas de ilegalidad o infracción de los derechos de terceros en dicho Contenido.</li>
                        <li>Es nuestra política responder a avisos claros de presuntas infracciones de derechos de autor que cumplan con la Ley de Derechos de Autor del Milenio Digital de 1998 ("DMCA"). Además, cancelaremos sin previo aviso las cuentas de aquellos que determinemos como infractores reincidentes. Si es propietario de derechos de autor y cree que cualquier contenido alojado en las Características infringe sus derechos de autor, puede enviar una notificación de conformidad con la DMCA al proporcionar a Online Construction la siguiente información por escrito:</li>
                        <ul className={classes.ulClass}>
                            <li>una firma electrónica o física de la persona autorizada para actuar en nombre del propietario de los derechos de autor;</li>
                            <li>una descripción del trabajo protegido por derechos de autor que usted afirma que se ha infringido;</li>
                            <li>una descripción de dónde se encuentra el material que, según usted, infringe, se encuentra en nuestras Funciones, como al proporcionarnos las URL del contenido; su dirección, número de teléfono y dirección de correo electrónico;</li>
                            <li>una declaración escrita de usted de que cree de buena fe que el uso en disputa no está autorizado por el propietario de los derechos de autor, su agente o la ley;</li>
                            <li>una declaración suya, hecha bajo pena de perjurio, que la información anterior en su notificación es precisa y que usted es el propietario de los derechos de autor o está autorizado para actuar en nombre del propietario de los derechos de autor.</li>
                        </ul>
                </ul>
          </Typography>
        </AccordionDetails>
        </Accordion>
    </div>

    <div>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><h4>Agente de derechos de autor</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ul className={classes.ulClass}>
                    <li>Si cree que cualquier Contenido de usuario u otro material en las Características infringe sus derechos de autor, comuníquese con nosotros con la URL exacta de donde se encuentra el supuesto material infractor. Si se nos notifica que cualquier Contenido del usuario infringe los derechos de propiedad intelectual de otro, podemos eliminar dicho Contenido del usuario. Tenemos una política de infracción reiterada y nos reservamos el derecho de cancelar su Cuenta por enviar Contenido de usuario infractor en violación de estos Términos de uso una vez o de forma reiterada.</li>
                </ul>
          </Typography>
        </AccordionDetails>
        </Accordion>
    </div>

    <div>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><h4>Limitación de responsabilidad</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
                <ul className={classes.ulClass}>
                    <li>Independientemente de si se informa o no de la posibilidad de tales daños, Online Construction y sus directores, funcionarios, accionistas, empleados y afiliados, no serán responsables ante ningún usuario por daños directos, indirectos, incidentales, especiales, consecuentes o ejemplares, incluidos, pero no limitado a daños por pérdida de ganancias, buena voluntad, uso, datos u otras pérdidas intangibles resultantes de (i) el uso o la imposibilidad de usar las funciones; (ii) el costo de adquisición de bienes y características sustitutos resultantes de cualquier bien, información, información o características obtenidas o mensajes recibidos o transacciones realizadas a través de o desde las características; (iii) acceso no autorizado o alteración de sus transmisiones o datos; (iv) declaraciones o conducta de un tercero sobre las características; (v) o cualquier otro asunto relacionado con las características. su única y exclusiva solución para cualquier disputa con Online Construction relacionada con cualquiera de las funciones será la terminación de dicha función.</li>
                </ul>
          </Typography>
        </AccordionDetails>
        </Accordion>
    </div>

    <div>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><h4>Política de cuenta de usuario</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ul className={classes.ulClass}>
                    <li>Usted es el único responsable de todas las actividades que ocurran en su cuenta.</li>
                    <li>Usted acepta no usar la cuenta, nombre de usuario o contraseña de otro Usuario en ningún momento, ni revelar su contraseña a terceros ni hacer nada que pueda poner en peligro la seguridad de su cuenta.</li>
                    <li>Usted acepta notificarnos de inmediato sobre cualquier uso no autorizado de su cuenta.</li>
                    <li>Si tenemos motivos razonables para sospechar la violación de estos términos o si la información de registro que ha proporcionado es falsa, inexacta, desactualizada o incompleta, podemos cancelar su cuenta de Usuario y rechazar el uso actual o futuro de cualquiera o todas las funciones.</li>
                    <li>No somos responsables de ninguna pérdida o daño a usted o cualquier tercero que pueda incurrir como resultado de un acceso y / o uso no autorizado de su cuenta, o de otra manera.</li>
                </ul>
            
          </Typography>
        </AccordionDetails>
        </Accordion>
    </div>

    <div>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><h4>Datos del usuario</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ul className={classes.ulClass}>
                    <li>Usted posee el Contenido creado o almacenado por usted. A menos que usted lo permita específicamente, su uso de las Funciones no nos otorga la licencia para usar el Contenido creado o almacenado por usted para fines comerciales, de marketing o similares.</li>
                    <li>Usted acepta no usar, mostrar o compartir su Contenido o cualquier información que le proporcionemos (colectivamente, "Datos del usuario") de una manera inconsistente con nuestros Términos de uso, Pautas y todas las leyes y regulaciones aplicables.</li>
                    <li>No estamos obligados a mantener copias de seguridad de los Datos del usuario en el Sitio una vez que se eliminen su cuenta o los Datos del usuario.</li>
                </ul>
            
          </Typography>
        </AccordionDetails>
        </Accordion>
    </div>

    <div>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><h4>Política de uso razonable</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ul className={classes.ulClass}>
                <li>La política de Online Construction hacia el uso justo es que los usuarios deben poder utilizar las funciones de Online Construction de manera adecuada para satisfacer sus necesidades. Un número muy pequeño de clientes usa una cantidad excesiva del ancho de banda de la red en las horas pico, en la medida en que puede afectar el rendimiento de otros. Por esta razón, tenemos una política de uso justo diseñada para garantizar que nuestra función de Miembro se mantenga rápida y confiable las 24 horas del día; implica monitorear la cantidad de impresiones, interacciones de los visitantes, descargas y otro tráfico no crítico en nuestra función.</li>
                <li>Si el uso de un miembro es continuamente excesivo, injusto, afecta el disfrute de nuestra función por parte de otros usuarios, o no es consistente con el uso que normalmente esperaríamos en el paquete actual de ese miembro, nos reservamos el derecho de suspender o terminar la capacidad del miembro para acceder a caracteristicas.</li>
            </ul>
            
          </Typography>
        </AccordionDetails>
        </Accordion>
    </div>

    <div>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><h4>Violaciones y Terminación de Cuentas</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ul className={classes.ulClass}>
                    <li>Online Construction se reserva el derecho de investigar violaciones de cualquiera de estos Términos de uso o de cualquier otra política de Online Construction u Online Construction, o cualquier otra violación de cualquier ley, norma o regulación estatal, federal, nacional o local, y de buscar cualquier remedio disponible para Online Construction ya sea por ley, en equidad o de otra manera. Por la presente, reconoce y acepta que Online Construction puede notificar, involucrar y cooperar con las autoridades policiales en la investigación y el enjuiciamiento de los usuarios que violen estos Términos de uso o cualquier otra política de Online Construction u Online Construction, y cualquier otra violación de las leyes estatales, federales o locales, reglas o regulaciones</li>
                </ul>
            
          </Typography>
        </AccordionDetails>
        </Accordion>
    </div>

    <div>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><h4>Politica de reembolso</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ul className={classes.ulClass}>
                    <li>Todos los pagos realizados a Online Construction en relación con su cuenta Online Construction no son reembolsables, y Online Construction generalmente no ofrece, y no está obligado a proporcionar, ningún reembolso o crédito, a menos que la ley lo requiera. No hay ninguna circunstancia en la que tenga derecho, o Online Construction debe proporcionar un reembolso o crédito, a menos que la ley lo requiera.</li>
                </ul>
            
          </Typography>
        </AccordionDetails>
        </Accordion>
    </div>

    <div>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><h4>Actividad prohibida</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ul className={classes.ulClass}>
                <li>Usted acepta no utilizar las Funciones con fines ilegales, dañinos, engañosos, fraudulentos u otros fines maliciosos o publicar, difundir o comunicar cualquier tema ilegal, difamatorio, obsceno, lascivo, excesivamente violento, acosador, sexualmente explícito u objetable o de otro modo para el transmisión de material que contiene virus u otro código malicioso, o el que infringe o puede infringir la propiedad intelectual u otros derechos de otro.</li>
                <li>Usted acepta no utilizar las Funciones para la transmisión de "correo basura", "spam", "cartas en cadena", "phishing" o distribución masiva no solicitada de correo electrónico. A pesar de estas prohibiciones, el contenido comunicado por otros Usuarios puede contener material, productos o características inexactos, inapropiados, ofensivos o sexualmente explícitos, y no asumimos ninguna responsabilidad por este material.</li>
                <li>Sin asumir ninguna obligación de hacerlo, podemos eliminar cualquier Contenido o suspender cualquier cuenta asociada con él, que tengamos motivos razonables para creer que viola este Acuerdo o que puede ser ofensivo o ilegal, o violar los derechos, dañar o amenazar la seguridad de cualquier persona</li>
            </ul>
            
          </Typography>
        </AccordionDetails>
        </Accordion>
    </div>

    <div>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><h4>Enlaces</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
        
          <ul className={classes.ulClass}>
                <li>Online Construction no ha revisado todos los sitios vinculados a Online Construction y no es responsable por el contenido de dichos sitios web vinculados. La inclusión de cualquier enlace no implica la aprobación por parte de Online Construction del sitio o la aplicación. El uso de cualquier sitio web vinculado es bajo el propio riesgo del usuario.</li>
            </ul>
            
          </Typography>
        </AccordionDetails>
        </Accordion>
    </div>

    <div>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><h4>Descargo de responsabilidad de garantías</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
        
          <ul className={classes.ulClass}>
                <li>Online Construction se proporciona "tal cual" y "según disponibilidad" sin garantías de ningún tipo. Online Construction y cada usuario de Online Construction renuncian a cualquier garantía con respecto a la seguridad, confiabilidad, oportunidad y rendimiento de Online Construction; Online Construction renuncia a toda responsabilidad por cualquier reclamo, daños, pérdidas, costos o gastos (incluidos los honorarios de abogados).</li>
                <li>En relación con la plataforma Online Construction, Online Construction no garantiza que (i) las características cumplan con sus requisitos específicos, (ii) las características serán ininterrumpidas, oportunas, seguras o sin errores, (iii) los resultados que se pueden obtener de el uso de las características será preciso o confiable, (iv) la calidad de cualquier producto, características, información u otro material comprado u obtenido por usted a través de las características satisfará sus expectativas, y (v) cualquier error en las características ser corregido.</li>
                <li>Online Construction y cada usuario de Online Construction renuncian a cualquier garantía de las características o productos recibidos a través de Online Construction o anunciados en ellos o recibidos a través de los enlaces proporcionados por Online Construction u Online Construction.</li>
                <li>Usted comprende y acepta que el uso de Online Construction es bajo su propia discreción y riesgo y que usted será el único responsable de cualquier responsabilidad, reclamo, daños, pérdida, costo o gasto, incluida, entre otras, la pérdida de datos que resulte de surge de su uso de Online Construction.</li>
            </ul>
            
          </Typography>
        </AccordionDetails>
        </Accordion>
    </div>

    <div>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><h4>Divisibilidad</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
        
          <ul className={classes.ulClass}>
                <li>Si un tribunal de jurisdicción competente o árbitro determina que alguna disposición de estos Términos de uso es ilegal, nula o inaplicable, la disposición no aplicable se modificará para hacerla ejecutable y efectiva en la mayor medida posible para que tenga efecto la intención de la disposición; y si un tribunal o árbitro considera que la disposición modificada es inválida, ilegal, nula o inaplicable, la validez, legalidad y exigibilidad de las disposiciones restantes de estos Términos de uso no se verán afectadas de ninguna manera.</li>
            </ul>
          </Typography>
        </AccordionDetails>
        </Accordion>
    </div>

    <div>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><h4>Elegibilidad</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ul className={classes.ulClass}>
            <li>Al usar nuestro sitio y características, usted declara y garantiza que:
                    <ul className={classes.ulClass}>
                        <li>(a) es plenamente capaz y competente para aceptar los términos, condiciones, obligaciones, representaciones y garantías establecidas en estos Términos de uso;</li>
                        <li>(b) toda la información de registro que envíe es veraz y precisa;</li>
                        <li>(c) mantendrá la precisión de dicha información;</li>
                        <li>(d) su uso de las Funciones no viola ninguna ley o regulación aplicable. El uso de las Funciones es nulo donde esté prohibido.</li>
                    </ul>
                </li>
            </ul>
            
          </Typography>
        </AccordionDetails>
        </Accordion>
    </div>

    <div>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><h4>Renuncias</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ul className={classes.ulClass}>
                <li>Si no actuamos con respecto a una violación de estos Términos de uso por parte de usted u otros Usuarios a tiempo, no renunciamos a nuestro derecho de actuar con respecto a esa violación en un futuro o en caso de posteriores infracciones similares u otras.</li>
            </ul>
            
          </Typography>
        </AccordionDetails>
        </Accordion>
    </div>

    <div>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><h4>Acuerdo completo</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ul className={classes.ulClass}>
                <li>Usted acepta que estos Términos de uso constituyen el acuerdo completo, completo y exclusivo entre usted y Online Construction con respecto a Online Construction, y reemplaza todos los acuerdos y entendimientos anteriores, ya sean escritos u orales, o establecidos por costumbre, práctica, política o precedente, con respecto a el tema de estos Términos de uso.</li>
            </ul>
          </Typography>
        </AccordionDetails>
        </Accordion>
    </div>

    <div>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><h4>Descargo de responsabilidad de garantía</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ul className={classes.ulClass}>
                <li>El uso del sitio es bajo su propio riesgo, y el sitio se proporciona "tal cual" sin garantías de ningún tipo, ya sea expresa o implícita. Online Construction no garantiza que las funciones estarán disponibles, ininterrumpidas, seguras o libres de errores, que los defectos serán corregidos o que las funciones o los servidores que las hacen disponibles están libres de virus u otros componentes dañinos. Online Construction no acepta ninguna responsabilidad por cualquier pérdida o daño derivado de su uso del Sitio.</li>
            </ul>
          </Typography>
        </AccordionDetails>
        </Accordion>
    </div>

    <div>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><h4>Cambios a estos Términos de uso</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ul className={classes.ulClass}>
                <li>Online Construction tiene la discreción de actualizar estos Términos de uso en cualquier momento. Cuando lo hagamos, publicaremos una notificación en nuestras respectivos grupos y páginas donde haya comunidad de Online Construction. Alentamos a los usuarios a consultar con frecuencia esta página para ver si hay cambios. Usted reconoce y acepta que es su responsabilidad revisar estos Términos de uso periódicamente y conocer las modificaciones.</li>
            </ul>
          </Typography>
        </AccordionDetails>
        </Accordion>
    </div>

    <div>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><h4>Contactando con nosotros</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ul className={classes.ulClass}>
                <li>Si tiene alguna pregunta sobre estos Términos de uso o sus tratos con el Sitio, contáctenos a través de nuestro chat de <a href="http://api.whatsapp.com/send?phone=3052947688">[whatsapp]</a></li>
            </ul>
          </Typography>
        </AccordionDetails>
        </Accordion>
    </div>


    </Box>

    <Box className={classes.heading}><Typography className={classes.headingTopograpy} variant='h6' color='textPrimary' component='p'>
        Privacidad   
      </Typography></Box>

    <Box>

    <div>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><h4>Introducción</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <p>El objetivo de estas políticas de privacidad es informarle qué información recopilamos y por qué motivo.
                Reglamento General de Protección de Datos de la Unión Europea No. 2016/679 (Ley: 25 de mayo de 2018).</p>
                <strong>Online Construction</strong> no registra ninguna información personal, excepto las direcciones de correo electrónico y las direcciones IP.
                <strong>Online Construction</strong> solo usa las direcciones de correo electrónico y las direcciones IP en los siguientes casos;
            
            
          </Typography>
        </AccordionDetails>
        </Accordion>
    </div>

    <div>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><h4>Correos electrónicos</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <p>Utilizados para identificar la cuenta del comprador y usarla en nuestros servicios.</p>
            <ul className={classes.ulClass}>
                <li>Cambiar su contraseña a su cuenta.</li>
                <li>Cambiar su dirección de correo electrónico.</li>
                <li>Para poder enviar boletines y promociones desde <strong>Online Construction</strong>.</li>
            </ul>
          </Typography>
        </AccordionDetails>
        </Accordion>
    </div>

    <div>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><h4>Direcciones IP</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <p>Se utiliza para identificar la conexión de los jugadores a nuestros servicios y verificarlos.</p>
            <ul className={classes.ulClass}>
                <li>Permite a los administradores ver su historial de conexiónes que se han conectado a su cuenta. La función se utiliza para detectar actividades inusuales o sospechosas por parte del jugador o equipo.</li>
                <li>Mientras procesa una conexión a <strong>Online Construction</strong>, la dirección IP es escaneada por diferentes firewalls.</li>
                <li>Permite que <strong>Online Construction</strong> filtre y bloquee las conexiones. Una dirección IP se bloquea cuando pertenece a una persona que la Administración o el sistema automático de <strong>Online Construction</strong> considera maliciosa.</li>
                <li>Como parte del proceso de recuperación de la cuenta, la dirección IP de la cuenta se puede solicitar al usuario para verificar la autenticidad de la solicitud.</li>
            </ul>
          </Typography>
        </AccordionDetails>
        </Accordion>
    </div>

    <div>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><h4>Programa de mercadeo</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <p>Como parte del programa de marketing, Online Construction puede enviar correos electrónicos a direcciones fuera de su base de datos. Estas direcciones nunca se guardan más de 24 horas y se pueden dar a través de un programa "recluta a tu amigo" u otros jugadores que invitan a amigos a través de correos electrónicos.</p>
          </Typography>
        </AccordionDetails>
        </Accordion>
    </div>

    <div>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><h4>Proveedores</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <p>Algunos de nuestros proveedores tienen acceso parcial o total a esta información para sus servicios.</p>
            <ul className={classes.ulClass}>
                <li>Daviplata (https://daviplata.com/):</li>
                <li>Mantiene tus datos totalmente seguros, con propósitos mayormente de anti-fraude.</li>
                <li>Bancolombia (https://www.bancolombia.com/):</li>
                <li>Registra direcciones IP al acceder a la web de <strong>Online Construction</strong>, con el fín de proveer seguridad a nuestros servicios.</li>
            </ul>          
            </Typography>
        </AccordionDetails>
        </Accordion>
    </div>

    <div>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><h4>Información</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            El equipo <strong>Online Construction</strong> es el único propietario de la información anterior y solo los miembros calificados del equipo <strong>Online Construction</strong> pueden verla. El equipo de <strong>Online Construction</strong> consulta solo esta información para obtener asistencia o asistencia técnica. La información de un usuario puede ser destruida después de 3 años de inactividad. 
            Un usuario puede elegir en cualquier momento desactivar su cuenta, en cuyo caso se debe contactar con un administrador. La información será destruida después de un período de 14 días. Esta desactivación se cancela si la cuenta se vuelve a utilizar durante este tiempo.
            </Typography>
        </AccordionDetails>
        </Accordion>
    </div>
    </Box>

    <Box className={classes.heading}><Typography className={classes.headingTopograpy} variant='h6' color='textPrimary' component='p'>
        Pagos   
      </Typography></Box>                   
    <Box>
    <div>
      <Accordion className={classes.accordion}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><h4>Pagos</h4></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <p>
            El reembolso de una compra en Online Construction es posible, pero puede conllevar a una suspensión de cuenta indefinida si es que no se conversa con el soporte antes de realizarla.
            El fin de las compras de productos es para mantener los gastos del empresa como tal para así poder brindarle lo mejor al usuario y que pueda ser más util cada día nuestra comapañia.
            </p>            
            </Typography>
        </AccordionDetails>
        </Accordion>
    </div>
    </Box>
            </Grid>
        </Grid>
            
              
        </Container>
      </Box>
    </>
  );
};

export default Politics;