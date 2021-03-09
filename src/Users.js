import React,{useState,useEffect,Fragment} from 'react'
import {Table} from 'react-bootstrap'
//listing
//single span me bhi rkhskty hain or bina span ke bhi list ko
//bina state ke bhi krskty hain 
//const ke andr bhi leskthy hain
function Users()
{
    // const user=[
    //     {name:'shabahat',age:'23',address:'r-35 block'},
    //     {name:'rauf',age:'24'},
    //     {name:'shahnawaz',age:'21'},
    //     {name:'mudddasir',age:'20'},
    // ]
    //for conditions
    //<> </> without div
    // const [user,setUser]=useState([
    //     {name:'shabahat',age:'23',address:'r-35 block'},
    //     {name:'rauf',age:'24'},
    //     {name:'shahnawaz',age:'21'},
    //     {name:'mudddasir',age:'20'},
    // ])
//blank state
    const [user,setUser]=useState([])
    useEffect(()=>{
        fetch("http://dummy.restapiexample.com/api/v1/employees").then((data)=>{
            console.warn("data",data)
            //data.json promise hai values chaye hotin hain issy
            data.json().then(result=>{
                console.warn("result",result)
                setUser(result.data);
            })
        })
        
},[])
    return(
            <Fragment>
            <h1>User Listing is here</h1>
            <h1>User Listing is here</h1>
            <h1>User Listing is here</h1>

            {/* {
                // user.map(
                //     (item,i)=>
                //     <div key={i}>
                //        <span> {item.name}</span>
                //        <span>{item.age}</span>
                //        <span>{item.address}</span>
                 
                //         </div>
                // )

                // user.length===5?
                // {

                // }
                user.length===4?<div>Yes,this is right</div>:<div> No length should be 4 </div>
            } */}

{/* <Button variant="primary">Primary</Button>{' '}
  <Button variant="secondary">Secondary</Button>{' '}
  <Button variant="success">Success</Button>{' '}
  <Button variant="warning">Warning</Button>{' '}
  <Button variant="danger">Danger</Button> <Button variant="info">Info</Button>{' '}
  <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>{' '}
  <Button variant="link">Link</Button> */}

<Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Salary</th>
      <th>Age</th>
    </tr>
    {
        user.map((item,index)=>
        <tr key={index}>
<td>
{item.id}
</td>
<td>
{item.employee_name}

</td>
<td>
{item.employee_salary}

</td>
<td>
{item.employee_age}

</td>

        </tr>
        )
    }
  </thead>
  <tbody>
      {/* {
          user.map((item,index)=><tr key={index}>
              <td>
           {index}
              </td>
              <td>
                  {item.name}
              </td>
              <td>
                 {item.age}
              </td>
              <td>
                 {item.address}
            
              </td>
              </tr>
          )

      } */}

    
  { /* <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr> */}
  </tbody>
</Table>
            </Fragment>
        
    
    )
}
export default Users