
import React, { useEffect, useState } from 'react';
import Card from '../card/card';
import Data from '../../data/data.js';

function Gallery() {
    const [data, setData] = useState([]);

    useEffect(() => {

        setData(Data);
    }, []);

    return (
        <div className="gallery">
            {data.map((item) => (
                <Card title={item.title} cover={item.cover} />
            ))}
        </div>
    );
}

export default Gallery;
