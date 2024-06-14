import React, { useEffect, useState } from "react";

const Table = () => {

    let [user,setUser] = useState([])

    let [id,setId] =useState("")
    let [title,setTitle]=useState("")
    
    const [stateControl,setStateControl]=useState(false)//ith use cheyyunnath refresh button njekkathe button click cheyyumbol thanne add aakan vendi aan
   
    useEffect(() => {
        let fetchData = async () => {
            let responce = await fetch("https://fakestoreapi.com/products")
            let data = await responce.json()
            // console.log("data======>",data);
            setUser(data)
        }
        fetchData()
    }, [stateControl])
    
    let Remove = (id) =>{
        setUser(user.filter(x=>x.id!=id))
    }

    let handleRemove=(e)=>{
        e.preventDefault()
        let data2 = {id,title}
        fetch("https://fakestoreapi.com/products",{
        method:'POST',
        headers:{'content-type':'application/json'},
        body:JSON.stringify(data2)

        })
        setStateControl(!stateControl)
    }

  return (
    <div className="table">

            <table>
                <tr>
                    <th>No</th>
                    <th>title</th>
                </tr>
                {user.map((data) => (
                    
                    <tr>

                        <td>{data.id}</td>
                        <td>{data.title}</td>
                        <td><button onClick={()=>Remove(data.id)}>DELETE</button></td>
                    </tr>
                    
                 ))}
            </table>
            
            <form action="" onSubmit={handleRemove}>
                    <input type="text" placeholder="Enter the name" value={title} onChange={(e) => setTitle(e.target.value)}/>
                    <input type="number" placeholder="Type number" value={id} onChange={(e) => setId(e.target.value)} />
                    <button>Add here</button>
            </form>        

        </div>
  )
}

export default Table