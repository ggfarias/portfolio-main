
import styled from 'styled-components';
import profilePicture from '../../assets/img-portfolio.jpeg'


const StylesMainAboutMe = styled.div`
    .page-content {
        background: linear-gradient(var(--light), var(--light-stronger));
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .main-container {
        max-width: 1280px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding: 2rem;
        margin-top: 3rem;
    }

    .photo-container {
        padding: 2rem;
        display: flex;
        flex-direction: column;
    }

    .photo-container button {
        margin-top: 2rem;
        font-size: 1.5rem;
        background-color: var(--dark);
        color: var(--light);
        border-radius: 10px;
        height: 2.75rem;
        border: 1px solid var(--dark);
        cursor: pointer;
        transition: all 0.2s linear;
    }

    button:hover{
        border-color: var(--grey-button);
        background-color: var(--grey-button);
    }

    .personal-photo {
        border-radius: 50%;
        max-width: 300px;
        max-height: 300px;
    }

    .text-content {
        color: var(--black);
        max-width: 50%;
        text-align: center;
        margin-left: 2.5rem;
    }

    .text-content h1 {
        font-size: 2rem;
        font-weight: 700;
        padding-bottom: 2rem;
    }

    .text-content p {
        font-size: 1.5rem;
        font-weight: 400;
        padding-bottom: 1rem;
        text-align: justify;
    }

    .text-content a {
        color: var(--black);
        text-decoration: underline;
    }
`


const MainAboutMe = () => {
    return(
        <StylesMainAboutMe>
            <div className="page-content">
                <div className="main-container">
                    <section className="photo-container">
                        <img src={profilePicture} alt="personal picture" className='personal-photo' />
                        <button>Check my Stacks</button>
                    </section>

                    <section className="text-content">
                        <h1>About Me</h1>
                        <p>I'm a self taught Software Developer, who seeks to solve real world problems with technology. I'm currently learning about Web Development with emphasis on Front-end, and creating responsive web apps . I haven't worked in a company as a software developer yet, but I've been studying for about 1 year and I have projects published on GitHub and on the internet.</p>
                        <p>I have previous work experience with Project Management, Team Leadership and Tech Recruiting, when I worked in a Scale-up startup for almost 3 years. Check out my <a href="https://www.linkedin.com/in/gustavo-farias29/" target='_blank'>LinkedIn</a> for more info.</p>

                        <h1>Academic Background</h1>
                        <p>My academic career began in the area of Business Administration, at the <a href="https://www.ufba.br/" target='_blank'>Federal University of Bahia (Brazil).</a> There I developed several soft skills and learned about project management. While still in college, I started working at a <a href="https://byintera.com/" target='_blank'>technology startup</a> in the project area, and got to know the area of digital products and software development.</p>
                        <p>It was then that I realized that I would really like to work with this, within the area of Software engineering. After that, I studied for 1 year on the Systems Development and Analysis course at <a href="https://www.fiap.com.br/" target='_blank'>FIAP</a>, another renowned technology college in Brazil.</p>
                    </section>
                </div>
            </div>
        </StylesMainAboutMe>
    )
}

export default MainAboutMe;
