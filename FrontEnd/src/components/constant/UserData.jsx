import React, { useEffect, useState } from 'react'
import axios from 'axios'

const UserData = () => {
    
  const [data, setData] = useState([]);
  
    const getUserData = async () => {
        const UserData = await axios.get("http://localhost:8000/get").then((res) => {
          if(res?.status === 200){
            console.log(res?.data);
            setData(...data, res?.data);
          }
          else{
            console.log("something went wrong!");
          }
        })
    }

    useEffect(() => {
        getUserData();
    },[])
  
    return (
    <div>
      <h1>{data?.map((value) => {
          return(
            <div key={value?.id}>
              <p>{value?.name}</p>
              <p>{value?.email}</p>
              <p> {value?.password} </p>
            </div>
          )
      })}</h1>
    </div>
  )
}

export default UserData
