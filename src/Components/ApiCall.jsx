// import axios from 'axios'
// import React, { useEffect, useState } from 'react'

// const ApiCall = () => {

//   let [value, setValue] = useState([])


//   useEffect(() => {
//     axios.get('https://jsonplaceholder.typicode.com/posts')
//       .then(res => setValue(res.data))
//       .then(error => console.log('fetching error', error))
//   }, [])

//   return (
//     <div>
//       {value.map((x) => (
//         <h1>{x.title}</h1>
//       ))}
//     </div>
//   )
// }

// export default ApiCall


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const ApiCall = () => {
    const [songs, setSongs] = useState([]);
    const [filteredSongs, setFilteredSongs] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        // Function to fetch data from API using Axios
        const fetchData = async () => {
            try {
                const response = await axios.get('https://cms.samespace.com/items/songs');
                setSongs(response.data.data); // Update songs state with API data
                setFilteredSongs(response.data.data); // Initialize filtered songs with all songs
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData(); // Call the fetch data function when component mounts
    }, []);

    // Handle input change for filtering
    const handleChange = (event) => {
        const searchTerm = event.target.value;
        setSearchTerm(searchTerm);

        const filteredData = songs.filter((song) =>
            song.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredSongs(filteredData);
    };

    return (
        <div>
            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%', backgroundColor: '#333' }}
            >
                <InputBase
                    sx={{ ml: 1, flex: 1, color: 'rgb(178 177 177)' }}
                    placeholder="Search Songs by Name"
                    value={searchTerm}
                    onChange={handleChange}
                />
                <IconButton type="submit" sx={{ p: '10px', color: 'rgb(178 177 177)' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Paper>

            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {filteredSongs.map((song) => (
                    <li key={song.id} style={{ marginBottom: '10px' }}>
                        <div>Name: {song.name}</div>
                        <div>Artist: {song.artist}</div>
                        <div>URL: {song.url}</div>
                        {/* Add more details as needed */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ApiCall;

