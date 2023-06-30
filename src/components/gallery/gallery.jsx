
import React, { useEffect, useState } from 'react';
import Card from '../card/card';
import Data from '../../data';
import './gallery.css'

function Gallery() {
    const [data, setData] = useState([]);

    useEffect(() => {

        setData(Data);
    }, []);

    return (
        <div className="gallery gallery-fixed-width ">
            {data.map((item) => (
                <Card key={item.id} logement={item}/>
            ))}
        </div>
    );
}

export default Gallery;
