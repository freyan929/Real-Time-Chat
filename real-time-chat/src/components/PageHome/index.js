import './style.css';

const PageHome = () => {
    return (
        <div className='home-container'>
            <div className='home-header1'>
                <h1>{'Welcome to'}</h1>
            </div>
            <div className='home-header2'>
                <h1>{'the'}</h1>
                <h2>{'Real Time Chat'}</h2>
            </div>
            <div className='home-header3'>
                <h1>{'by GT Web Dev'}</h1>
            </div>

            <div className='start-container'>
                <button><strong>{'Start'}</strong></button>
            </div>
        </div>
    );
}

export default PageHome 