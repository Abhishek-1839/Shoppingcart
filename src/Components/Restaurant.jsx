import React from 'react'

function Restaurant({ restaurantData }) {
    const data = restaurantData;
    return (

        <div className="restaurant-list">
            {data.map((restaurat) => (
                <div className="restaurant-card">
                    <img className="restaurant-poster" src={restaurat.restaurant_thumb} alt={restaurat.restaurant_name} />
                    <h3 className="restaurant-name">{restaurat.restaurant_name}</h3>
                    <h5>Address - {restaurat.address}</h5>
                    <p style={{ margin: "0px" }}>Rating: ⭐{restaurat.average_rating} {restaurat.rating_text}</p>
                    <div className="style-card">
                        <p>Cost: Rs {restaurat.cost}/-</p>
                        <button>Add to Cart</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Restaurant