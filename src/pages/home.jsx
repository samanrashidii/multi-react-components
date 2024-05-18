import reactLogo from '../assets/react.svg'
import ComponentBox from '../components/ComponentBox';

function home () {
    return (
        <div className="home">
            <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
            <h1>React Components</h1>
            <div
                className='components-wrapper mt-1'
            >
                <ComponentBox
                    name="music"
                    image="spotify"
                />
                <ComponentBox
                    name="weather"
                    image="aiweather"
                />
                <ComponentBox
                    name="product"
                    image="amazon"
                />
            </div>
        </div>
    )
}

export default home;