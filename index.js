
import express from 'express'

const app = express();

const json = {
    "name": "Vishu Bansal",
    "age": 25,
    "email": "vishu.bansal@example.com",
    "skills": [
      "C++",
      "Python",
      "SQL",
      "PL/SQL",
      "Data Structures",
      "Algorithms"
    ],
    "experience": {
      "company": "Oracle",
      "role": "Software Developer 1",
      "years": 0
    },
    "projects": [
      {
        "name": "Real-Time Dashboard",
        "framework": "CodeIgniter 4",
        "database": "PostgreSQL",
        "features": [
          "HMVC architecture",
          "Data visualization",
          "Real-time updates"
        ]
      }
    ],
    "interview_preparation": {
      "focus_areas": [
        "Object-Oriented Design",
        "Software Lifecycle",
        "Optimization",
        "Problem Solving"
      ],
      "upcoming_interviews": [
        {
          "company": "Oracle",
          "role": "SQL Developer",
          "level": "Fresher"
        }
      ]
    }
  }
  

app.get('/',(req,res)=>{
    res.send(`Hello`)
})
app.get('/test',(req,res)=>{
    res.send(`Test branch`)
})
app.get('/json',(req,res)=>{
    res.send(json)
})
app.listen(3000,()=>{
    console.log(`working`);
    
})