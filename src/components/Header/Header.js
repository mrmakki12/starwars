import React from "react";

export const Header = () => {

    return (
        <section className="py-5 text-center container" data-testid='header'>
            <div className="row py-lg-5">
                <div className="col-lg-6 col-md-8 mx-auto">
                    <h1 className="fw-heavy">Welcome To Starwars-Pedia!</h1>
                    <p className="lead text-muter">May The Source Code Be With You...</p>
                </div>
            </div>
        </section>
    )
}