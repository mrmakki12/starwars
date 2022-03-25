import React, { useState } from "react";

export const Search = () => {

    const [category, setCategory] = useState('films');

    const handleSubmit = () => {

    }

    return (
        <section className="text-center bg-secondary bg-opacity-50" data-testid='search'>
            <div className="row py-lg-5">
                <div className="col-lg-6 col-md-8 mx-auto">
                    <h2 className="fw-heavy">Find Starwars Information By Category!</h2>
                </div>
                <div>
                    <div>
                        <select onChange={(e) => setCategory(e.target.value)}>
                            <option value='films' selected>Films</option>
                            <option value='people'>People</option>
                            <option value='planets'>Planets</option>
                            <option value='species'>Species</option>
                            <option value='starships'>Starships</option>
                            <option value='vehicles'>Vehicles</option>
                        </select>
                        <input type='text'></input>
                        <button type="submit">Search!</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
