import express from 'express';
import getLatestId from './utility.js';

const app = express();
const port = 3000

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// API Todos
let todos = [
    {
        _id: "0",
        task: "Need to learn Node Js",
        isCompleted: false,
        userId : "1"
    },
    {
        _id: "1",
        task: "Need to learn Node Js with fun",
        isCompleted: true,
        userId : "2"
    },
    {
        _id: "2",
        task: "Need to learn Node Js with fun",
        isCompleted: true,
        userId : "2"
    },
    {
        _id: "3",
        task: "Need to learn Node Js with vaishu",
        isCompleted: false,
        userId : "3"
    }
];

// Routes
app.get('/getTodos',(req,res)=>{
    res.json(todos);
});

app.get('/getTodos/:id',(req,res)=>{
    console.log(req.params);
    if(req.params && req.params.id){
        let newTodoData = todos.filter((elem) => elem.userId === req.params.id);
        console.log(newTodoData);
        if(newTodoData.length == 0){
            return res.json({
                status: "FAILURE",
                reason: "No user Found"
            });
        }
        res.json(newTodoData);
    } else {
        res.json("Bad Request");
    }
    
});

app.post('/createTodo',(req, res)=>{
    const {task, isCompleted, userId} = req.body;
    if(!task || !isCompleted || !userId){
        return res.status(400).json({
            status: "FAILURE",
            reason: "400 Bad Request"
        });
    }

    // DB OPERATION INSERTT INTO DB.
    //401
    let id = getLatestId(todos) + 1;
    let idStr = id.toString();
    console.log(idStr);
    console.log(typeof idStr);
    todos.push({
        _id: idStr,
        task,
        isCompleted,
        userId
    });

    res.status(201).json({
        status: "SUCCESS",
        reason: ""
    });
});

// update

// delete

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});