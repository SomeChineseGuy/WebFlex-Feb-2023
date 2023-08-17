import { useState } from "react";
import { PrismaClient } from '@prisma/client'
import styles from '../styles/Hello.module.css'

export default function Hello (props) { 
  console.log(props);
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
  }
  const decrement = () => {
    setCounter(counter - 1);
  }
  return (
    <div>
      <h1>Welcome to the Hello page!</h1>
      <div className={styles.counterContainer}>
        <h1>The count is: {counter}</h1>
        <div className={styles.btnContainer}>
          <button onClick={increment} className={styles.btn}>Increment</button>
          <button onClick={decrement} className={styles.btn}>Decrement</button>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps () {
  const prisma = new PrismaClient()
  const usersWithPosts = await prisma.user.findMany({
    include: {
      posts: true,
    },
  })
  return {
    props: {
      usersWithPosts
    }
  }
}