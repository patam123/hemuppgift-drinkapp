import React, {useState} from 'react';
import drinks from "../data/drinks.json";
import Card from "../components/card";
import "../design/explore.css"


const Explore = () => {

    const [searchChars, setSearchChars] = useState();
    const [filteredDrinks, setFilteredDrinks] = useState();

    const search = (e) => {
        let drinkFilter = drinks.cocktails.filter(elem => (elem.name.toLocaleLowerCase().includes(e)));
        setFilteredDrinks(drinkFilter);
    }
    const content = () => {
        return filteredDrinks.map((drink, index)=> (
            <Card key={index} description={drink.preparation} name={drink.name} image={drink.image}/>
        ))
    }
  

    const handleSubmit = (e) => {
        e.preventDefault();
        search(searchChars);
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