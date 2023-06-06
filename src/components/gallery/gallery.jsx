
import React, { useEffect, useState } from 'react';
import Card from '../card/card';
import Data from '../../data.json';
import './gallery.css'

function Gallery() {
    const [data, setData] = useState([]);

    useEffect(() => {

        setData(Data);
    }, []);

    return (
        <div className="gallery">
            {data.map((item) => (
                <Card key={item.id} title={item.title} cover={item.cover} />
            ))}
        </div>
    );
}

export default Gallery;
