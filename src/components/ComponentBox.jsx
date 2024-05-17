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
            <h2>{name}</h2>
        </Link>
    )
}

export default ComponentBox;