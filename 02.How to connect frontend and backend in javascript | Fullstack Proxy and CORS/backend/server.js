import express from 'express';

const app=express();

// app.get('/',(req,res)=>{
//     res.send('Server is ready');
// })

//get a list of 5 jokes
app.get('/api/jokes',(req,res)=>{
    const jokes = [
        { id: 1, title: "Joke1", content: "This is joke 1" },
        { id: 2, title: "Joke2", content: "This is joke 2" },
        { id: 3, title: "Joke3", content: "This is joke 3" },
        { id: 4, title: "Joke4", content: "This is joke 4" },
        { id: 5, title: "Joke5", content: "This is joke 5" },
      ];
    
    res.send(jokes);
})






const port=process.env.PORT || 8000;

app.listen(port,(req,res)=>{
    console.log(`Serve at http://localhost:${port}`);
});

