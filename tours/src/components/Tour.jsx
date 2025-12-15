import React, { useState } from 'react';

export default function Tour({ tour, tours, setTours }) {
    const { id, name, info, image, price } = tour;
    const [showMore, setShowMore] = useState(false);

   

    return (
        <>
            <article className="single-tour">
                <img src={image} alt="Best of Paris in 7 Days Tour" className="img" />
                <span className="tour-price">{price}</span>
                <div className="tour-info">
                    <h5>{name}</h5>
                    <p>

                        {showMore?info:`${info.substring(0,200)}`}
                        <button className="info-btn" onClick={()=>setShowMore(!showMore)}>{showMore?"ReadLess":"ReadMore"}</button>
                       
                    </p>
                    <button className="delete-btn btn-block btn" onClick={() => {
                        const removeTour = tours.filter((tour) => tour.id !== id);
                        setTours(removeTour);
                    }}>
                        not interested
                    </button>
                </div>
            </article>
        </>
    );
}