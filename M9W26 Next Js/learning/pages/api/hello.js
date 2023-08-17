// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const request = 'SELECT * FROM USERS;'
  // const pool = new Pool({})


  if(req.method === 'POST') {
    console.log('POST METHOD');
    return res.status(200).json({name: "POST NAME!"})
    // pool.query(request).then(() => {

    // })
  }

  if(req.method === 'GET') {
    console.log('GET METHOD');
    request += ''
    return res.status(200).json({name: "GET NAME!"})
  }

  res.status(200).json({ name: 'John Doe' })
}
