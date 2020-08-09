import React from 'react';
import Heading from './Heading';
import Card from './Card';

import {Link} from 'react-router-dom';

function Home({recipe}) {
    return (
        <div>
            <Heading />

            {/* <Link to={`/${recipe.id}`}> */}
                <div className="cards">
                    {
                    recipe.map(({id,...otherProps}) => <Card key={id} {...otherProps} />)
                    } 
                </div>
            {/* </Link> */}
        </div>
    )
}

export default Home
