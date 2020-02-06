const express = require('express')
const app = express();
const path = require("path")
const uuid = require('uuid/v4')
// path = connecting folders and files
const users = require('./models/Users')
// const logMe =require('./middleware/logger.js')
// // const moment = require('moment')
// const moment2 =require('./middleware/moment')
const port = process.env.PORT || '3000';


const userRoutes = require('./routes/userRoutes')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api/users', userRoutes)
// middleware
// const logger = (req,res,next) => {

// console.log('hello logger')
// next();
// // next is necessary for this to run
// };
// app.use('/api/users', userRoutes)
// app.use(logger);
// app.use(logMe)
// app.use(moment2)
// middleware = when u use app.use
// app.use(express.static(path.join(__dirname, 'public')))

// app.get('/',(req,res)=>{
//     return res.send("Hello Express")
// })
// each file under the public folder will be seen by doing path.join



// app.use(express.static(path.join(__dirname, 'models')))

// app.get('/', (req,res)=> {
//     res.send(path.join(__dirname,'public'))
// });
// app.get('/api/users', (req,res) => {
//     res.json(users);
// })
// get a single user
// app.get('/api/users/:id', (req,res)=> {
//     const userExists=users.filter(user=>user.id === parseInt(req.params.id))
//     if(userExists.length ===0) {
//         console.log('not found')
//     } else {
//         console.log(userExists)
//     }
//     // res.send(req.params.id)
//     res.json(users.filter(user=>user.id === parseInt(req.params.id)))
// }
// )

// app.get('/api/users/:id', (req, res) => {
//     const userExists = users.filter(user => user.id === parseInt(req.params.id))

//     if (userExists.length !== 0) {
//         return res.status(200).json(userExists[0])
//     } else {
//         return res
//             .status(404)
//             .json({ message: `User with id ${req.params.id} does not exist` })
//     }
// });
// create user +take user input
// app.post('/', (req, res) => {
//     if (!req.body.name || !req.body.email) {
//         return res.status(400)
//             .json({ message: 'Please enter both a name and an email' })
//     }
//     const newUser = {}
//     newUser.id = uuid();
//     newUser.name = req.body.name;
//     newUser.email = req.body.email;
//     users.push(newUser)
//     return res.json(newUser);
// });


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

// app.get('/', (req,res)=> {
//     res.send("<h1>Hello Node</h1>")
// });

