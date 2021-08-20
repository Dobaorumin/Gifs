import { useState } from "react"
import "../css/Main.css"

export default function AddCategory({setCategories}){
    
    const [inputValue,setInputValue] = useState("")

    const handleChange = e => {
        setInputValue(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()

        if(inputValue.trim().length > 2) {
            setCategories( (estado) => [inputValue,...estado])
            setInputValue("")
        }
    }

    return(
        <>
        <form action="submit" onSubmit={handleSubmit}>
        <input
        className="search-input"
        placeholder="Search a GIF"
        type="text"
        value={inputValue}
        onChange={handleChange}
        />
        </form>
        </>
    )
}