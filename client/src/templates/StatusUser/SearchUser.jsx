import React from 'react'

export default function SearchUser({func}) {
    return (
        <div className="search-user">
            <input type="text" 
            onChange={e => func(e.target.value)}
            placeholder="Search..."/>
        </div>
    )
}
