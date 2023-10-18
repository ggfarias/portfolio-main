import styled from "styled-components";
import githubIcon from '../../assets/icons/github-icon.svg'; 
import gmailIcon from '../../assets/icons/google-gmail.svg'; 
import linkedinIcon from '../../assets/icons/linkedin-icon.svg'; 

const StylesContactContainer = styled.section`

    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    .bigContainer{
        width: 900px;
        height: 400px;
        text-align: center;
        border-radius: 1rem;
        color: var(--white);
        background-color: var(--dark);
        border-color: var(--dark);
    }

    h2 {
        padding-top: 2.5rem;
        padding-bottom: 1rem;
    }

    img {
        padding: 1rem 2rem;
        max-width: 5rem;
        max-height: 5rem;
    }
`




const ContactContainer = () => {
    return (
        <StylesContactContainer>
            <div className="bigContainer">
                <h2>Contact me on any of these channels</h2>
                <a href="mailto:gustavocgf@gmail.com"><img src={gmailIcon} alt="e-mail gmail icon" /></a>
                <a href="https://www.linkedin.com/in/gustavo-farias29/" target="_blank"><img src={linkedinIcon} alt="linkedin icon" /></a>
                <a href="https://github.com/ggfarias" target="_blank"><img src={githubIcon} alt="github icon" /></a>
                
                
            </div>
        </StylesContactContainer>
    )
}


export default ContactContainer; 