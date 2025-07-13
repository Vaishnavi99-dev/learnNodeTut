import http from 'http';
const PORT = 3000;

// This line creates the server.
const server = http.createServer((req,res)=>{

    const parseUrl = new URL(req.url, `http://${req.headers.host}`);
    const path = parseUrl.pathname;

    
    if(path == "/"){
        res.writeHead(200, { 'Content-Type' : 'text/plain'});
        res.end("Welcom to my Node Js Server");
    } else if(path == "/home"){
        res.writeHead(200, { 'Content-Type' : 'text/plain'});
        res.end("Welcome to Home Page.");
    } else {
        res.writeHead(404,{'Content-Type':'text/plain'});
        res.end("404 Page Not found");
    }
});

server.listen(PORT,()=>{
    console.log(`Server is up and Running`);
});