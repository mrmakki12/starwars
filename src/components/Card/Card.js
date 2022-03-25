import React from "react";

export const Card = ({category, data}) => {

    if(category === 'films') {
        return (
            <div className="col" data-testid='card'>
                <div className="card shadown-sm">
                    <div className="card-body">
                        <p><b>Title: </b>{data.title}</p>
                        <p><b>Episode: </b>{data.episode_id}</p>
                        <p><b>Director: </b>{data.director}</p>
                        <p><b>Producer(s): </b>{data.producer}</p>
                    </div>
                </div>
            </div>
        )
    } else if (category === 'people') {
        return (
            <div className="col" data-testid='card'>
                <div className="card shadown-sm">
                    <div className="card-body">
                        <p><b>Name: </b>{data.name}</p>
                        <p><b>Homeworld: </b>{data.homeworld}</p>
                        <p><b>Gender: </b>{data.gender}</p>
                        <p><b>Mass: </b>{data.mass}</p>
                    </div>
                </div>
            </div>
        )
    } else if (category === 'starships') {
        return (
            <div className="col" data-testid='card'>
                <div className="card shadown-sm">
                    <div className="card-body">
                        <p><b>Name: </b>{data.name}</p>
                        <p><b>Model: </b>{data.model}</p>
                        <p><b>Manufacturer: </b>{data.manufacturer}</p>
                        <p><b>Cargo Capacity: </b>{data.cargo_capacity}</p>
                        <p><b>Starship class: </b>{data.starship_class}</p>
                    </div>
                </div>
            </div>
        )
    } else if (category === 'vehicles') {
        return (
            <div className="col" data-testid='card'>
                <div className="card shadown-sm">
                    <div className="card-body">
                        <p><b>Name: </b>{data.name}</p>
                        <p><b>Model: </b>{data.model}</p>
                        <p><b>Manufacturer: </b>{data.manufacturer}</p>
                        <p><b>Cargo Capacity: </b>{data.cargo_capacity}</p>
                        <p><b>Vehicle class: </b>{data.vehicle_class}</p>
                    </div>
                </div>
            </div>
        )
    } else if (category === 'species') {
        return (
            <div className="col" data-testid='card'>
                <div className="card shadown-sm">
                    <div className="card-body">
                        <p><b>Name: </b>{data.name}</p>
                        <p><b>Language: </b>{data.language}</p>
                        <p><b>Designation: </b>{data.designation}</p>
                        <p><b>Classification: </b>{data.classification}</p>
                        <p><b>Average Lifespan: </b>{data.average_lifespan} years</p>
                    </div>
                </div>
            </div>
        )
    } else if (category === 'planets') {
        return (
            <div className="col" data-testid='card'>
                <div className="card shadown-sm">
                    <div className="card-body">
                        <p><b>Name: </b>{data.name}</p>
                        <p><b>Climate: </b>{data.climate}</p>
                        <p><b>Population: </b>{data.population}</p>
                        <p><b>Gravity: </b>{data.gravity}</p>
                        <p><b>Terrain: </b>{data.terrain}</p>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="col" data-testid='card'>
                <div className="card shadown-sm">
                    <div className="card-body">
                        <h1>Test Card</h1>
                    </div>
                </div>
            </div>
        )
    }

}