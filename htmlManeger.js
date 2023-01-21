const http = require('http');
const fs = require('fs');
const url = require('url')

const server =  http.createServer((req,res)=>{
    var path = url.parse(req.url).pathname
    switch (path){ //パスごとに読み取るファイルを変更
        case '/':
            fs.readFile('./index.html','UTF-8',(err,data)=>{
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write(data); //読み取ったHTMLをレスポンスで使用
                res.end();
            });
            break;

        case '/other.html':
            fs.readFile('./other.html','UTF-8',(err,data)=>{
                res.writeHead(200,{'Content-Type':'text/html'});
                res.write(data); //読み取ったHTMLをレスポンスで使用
                res.end();
            });
            break;
    }

});

server.listen(1221);