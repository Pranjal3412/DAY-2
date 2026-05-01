/*
-server create krna 
- server ko config krna

*/


const express = require("express")


const app = express() /*server create ho jata hai*/

app.use(express.json())

const notes =  [
    // {
    //     title: "test title 1",
    //     description: "test description 1"
    // }
]


app.get("/", (req,res)=>{
    res.send("hello world")
})

/*POST /notes
*/
app.post("/notes",(req,res)=>{
    console.log(req.body)
    notes.push(req.body)

    console.log(notes);
    
    res.send("Note Created")
    
})

app.get("/notes",(req,res)=>{
    res.send(notes)
})

/*Delete /notes */
/*params */

/*delete /notes/3 */
app.delete("/notes/:index",(req,res)=>{
   delete notes[ req.params.index]
   res.send("note deleted successfully")
}) //jis v note ka data user delete krna chahta hai uss note ka index user slas ke baad likhega
//: ka use dynamic index ke liye hota hai

/*PATCH /notes/:index */
/*req.body = {description :- "sample modified description"}*/

app.patch("/notes/:index",(req,res)=>{
    notes[req.params.index].description = req.body.description
    res.send("Note updated successfully")
})
module.exports = app