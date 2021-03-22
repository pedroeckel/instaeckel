import React from 'react';
import FAQScreen from '../../src/components/screens/FAQScreen';

export default function FAQPage({ faqCategories }) {
  /* const [faqCategories, setfaqCategories] = React.useState([]);

  React.useEffect(() => {
    fetch('https://instalura-api.vercel.app/api/content/faq')
      .then((respostaDoServer) => respostaDoServer.json())
      .then((respostaConvertida) => respostaConvertida.data)
      .then((resposta) => {
        setfaqCategories(resposta);
      });
  }, []); */

  return (
    <FAQScreen faqCategories={faqCategories} />
  );
}

export async function getStaticProps() {
  const faqCategories = await fetch('https://instalura-api.vercel.app/api/content/faq')
    .then((respostaDoServer) => respostaDoServer.json())
    .then((respostaConvertida) => respostaConvertida.data);

  return {
    props: {
      faqCategories,
    }, // will be passed to the page component as props
  };
}
