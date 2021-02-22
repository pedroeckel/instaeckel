import React from 'react';
import { Button } from '../src/components/commons/Button';
import Footer from '../src/components/commons/Footer';
import Menu from '../src/components/commons/Menu';
import { Text } from '../src/components/foundation/Text';


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
    <div>
        <Text
          variant="title"
          tag="h1"
          color="tertiary.main"
          textAlign={{
            xs: 'center',
            md: 'left'
          }}
        >
          Compartilhe momentos e conecte-se com amigos
        </Text>
        <Text
          variant="paragraph1"
          tag="p"
          color="tertiary.light"
          textAlign={{
            xs: 'center',
            md: 'left'
          }}
      
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
          massa sed risus luctus fermentum. Praesent eu posuere mauris. Vivamus
          sit amet odio nibh. Ut maximus nibh ac sapien aliquam consequat. In
          volutpat, lectus quis molestie lobortis, tellus odio auctor lectus, in
          dignissim lectus libero vitae libero. Vestibulum nisl urna, auctor sit
          amet porta tincidunt, mattis quis arcu. 
        </Text>

        <Button
          margin = {{
            xs: 'auto',
            md: 'initial',
          }}
          display="block"
          variant="primary.main"
        >
          Cadastrar
        </Button>
      </div>
    <Footer />
    </div>
  )
}