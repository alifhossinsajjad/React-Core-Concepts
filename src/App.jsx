
import './App.css'
import ToDo from './Todo'; 
import Actor from './Actor';
import Student from './Student'

function App() {

  const actors = ["wich","brusly","jony dev", "pitter purker", "abigal morsi"]

  const students = [
    {id : 1, name:"Alif", department : "Science" ,section : "A"},
    {id : 2, name:"Saiful", department : "Science" ,section : "B"},
    {id : 3, name:"Alif Hossin", department : "Arts" ,section : "C"},
    {id : 4, name:"Arfan", department : "commerce" ,section : "D"},
    {id : 5, name:"Rasibul", department : "Computer of Science" ,section : "B"},
    {id : 6, name:"Apon", department : "Computer Networking" ,section : "D"},
    {id : 7, name:"Sabbir", department : "Software Enginner" ,section : "A"},
    {id : 8, name:"Alamin", department : "Civil" ,section : "D"},
    {id : 9, name:"Emon", department : "Textile" ,section : "C"},
  ]

  // const time = 50;
  return (
    <>
      <h1>Vite + React</h1>

      {
        students.map(student => <Student student ={student}/>)
      }

    {
      actors.map(actor => <Actor actor = {actor}/>)
    }


      {/* <ToDo task="learn react" isDone={true} time={time}/>
      <ToDo task="Revise js" isDone={false} time={time}/>
      <ToDo task="Peactice more than 8 hours" isDone={true} time="100"/> */}


      {/* <Person/>
      <Pet/>
      <Developer name="Alif" tech= "js"/>
      <Developer name="Sami" tech="python"/>
      <Developer name="sabbir" tech="prisma"/>
      <Developer name="rasibul" tech="java"/>
      <Device name="laptop" price="20000"/>
      <Device name="samsung S20" price="200000"/>
      <Device name="iphone 17 pro max" price="160000"/>
      <Device name="Huawai" price="140000"/>
      <Device name="oppo reno 7" price="50000"/>
      <Device name="Poco 6 pro" price="35000"/>
      <Players name="alex hels" runs="10000"/>
      <Players name="koholi" runs="70000"/>
      <Players name="jos butller" runs="14000"/>
      <Players name="ABD" runs="20000"/>
      <Players name="devid malan" runs="19000"/> */}
    </>
  )
}


function Players ({name, runs}) {
  return (
    <div style={{
      border:"2px solid red",
      borderRadius:"20px",
      marginBottom:"20px"
    }}>
      <h3>name : {name} </h3>
      <h3>runs : {runs} </h3>
    </div>
  )
}

function Device (props) {
  return (
    <div>
      <h1 style={{
        color:"greenyellow"
      }}>
        name : {props.name} 
      </h1>

      <p style={{
        fontSize:"25px",
        fontWeight:"bold",
        color:"red"
      }}>
        price : {props.price}
      </p>
    </div>
  )
}

function Developer (props){
  return(
    <div style={{
      border:"2px solid red",
      borderRadius:"20px",
      marginBottom:"20px"
    }}>
      <h3>Developer : {props.name} </h3>
      <h3>Technology : {props.tech} </h3>
    </div>
  )
}

function Person() {
  const age = 21;
  const name = "Alif mia"
  return(
    <p>I am a person {name} {age} </p>
  )
}

function Pet () {
  return (
    <p>This is my pet list</p>,
    <ul style={{
      listStyle:"none"
    }}>
      <li>Dog</li>
      <li>Cat</li>
      <li>Bird</li>
      <li>Bear</li>
    </ul>
  )
}

export default App
