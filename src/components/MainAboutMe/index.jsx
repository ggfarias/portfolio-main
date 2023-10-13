
import styled from 'styled-components';
import profilePicture from '../../assets/img-portfolio.jpeg'
// import TransitionsModal from './Modal';


const StylesMainAboutMe = styled.div`
    .page-content {
        background: linear-gradient(var(--light), var(--light-stronger));
        height: 100vh;
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
        text-align: justify;
        padding-bottom: 1rem;
    }

    .text-content a {
        color: var(--black);
        text-decoration: underline;
    }
`

const StylesModal = styled.div`
    .modal {
        display: none; /* Hidden by default */
        position: fixed; /* Stay in place */
        z-index: 1; /* Sit on top */
        padding-top: 100px; /* Location of the box */
        left: 0;
        top: 0;
        width: 100%; /* Full width */
        height: 100%; /* Full height */
        overflow: auto; /* Enable scroll if needed */
        background-color: rgb(0,0,0); /* Fallback color */
        background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
    }
    .modal-content {
        background-color: #fefefe;
        margin: auto;
        padding: 20px;
        border: 1px solid #888;
        width: 80%;
    }
    .close {
        color: #aaaaaa;
        float: right;
        font-size: 28px;
        font-weight: bold;
    }
    .close:hover, .close:focus {
        color: #000;
        text-decoration: none;
        cursor: pointer;
    }
`


const MainAboutMe = () => {

    // var modal = document.getElementById("stacks-modal");
    // var btn = document.getElementById("button-open-modal");
    // var span = document.getElementsByClassName("close")[0];


    return(
        <StylesMainAboutMe>
            <div className="page-content">
                <div className="main-container">
                    <section className="photo-container">
                        <img src={profilePicture} alt="personal picture" className='personal-photo' />
                        <button id='button-open-modal' onClick={() => open.StylesModal}>Check my Stacks</button>
                            <StylesModal>
                                <div id='stacks-modal' className='modal'>
                                    <span class="close" onClick={() => close()}>&times;</span>
                                    <div className='modal-content'>
                                        <h3>Stack 1</h3>
                                        <p>I have experience with this stack</p>
                                    </div>
                                </div>
                            </StylesModal>
                            



                        {/* <TransitionsModal /> */}
                    </section>

                    <section className="text-content">
                        <h1>About Me</h1>
                        <p>I'm a self taught Software Developer, who seeks to solve real world problems with technology. I'm currently learning about Web Development with emphasis on Front-end, and creating responsive web apps . I haven't worked in a company as a software developer yet, but I've been studying for about 1 year and I have projects published on GitHub and on the internet.</p>
                        <p>I have previous work experience with Project Management, Team Leadership and Tech Recruiting, when I worked in a Scale-up startup for almost 3 years. Check out my <a href="https://www.linkedin.com/in/gustavo-farias29/" target='_blank'>LinkedIn</a> for more info.</p>
                    </section>
                </div>
            </div>
        </StylesMainAboutMe>
    )
}

export default MainAboutMe;
