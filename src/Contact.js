import react,{useEffect,useState} from 'react'
import App from './App'
//functional component me this ni hota is lye props parameter liya
function Contact(props)
{
    //by default page
    //for updating setname will use and usesate("shabahat") is to give by default value
    //[] only use one time
    //[age] only use for age update or call hoga hook bs age pr
    // const[name,setName]=useState("shabahat");
    // const[age,setAge]=useState(27);
//     useEffect(()=>{
// console.warn("hello from hook")
// },[age])

// useEffect(()=>{
//     // console.warn("hello from hook")
//     console.warn("check props",props.name)
//     },[])
//     useEffect(()=>{
//         // console.warn("hello from hook")
//         console.warn("check props for update 2",props.name)
//         },[props.name])
//     let data="hi sir"
//agr <button onClick={console.warn("hello from click")}  <button onClick={function(){console.warn("hello from click")}}>
// function test()
// {
//     console.warn("test function")
// }
// const test=(e)=>
// {
// console.warn("test function",e);
// }
// const test=(e)=>
// {
// console.warn("test function",e.target);
// }
// const test=(e)=>
// {
// console.warn("test function",e.target.value);
// }
const [val,setVal]=useState("shabahat")

 const test=(e)=>
{
    console.warn("test function",e.target.value);
    //state update krni paregi
setVal(e.target.value)
}
    return(
        <div>
            
            {/* <h1>{data}</h1> */}

            {/* <h2>{props.name}</h2> */}
        
            <h1>Contact us Component</h1>
            {/* <button onClick={function(){console.warn("hello from click")}}>
                Click me

            </button> */}
            <input type="text" value={val} onChange={test}></input>

<button onClick={()=>alert(val)}>
                Click me

            </button>

            {/* <h2>{name}</h2>
            <h2>{age}</h2>
            <button onClick={()=>setName("shabahat ali chishti")}>
                Update Name
            </button>
            <button onClick={()=>setAge(28)}>
                Update Age
            </button> */}
        </div>
    )
}
export default Contact;

// constructor()
// {

// }
// componentDidMount(){

// }
// componentDidUpdate(){
    
// }
// componentWillUnmount(){
    
// }
