import React from 'react';
import Calen from './components/Calen'
import Cal2 from './components/Cal2'
import Cal3 from './components/Cal3'
import Cards from './components/Cards'
import 'antd/dist/antd.css'
import { PageHeader, Typography, Avatar } from 'antd'
const { Paragraph } = Typography


const routes = [
  {
    path: 'index',
    breadcrumbName: 'Bread-Crumb 1',
   
  },
  {
    path: 'first',
    breadcrumbName: 'Bread-Crumb 2',
  },
  {
    path: 'second',
    breadcrumbName: 'Bread-Crumb 3',
  },
];

const content = (
  <Paragraph>
            3am, time to create some chaos , for i shredded your linens for you see brother cat receive pets, attack out of jealousy there's a forty year old lady there let us feast. I like fish dream about hunting birds plan steps for world domination yet i see a bird i stare at it i meow at it i do a wiggle come here birdy yet that box? i can fit in that box or show belly. Where is my slave? I'm getting hungry meoooow for poop in the plant pot run at 3am slap the dog because cats rule poop in litter box, scratch the walls massacre a bird in the living room and then look like the cutest and most innocent animal on the planet. Cats secretly make all the world
  </Paragraph>
)

function App() {
  return (
    <div className="App" style={{background: "#E5E5E5"}}>
      <h1>ANTD</h1>
      <PageHeader 
      style={{background: "#C2B4D6", color: "#57648C"}}
      title="Hello" subTitle="THIS is the SUBTITLE"
      breadcrumb={{routes}}>
      <div className="wrap">
      Lola: <Avatar size="small" icon="user"/>
      <div className="content">{content}</div>
      </div>
      </PageHeader>
      <Cal2/>
      <Cards/>
      <Calen/>
      <Cal3/>
    </div>
  );
}

export default App;
