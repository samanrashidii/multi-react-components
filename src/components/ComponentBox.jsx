import { Link } from 'react-router-dom';
import { getImageURL } from '../utils/image-util';

function ComponentBox ({name, image}) {
    return (
        <Link
            to={name}
            className='component-box'
        >
            <img
                src={getImageURL('spotify')}
                alt={`${image} logo`}
            />
            <h3>{name}</h3>
        </Link>
    )
}

export default ComponentBox;