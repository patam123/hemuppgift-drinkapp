import React, {useState, useEffect} from 'react';


const SearchForm = ({handleSubmit}) => {

    const [searchChars, setSearchChars] = useState();

    

    return (
        <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setSearchChars(e.target.value)} placeholder="Search here"></input>
        <button>Search</button>
        </form>
    );
}

export default SearchForm;