import React, {useEffect, useState} from "react";
// components
import { Card } from '../Card/Card.js';
// import search term/ category
import { useSelector } from "react-redux";
import { selectStoreCategory, selectStoreSearch } from "../Search/searchSlice";
// api
import StarwarsAPI from "../../Api/StarwarsAPI";

export const Results = () => {

    // search term
    const searchTerm = useSelector(selectStoreSearch);

    // category 
    const category = useSelector(selectStoreCategory);

    // result from api call
    const [results, setResults] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await StarwarsAPI.get(`/${category}`);
                setResults(response.data.results);
                console.log(response);
            } catch (err) {

            }
        }
        fetchData();
    }, [category]);

    return (
        <section className="album py-5 bg-secondary bg-opacity-60">
            <div className="container">
                <div className="row rows-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    {
                        results.map((result, index) => {
                            return <Card key={index}/>
                        })
                    }
                </div>
            </div>
        </section>
    )
}