import { Link } from 'react-router-dom';
import { getImageURL } from '../utils/image-util';

function ComponentBox ({name, image}) {
    return (
        <div
            className="component-box"
        >
            <img
                src={getImageURL('spotify')}
                alt={`${image} logo`}
            />
            <Link to={name}>
                {name}
            </Link>
        </div>
    )
}

export default ComponentBox;