import React, {useState, useEffect} from 'react';
import SearchForm from "../components/searchform";
import drinks from "../data/drinks.json";
import { useHistory } from "react-router-dom";
import Card from "../components/card";
import "../design/explore.css"


const Explore = () => {

    const [searchChars, setSearchChars] = useState();
    const [filteredDrinks, setFilteredDrinks] = useState();
    const history = useHistory();

    const search = (e) => {
        let drinkFilter = drinks.cocktails.filter(elem => (elem.name.toLocaleLowerCase().includes(e)));
        setFilteredDrinks(drinkFilter);
        console.log(drinkFilter);
    }
    const content = () => {
        return filteredDrinks.map(drink => (
            <Card name={drink.name} image={drink.image}/>
        ))
    }
    // useEffect(() => {
        
    //     ))
    // },[])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("hejhej")
        search(searchChars);
        // history.push("/explore/99")
    }

    return (
        <div id="explore">
        <h1>Find your favourite drink!</h1>
        <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setSearchChars(e.target.value)} placeholder="Search here"></input>
        <button>Search</button>
        </form>
        {filteredDrinks ? filteredDrinks.length > 0 ? <div id="card-container">{content()}</div> : <p>Sorry your drink could not be found.</p> :""}
        </div>

    );
}

export default Explore;