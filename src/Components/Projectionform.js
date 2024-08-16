import React , {useState} from 'react'


import { useDispatch } from 'react-redux'
function Projectionform() { 

    const [data,setData] = useState("");
        let dispatch = useDispatch();
  return (
    <div className='container'>

        <div className='row'>

  <input  value={data} type="number" onChange={(e)=>{
    let content=e.target.value

    setData(content)}} className='col-2'/>

<button className="btn btn-primary col-1 mx-2" onClick= {(e)=>{
    dispatch({type: "deposit",payload :data})
    setData("")
}}  > DEPOSIT</button>
<button  className="btn btn-danger col-1 mx-2"onClick= {(e)=>{
    dispatch({type: "withdraw",payload :data})
    setData("")
}}  >withdraw</button>


        </div>
    </div>
  )
}

export default Projectionform