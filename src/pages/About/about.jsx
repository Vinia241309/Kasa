import Collapse from '../../components/collapse/collapse'
import React from 'react';
import Datas from '../About/datas-about';
import './about.css';
import Banner from '../../components/banner/banner';

export default function About() {
  const collapseComponents = [];

  for (let i = 0; i < Datas.length; i++) {
    const data = Datas[i];
    collapseComponents.push(
      <Collapse key={data.id} title={data.title} content={data.content} />
    );
  }

  return (
    <div>
      <Banner />

      <div className="about-collapse">
        {collapseComponents}
      </div>
    </div>
  );
}
