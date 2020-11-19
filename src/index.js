const express=require('express');
const app=express();
const path=require('path');
//const ejsLint = require('ejs-lint');

//settings
app.set('port',4000);
app.set('views',path.join(__dirname,'views'));
app.engine('html',require('ejs').renderFile);
app.set('view engine','ejs');

//middleware


//routes
// app.get('/',(req,res)=>{
// 	res.render('index',{title: "First Website"});
	//res.sendFile(path.join(__dirname,'views/index.html'));
//res.send(`Hello world`);

app.use(require('./routes/index'));

// });


//static files
app.use(express.static(path.join(__dirname,'public')));//carpeta public desde el navegador

//listening the server
app.listen(app.get('port'),()=>{
console.log('Server on port',app.get('port'));	
});







