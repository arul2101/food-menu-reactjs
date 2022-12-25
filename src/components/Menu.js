import React from "react";

export default function Menu(props) {
    const menu = props.items;
    const element = menu.map((item) => {
        return (
            <div key={item.id} className="menu-item">
                <img src={item.img} className="image"/>
                <div className="menu-header">
                    <h2>{item.nama}</h2>
                    <h4>{item.price}</h4>
                </div>
                <p className="desc">{item.desc}</p>
            </div>
        )
    });

    return (
        <div className="container-menu">
            {element}
        </div>
    )
}