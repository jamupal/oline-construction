import { makeStyles } from "@material-ui/core/styles";
import { Grid, CssBaseline, Typography } from "@material-ui/core";
import Product from "../components/Product";
import {getProduct, getDataFiter} from "../firebase";
import { useEffect, useState } from "react";
import Box from "@material-ui/core/Box";

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
    padding: ".5rem 3rem",
    clipPath: "polygon(100% 0, 93% 50%, 100% 99%, 0% 100%, 7% 50%, 0% 0%)",
    fontWeight: "bold",
    fontSize: "xx-large",
  }
}));

const Products = () => {
  const classes = useStyles();
  const [catOne, setCatone] = useState([]);
  const [catTwo, setCatTwo] = useState([]);
  const [catThree, setCatThree] = useState([]);
  const [catFour, setCatFour] = useState([]);
  const [catFive, setCatFive] = useState([]);
  const [catSix, setCatSix] = useState([]);
  const [catSeven, setCatSeven] = useState([]);
  const [catEight, setCatEight] = useState([]);
  
  useEffect(() => {
      const getProducts =async () => {
      try {
        const querySnapshot = await getDataFiter(1, 'Products');
        
        setCatone(querySnapshot.docs.map((doc)=>({...doc.data(), id: doc.id})));

        const queryCatTwo = await getDataFiter(2, 'Products');
        setCatTwo(queryCatTwo.docs.map((doc)=>({...doc.data(), id: doc.id})));

        const queryCatThree = await getDataFiter(3, 'Products');
        setCatThree(queryCatThree.docs.map((doc)=>({...doc.data(), id: doc.id})));
       
        const queryCatFour = await getDataFiter(4, 'Products');
        setCatFour(queryCatFour.docs.map((doc)=>({...doc.data(), id: doc.id})));

        const queryCatFive = await getDataFiter(5, 'Products');
        setCatFive(queryCatFive.docs.map((doc)=>({...doc.data(), id: doc.id})));

        const queryCatSix = await getDataFiter(6, 'Products');
        setCatSix(queryCatSix.docs.map((doc)=>({...doc.data(), id: doc.id})));

        const queryCatSeven = await getDataFiter(7, 'Products');
        setCatSeven(queryCatSeven.docs.map((doc)=>({...doc.data(), id: doc.id})));

        const queryCatEight = await getDataFiter(8, 'Products');
        setCatEight(queryCatEight.docs.map((doc)=>({...doc.data(), id: doc.id})));
        
      }catch (e) {
        console.error(e);
      }  
  }
    getProducts()
  }, []) 
  
  return (
    <>
      <CssBaseline />
      <Box className={classes.heading}><Typography className={classes.headingTopograpy} variant='h6' color='textPrimary' component='p'>
        Lavamanos    
      </Typography></Box>
      <div className={classes.root}>
        <Grid container spacing={3}>
          {catOne.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Product key={product.id} product={product} />
            </Grid>
            
          ))}
        </Grid>
      </div>

      <Box className={classes.heading}><Typography className={classes.headingTopograpy} variant='h6' color='textPrimary' component='p'>
        Sanitarios   
      </Typography></Box>
      <div className={classes.root}>
        <Grid container spacing={3}>
          {catTwo.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Product key={product.id} product={product} />
            </Grid>            
          ))}
        </Grid>
      </div>

       <Box className={classes.heading}><Typography className={classes.headingTopograpy} variant='h6' color='textPrimary' component='p'>
        Lavaderos   
      </Typography></Box>
      <div className={classes.root}>
        <Grid container spacing={3}>
          {catThree.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Product key={product.id} product={product} />
            </Grid>            
          ))}
        </Grid>
      </div>

       <Box className={classes.heading}><Typography className={classes.headingTopograpy} variant='h6' color='textPrimary' component='p'>
        Pisos   
      </Typography></Box>
      <div className={classes.root}>
        <Grid container spacing={3}>
          {catFour.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Product key={product.id} product={product} />
            </Grid>            
          ))}
        </Grid>
      </div>

       <Box className={classes.heading}><Typography className={classes.headingTopograpy} variant='h6' color='textPrimary' component='p'>
        Taladros   
      </Typography></Box>
      <div className={classes.root}>
        <Grid container spacing={3}>
          {catFive.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Product key={product.id} product={product} />
            </Grid>            
          ))}
        </Grid>
      </div>

       <Box className={classes.heading}><Typography className={classes.headingTopograpy} variant='h6' color='textPrimary' component='p'>
        Martillos  
      </Typography></Box>
      <div className={classes.root}>
        <Grid container spacing={3}>
          {catSix.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Product key={product.id} product={product} />
            </Grid>            
          ))}
        </Grid>
      </div>

       <Box className={classes.heading}><Typography className={classes.headingTopograpy} variant='h6' color='textPrimary' component='p'>
        Pinzas   
      </Typography></Box>
      <div className={classes.root}>
        <Grid container spacing={3}>
          {catSeven.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Product key={product.id} product={product} />
            </Grid>            
          ))}
        </Grid>
      </div>

       <Box className={classes.heading}><Typography className={classes.headingTopograpy} variant='h6' color='textPrimary' component='p'>
        Destornilladores   
      </Typography></Box>
      <div className={classes.root}>
        <Grid container spacing={3}>
          {catEight.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Product key={product.id} product={product} />
            </Grid>            
          ))}
        </Grid>
      </div>

      
      
    </>
  );
};

export default Products;
