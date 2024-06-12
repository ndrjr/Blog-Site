import express from 'express';
import bodyParser from "body-parser";
var titles=[];
var blogs=[];
const app=express();
const port=3000;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",(req,res)=>{
    res.render("index.ejs");
});

app.get("/view",(req,res)=>{
    res.render("view.ejs",{
        viewt:titles,
        viewb:blogs,
    });
});

app.post("/create",(req,res)=>{
    res.render("create.ejs");
});
app.post("/view",(req,res)=>{
    const t=req.body["titl"];
    const b=req.body["text"];
    titles.push(t);
    blogs.push(b);
    res.render("view.ejs",{
        viewt:titles,
        viewb:blogs,
    });
});

app.post("/read",(req,res)=>{
    const ind=req.body["index"];
    const t2=req.body["topic"];
    const b2=req.body["blog"];
    res.render("read.ejs",{
        readt:titles[ind],
        readb:blogs[ind],
    });
});

app.post("/edit",(req,res)=>{
    const ind2=req.body["index2"];
    res.render("edit.ejs",{
        editind:ind2,
        editt:titles[ind2],
        editb:blogs[ind2],
    });
});

app.post("/edit2",(req,res)=>{
    const t3=req.body["t3"];
    const b3=req.body["b3"];
    const i3=req.body["index3"];
    titles[i3]=t3;
    blogs[i3]=b3;
    res.render("view.ejs",{
        viewt:titles,
        viewb:blogs,
    });
});
app.post("/delete",(req,res)=>{
    const i4=req.body["index4"];
    titles.splice(i4, 1);
    blogs.splice(i4,1);
    res.render("view.ejs",{
        viewt:titles,
        viewb:blogs,
    });
});

app.listen(port,()=>{
    console.log("Server listening");
});
