import axios from "axios"
import { useEffect } from "react"

export default function GetData () {
  useEffect(() => {
    axios.get('/api/hello')
    .then((res) => {
      console.log(res);
    })
  }, [])
  return (
    <h1>Get Data Page!</h1>
  )
}