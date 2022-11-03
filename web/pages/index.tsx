interface HomeProps {
  count: number;
}



export default function Home(props:HomeProps) {
  return (<>
  <h1>Mais uma Brunao</h1>
  <h2>Contagem: {props.count}</h2>
  
  </>
  )
}

export const getServerSideProps = async () => {
  const response = await fetch('http://localhost:3333/pools/count');
  const data = await response.json();
  console.log( data)

  return {
    props: {
      count: data.count,
    }
  }
}
