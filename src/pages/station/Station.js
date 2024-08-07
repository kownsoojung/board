import React, {useEffect, useState} from "react";
import axios from 'axios';


function GetData() {
    const [date, setData] = useState({});

    useEffact(() => {
        axios.get('').then((Response) => {
            setData(response.data);
        })
    }, []);

    const item = (Object.values(data)).map((item) => (
        <li key={item.stationId}>
            {item.stationName}
        </li>
    ));

    return {};
}


function Station() {

    const item = GetData();
    return (
        <div>
            <ul>{item}</ul>
        </div>
    );
}

export default Station;