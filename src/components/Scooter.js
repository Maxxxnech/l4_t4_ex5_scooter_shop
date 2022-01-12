import React from "react";

export default function Scooter({handleClick, data}){
    var classes = ["card"];
    data.marked && classes.push('marked');

    return (
        <div className={classes.join(" ")} onClick={()=>handleClick(data.id)}>
            <div className="card-img">
                <img src={data.img} alt={data.name}></img>
            </div>
            <h3>{data.name}</h3>
            <p>Остаток заряда: {data.charge}</p>
            <p>Стоимость в час: {data.price}</p>
        </div>
    )

}
