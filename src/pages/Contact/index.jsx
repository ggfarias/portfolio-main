import styled from "styled-components";
import ContactContainer from "../../components/ContactContainer";

const StylesContact = styled.div`
    h1, h3 {
        text-align: center;
        margin-top: 3rem;
    }
`

const Contact = () => {
    return(
        <>
            <ContactContainer />
        </>
    )
}

export default Contact; 