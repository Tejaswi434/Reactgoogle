import React from 'react'


import {useSelector} from "react-redux"
function Form() { 


    let data = useSelector((state)=>{
       return state ;


    })
  return (
    <div>
             <div class="container">
        <table className="table table-bordered w-50">
            <thead>
                <tr>
                    <th>Balance</th>    
                    <th>Name</th>
                    <th>MobileNUmber</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>
                          {data.amount}
                    </th> 
                    <th>
                          {data.name}
                    </th>
                    <th>
                          {data.mobileNumber}
                    </th>
                </tr>
            </tbody>
        </table>
             </div>
    </div>
  )

}

export default Form