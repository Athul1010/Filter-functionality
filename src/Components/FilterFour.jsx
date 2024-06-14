import React, { useEffect, useState } from 'react'

const FilterFour = () => {

    let items = [
        {
            name: "Athul",
            age: 24,
            xyz:"student"
        },
        {
            name: "Raj",
            age: 23,
            xyz:"work"
        },
        {
            name: "Vyshanav",
            age: 23,
            xyz:"work"
        },
        {
            name: "Arun",
            age: 24,
            xyz:"student"
        },
        {
            name: "Ajay",
            age: 23,
            xyz: "student"
        },
        {
            name: "Rahul",
            age: 24,
            xyz: "work"
        }
    ];   


    let [value, setValue] = useState(items)



    let handleChange = (value) => {

        const FilterData = items.filter(item => item.age === Number(value) || item.name.includes(value))
        console.log(typeof (FilterData));

        setValue(FilterData)
    }

    let handleFilter = (value) =>{
        const otherData = items.filter(item => item.xyz===value)
        setValue(otherData)
    }

    return (
        <div>
            <button onClick={()=>handleFilter("student")}>Student</button>   
            <button onClick={()=>handleFilter("work")}>Work</button>
            <div>
                <input type="text" onChange={(e) => handleChange(e.target.value)} />
            </div>
            <ul>
                {value.map((data, index) => (
                    <div key={index}>
                        <li>{data.name}</li>
                        <li>{data.age}</li>
                        <li>{data.xyz}</li>
                    </div>
                ))}
            </ul>

            
        </div>
    )
}

export default FilterFour