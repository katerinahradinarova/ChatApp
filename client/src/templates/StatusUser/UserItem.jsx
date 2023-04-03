import React from 'react';


export default function UserItem({img, name, link}) {
    return (
        <div className="block-users__user">
            <div className="block-users__img">
                <img src={img} alt="img user" />
            </div>
            <div className="block-users__txt">
                <p className="block-users__txt-name">{name}</p>
                <p className="block-users__txt-link">{link}</p>
            </div>
        </div>
    )
}
