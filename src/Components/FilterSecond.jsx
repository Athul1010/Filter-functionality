import React, { useEffect, useState } from 'react'

const FilterSecond = () => {
    let items = [
        {
            name: "Athul",
            age: 24
        },
        {
            name: "Raj",
            age: 23
        },
        {
            name: "Vyshanav",
            age: 23
        },
        {
            name: "Arun",
            age: 24
        },
        {
            name: "Ajay",
            age: 23
        },
        {
            name: "Rahul",
            age: 24
        }
    ];


    let [value, setValue] = useState(items)



    // let handleChange = (age) => {

    //     const num = Number(age)

    //     const FilterData = items.filter(item => item.age === num)
    //     console.log(typeof(FilterData));

    //     setValue(FilterData)
    // }

    let handleChange = (ages) => {

        // const num = Number(age)

        const FilterData = items.filter(item => item.age === Number(ages))
        console.log(typeof(FilterData));

        setValue(FilterData)
    }

    return (
        <div>
            <div>
                <input type="text" onChange={(e) => handleChange(e.target.value)} />
            </div>
            <ul>
                {value.map((data, index) => (
                    <div key={index}>
                        <li>{data.name}</li>
                        <li>{data.age}</li>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default FilterSecond