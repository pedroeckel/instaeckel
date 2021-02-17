import React from 'react';
import Footer from '../src/components/commons/footer';
import Menu from '../src/components/commons/Menu';




export default function Home() {
  return (
  <div  style={{
    flex: '1',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    justifyContent: 'space-between',
  }}>
    <Menu />
    <Footer />
    </div>
  )
}