export default function Students ({student}) {
    return(
        <div style={{
      border:"2px solid red",
      borderRadius:"20px",
      marginBottom:"20px"
    }}>
           <h2> Name : {student.name} </h2>
           <p>Department : {student.deparment} </p>
        </div>
    )
}