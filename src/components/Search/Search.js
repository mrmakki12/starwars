import React, { useState } from "react";
// dispatcher
import { useDispatch } from "react-redux";
// slice methods
import { setStoreCategory, setStoreSearchTerm } from "./searchSlice";

export const Search = () => {

    // dispatch actions to store
    const dispatch = useDispatch();

    const [category, setCategory] = useState('films');

    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setStoreSearchTerm(searchTerm));
        dispatch(setStoreCategory(category));
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
                            <option value='films' defaultValue={'films'}>Films</option>
                            <option value='people'>People</option>
                            <option value='planets'>Planets</option>
                            <option value='species'>Species</option>
                            <option value='starships'>Starships</option>
                            <option value='vehicles'>Vehicles</option>
                        </select>
                        <input type='text' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}></input>
                        <button type="submit" onClick={(e) => handleSubmit(e)}>Search!</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
