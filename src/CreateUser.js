import React,{useState} from 'react'


function CreateUser()
{
  

    const [name,setName]=useState("");
    const [age,setAge]=useState("");
    const [address,setAddress]=useState("");
    //makeUser define
    //onchange me value get krky set krdengy
    
function makeUser()
{
      //for collecting vlaues for text field we will make object 
    let data={name,age,address}
    console.warn("called",data);
}
    return (
<div>



    <h1>Make a new user</h1>

    <input type="text" onChange={(e)=>setName(e.target.value)} name="username" value={name}></input>
    <br></br>
    <br></br>

    <input type="text" onChange={(e)=>setAge(e.target.value)} name="age" value={age}></input>
    <br></br>
    <br></br>

    <input type="text" onChange={(e)=>setAddress(e.target.value)} name="address" value={address}></input>
    <br></br>
    <br></br>
    <br></br>

    <button onClick={makeUser}>
        Create User
    </button>

</div>


    )
}
export default CreateUser;