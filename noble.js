const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello UTeM!')
})

app.get('/bruh', (req, res) => {
  res.send(
    "Hello Dragon!"
  )
})

app.use(express.json())
app.post('/register', (req, res) => {
  console.log(req.body)

  let result = register(req.body.username, req.body.password,req.body.name,req.body.email)

  res.send(result)
})

app.use(express.json())
app.post('/login', (req, res) => {
  console.log(req.body)

  let result = login(req.body.username, req.body.password)

  res.send(result)
})

app.get('/shxtou', (req, res) => {
  res.sendFile(__dirname + '/shxtouMagnify.png');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

let dbUsers = [
  {
      username: "Noble",
      password: "abc123",
      name: "Ahmad",
      email: "supremenoble@gmail.com"
  },
  {
      username: "Myto",
      password: "seliparterbang",
      name: "Fadzlan",
      email: "mytosuper@gmail.com"
  },
  {
      username: "Zyntex",
      password: "miloaispanas0",
      name: "Zaid",
      email: "presidentjaksis12@gmail.com"
  },
  {
      username: "Scufie",
      password: "mobiletaklegend05",
      name: "Hamdi",
      email: "datukserihamdi@gmail.com"
  }
]

function login(reqUsername,reqPassword) {
  let matchUser = dbUsers.find(
      user => user.username == reqUsername
  )
  //console.log(matchUser)
  if(!matchUser) return "User not found!"
  if(matchUser.password == reqPassword) {
      return matchUser
  } else {
      return "invalid password!"
  }
}

function register(reqUsername,reqPassword,reqName,reqEmail){
  dbUsers.push({
      username: reqUsername,
      password: reqPassword,
      name: reqName,
      email: reqEmail
  })
}
