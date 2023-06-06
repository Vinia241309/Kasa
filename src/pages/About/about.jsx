import Collapse from '../../components/collapse/collapse'
import React from 'react';
import Datas from '../About/datas-about';
import './about.css';
import Banner from '../../components/banner/banner';

export default function About() {
  return (
    <div>
      <Banner />

      
      {Datas.map((data) => (
        <Collapse key={data.id} title={data.title} content={data.content} />
      ))}
    </div>
  );
}
