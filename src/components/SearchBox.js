import React from 'react';

const SearchBox = ({ searchfield, searchChange}) => {
    return (
        <div className="pa2">
            <input className="pa3 ba b--gold bg-light-yellow ma3" type="search" placeholder="search character by name" onChange={searchChange}/>
        </div>
        
    )

}

export default SearchBox;