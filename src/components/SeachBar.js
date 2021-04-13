import '../styles/SeachBar.css'
import SearchIcon from '@material-ui/icons/Search';
import React,{useState} from 'react'
import { IconButton } from '@material-ui/core';
import { usePinContext } from '../api/context';

const SeachBar = () => {
    const {getPhotos} = usePinContext()
    const [query,setQuery] = useState("")
    const handleChange = (e) => {
        setQuery(e.target.value)
    }
    const handleClick = (e) => {
        e.preventDefault()
        if(query.length){
        getPhotos(query)
        }
    }
    return (
        <form className="searchbar" onSubmit={handleClick}>
            <input type="text" placeholder="Search" onChange={handleChange} value={query}/>
            <IconButton onClick={handleClick} type="submit">
                <SearchIcon />
            </IconButton>
        </form>
    )
}

export default SeachBar
