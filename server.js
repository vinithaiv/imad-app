var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));




var articles = {
    'article-one': { 
    title: 'Article One| Vinitha I V',
    heading:'Article One',
    date: 'Aug 21 2017' ,
    content:
          `<p>This is the cnten of my article one article oneThis is the cnten of my article one article oneThis is the cnten of my article one article one
           </p>
           
           <p>This is the cnten of my article one article oneThis is the cnten of my article one article oneThis is the cnten of my article one article one
           </p>
           
           <p>
       This is the cnten of my article one article oneThis is the cnten of my article one article oneThis is the cnten of my article one article one
           </p>`
           
 },

'article-two' : { 
    title: 'Article Two| Vinitha I V',
    heading:'Article Two',
    date: 'Aug 22 2017' ,
    content:
          `<p>This is the cnten of my article one article oneThis is the cnten of my article one article oneThis is the cnten of my article one article one
           </p>
           
           <p>This is the cnten of my article one article oneThis is the cnten of my article one article oneThis is the cnten of my article one article one
           </p>
           
           <p>
       This is the cnten of my article one article oneThis is the cnten of my article one article oneThis is the cnten of my article one article one
           </p>`
           
},
'article-three' : { 
    title: 'Article Three| Vinitha I V',
    heading:'Article Three',
    date: 'Aug 23 2017' ,
    content:
          `<p>This is the cnten of my article one article oneThis is the cnten of my article one article oneThis is the cnten of my article one article one
           </p>
           
           <p>This is the cnten of my article one article oneThis is the cnten of my article one article oneThis is the cnten of my article one article one
           </p>
           
           <p>
       This is the cnten of my article one article oneThis is the cnten of my article one article oneThis is the cnten of my article one article one
           </p>`
           
}

};

function createTemplate (data) {
    
  var title = data.title;
  var date = data.date;
  var heading = data.heading;
  var content = data.content;

var htmlTemplate = `
  <html>
     <head>
        <title>
            ${title}
        </title>
       
        <link href="ui/style.css" rel="stylesheet"/>
    </head>
    
    <body>
    <div class="container">
       <div>
           <a href="/">Home</a>
       </div>
       <h3>
          ${heading}
       </h3>
       <div>
           ${date}
       </div>
       <div>
           ${content}
        </div>   
    </div>
    
    </body>
    </html>
    `;

return htmlTemplate;

}
    
    
    
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter=0;
app.get('/counter',function(req,res){
    counter=counter+1;
    res.send(counter.toString());
});


 var names=[];
 app.get('/submit-name',function(req,res) { //URL: /submit-name?name=xxxx
     
     //get name from request
     
     var name = req.query.name;
     //JSON Javascript object notification
     names.push(name);
     res.send(JSON.stringify(names));
 });
 

app.get('/:articleName', function (req, res) {
    var articleName=req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
