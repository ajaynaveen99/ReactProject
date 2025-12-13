import { useState } from "react";

export default function TodoSearch({ searchValue, setSearchValue ,handleSearch}) {
    


    return (<>

        <input type="text" placeholder="search" className="search-input"
            onChange={handleSearch} />

    </>)

}