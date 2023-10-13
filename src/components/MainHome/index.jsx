
import logoCss from '../../assets/icons/css-3.svg'
import logoHtml from '../../assets/icons/html-5.svg'
import logoJavascript from '../../assets/icons/javascript.svg'
import logoReact from '../../assets/icons/react.svg'
import styled from 'styled-components';

const StylesMainHome = styled.main`
    * {
        text-align: center;
        margin: 0;
        padding: 0;
    }

    h1, p {
        margin: 0;
        padding: 1rem 2rem 1rem 2rem;
        color: var(--dark);
        text-align: left;
    }

    h1 {
        font-size: 3rem;
        font-weight: 700;
    }

    p {
        font-size: 2rem;
        font-weight: 500;
    }

    .content {
        height: 100vh;
        padding: 0 3rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        background: linear-gradient(var(--light), var(--light-stronger));
    }

    .initial-text {
        padding: 1rem;
        max-width: 55%;
        margin-left: 1rem;
        margin-bottom: 8rem;
    }

    .icons-stacks {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        gap: 2rem;
        max-width: 30%;
        margin-right: 4rem;
        margin-bottom: 5rem;
    }

    .icons {
        max-width: 150px;
        max-height: 150px;
    }
`


const MainHome = () => {
    return(
        <StylesMainHome>
            <main className='content'>
                <section className='initial-text'>
                    <h1>Welcome to my Porftolio</h1>
                    <p>Here I share some of my knowledge and my personal projects. Feel free to contact me and contribute with anything.</p>
                    <p>In the right you can see some of the technologies I used to create this website.</p>
                </section>
                <section className='icons-stacks'>
                    <img src={logoHtml} alt="html logo" className='icons'/>
                    <img src={logoCss} alt="css logo" className='icons'/> 
                    <img src={logoJavascript} alt="javascript logo" className='icons'/>
                    <img src={logoReact} alt="react logo" className='icons'/>
                </section>
            </main>
        </StylesMainHome>
    )
}

export default MainHome; 