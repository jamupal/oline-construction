import { useEffect, useState, useContext} from "react";

import Box from "@material-ui/core/Box";

import { AppContext } from "../Context";

const DynamicData = () => {
    const {state} = useContext(AppContext);
    const {data, setDate} = useState('');

    useEffect(() => {
        fetch(`http://localhost?language=${state.locale}`).then(() => {
            setDate("ok data recive: ${state.locale}");
        }).catch(()=> {
            setDate(`Error: server error: ${state.locale}`);
        })
    }, [state.locale])

    return (
        <Box>data from {data}</Box>
    )
}

export default DynamicData;