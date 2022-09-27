import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import FacebookIcon from '@mui/icons-material/Facebook';
import { makeStyles } from "@material-ui/core/styles";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MaterialTable from 'material-table'
import { useState, forwardRef, useEffect  } from "react";
import { ThemeProvider, createTheme } from '@mui/material';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import {getProduct, updatetes, deleteDocument, getDataFiter, createInfo} from "../../firebase";

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };

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
  tallpage: {
    width: "100%",
  }
}));

const Manage = () => {

const classes = useStyles();
const [tableData, setTableData] = useState([]);

useEffect(() => {
      const getProducts =async () => {
      try {
        const querySnapshot = await getProduct('Products');
        
        setTableData(querySnapshot.docs.map((doc)=>({...doc.data(), id: doc.id})));
 
        
      }catch (e) {
        console.error(e);
      }  
  }
    getProducts()
  }, []) 


const defaultMaterialTheme = createTheme();
const columns =[
    {title: "Id", field:"id",type:"numeric"},
    {title: "Nombre", field:"name"},
    {title: "Tipo producto", field:"productType",},
    {title: "Url Imagen", field:"image"},
    {title: "Estrellas", field:"rating", type:"numeric"},
    {title: "Categoria", field:"category",type:"numeric", defaultSort:"asc"},
    {title: "Descripción", field:"description"},
    {title: "Precio", field:"price", type:"currency"},

]
  return (
    <>
    
     <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
      >
        <Container className={classes.tallpage} >
        <ThemeProvider className={classes.tallpage} theme={defaultMaterialTheme}>
        <MaterialTable 
        className={classes.tallpage}
            columns={columns} 
            data={tableData}
            icons={tableIcons}
            
            editable={{
                
                onRowAdd: newData =>
                    new Promise((resolve, reject) => {
                        setTimeout(() => {
                    
                            createInfo(newData, `Products/${newData.id}`);
                    resolve();
                }, 1000);
                        console.log('gf', newData);   
                }

                ),
                onRowUpdate: (newData, oldData) =>
                    new Promise((resolve, reject) => {
                         setTimeout(() => {
                            updatetes(newData, `Products/${newData.id}`);
                    resolve();
                }, 1000);
                }), 
                onRowDelete: oldData =>
                    new Promise((resolve, reject) => {
                         setTimeout(() => {
                            deleteDocument(`Products/${oldData.id}`);
                    resolve();
                }, 1000);
                })
            }}
            pageSize={10}
            rowsPerPageOptions={[5]}
            options = {{sorting:true}}
            title= "Productos"

        />
        </ThemeProvider>
        </Container>
      </Box>
    </>
  );
};

export default Manage;