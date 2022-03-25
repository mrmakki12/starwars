import React, {useEffect, useState} from "react";
// import search term
import { useSelector } from "react-redux";
import { selectSearch } from "../Search/searchSlice";
// api
import StarwarsAPI from "../../Api/StarwarsAPI";

export const Results = () => {

    // search term
    const searchTerm = useSelector(selectSearch);

    const [results, setResults] = useState([]);

    useEffect(() => {

    }, []);

    return (
        <section className="album py-5 bg-secondary bg-opacity-60">
            <div className="container">
                <div className="row rows-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

                </div>
            </div>
        </section>
    )
}