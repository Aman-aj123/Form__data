import React, { useEffect, useState } from 'react'
import "./data.css"

const ShowData = () => {

    const [data, setData] = useState({})

    const fetchData = async () => {
        const URL = process.env.REACT_APP_API_URL
        try {
            const response = await fetch(`${URL}/fetchUsers`)
            const mainData = await response.json()
            setData(mainData)
            console.log(mainData)
        } catch (err) {
            console.log(`Some erro happens while loading the data with: ${err}`)
        }
    }

   
    useEffect(() => {
        fetchData()
    }, [])

   

    return (

        <div className='main'>
        <div className="UserDetails"> 
        {data.length > 0 ? (
            data.map((element) => {
                return (
                    <div className='user-items' key={element._id}>
                        <li>Username: <span className='data-value'> {element.name}</span></li>
                        <li>Email: <span className='data-value'> {element.email}</span></li>
                        <li>Password: <span className='data-value'> {element.password}</span></li>
                        <li>Number: <span className='data-value'> {element.number}</span></li>
                    </div>
                );
            })
        ) : (
            <p>No data available</p>
        )}
    </div>
    </div>
    )
}

export default ShowData