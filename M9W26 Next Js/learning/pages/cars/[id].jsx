import axios from "axios";
import Image from 'next/image'
import { useRouter } from "next/router"
import { useEffect, useState } from "react";

export default function CarsID (props) {
  const router = useRouter();
  const routeName = router.query.id;
  const handleClick = () => {
    router.replace('/cars')
  }

  console.log(props);

  // const [catPic, setCatPic] = useState("");
  // const [isLoaded, setIsLoaded] = useState(false);
  // const [dogs, setDogs] = useState("")

  // useEffect(() =>{
  //   axios.get("https://catfact.ninja/fact")
  //   .then(({data}) =>{
  //     console.log(data.fact);
  //     setCatPic(data.fact)
  //     return axios.get("https://dog.ceo/api/breeds/image/random")
  //   })
  //   .then(({data}) => {
  //     setDogs(data.message)
  //     setIsLoaded(true)
  //   })
  // }, []);

  return (
    <div>
      <h1>This is my Cars page and you are on the {routeName} section</h1>
      <button onClick={handleClick}>Click me!</button>
      {/* <p>{isLoaded && catPic}</p>
      {isLoaded && <img src={dogs} />} */}
      <p>{props.catFact}</p>
      <img src={props.dogPic} />
    </div>
  )
}

// App.get('/cars/:id', (req, res) => {
//   // we are here
// })

// export function getStaticProps () {
//   // we are here
  
// }

export async function getServerSideProps() {
  // const request = 'SELECT * FROM USERS;'
  // const pool = new Pool({})
  // pool.query(request).then(() => {

  // })

  const catFact = await axios("https://catfact.ninja/fact");
  const dogPic = await axios("https://dog.ceo/api/breeds/image/random");
  console.log(dogPic);
  return {
    props: {
      catFact: catFact.data.fact,
      dogPic: dogPic.data.message
    }
  }

}