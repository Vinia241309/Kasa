import Collapse from '../../components/collapse/collapse'
import React from 'react';
import Datas from '../About/datas-about';

export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      {Datas.map((data) => (
        <Collapse key={data.id} title={data.title} content={data.content} />
      ))}
    </div>
  );
}
