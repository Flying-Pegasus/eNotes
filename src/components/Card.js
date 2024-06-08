import React from 'react'

export default function Card() {
    return (
        <>
            <div className="container d-flex gap-3">
                <div className="card" style={{ width: "18rem" }}>
                    <img src="https://i1.wp.com/hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/4e9a7794-1663012415.jpg?resize=780.jpeg" className="card-img-top" alt="Illustrator" />
                    <div className="card-body">
                        <h5 className="card-title">Ford Mustang Black Horse</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-success">Go somewhere</a>
                    </div>
                </div>
                <div className="card" style={{ width: "18rem" }}>
                    <img src="https://www.mustangspecs.com/wp-content/uploads/2020/08/Black-1969-Boss-429-1400x788.jpg" className="card-img-top" alt="Illustrator" />
                    <div className="card-body">
                        <h5 className="card-title my-3">1969 Ford Mustang</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-success">Go somewhere</a>
                    </div>
                </div>
            </div>


        </>
    )
}
