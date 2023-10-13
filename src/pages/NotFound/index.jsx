import styled from "styled-components";
import pgnotfound from '../../assets/pageNotFound.svg'; 


const StylesPageNotFound = styled.div`
    h1, h2 {
        text-align: center;
        margin-top: 3rem;
    }

    img {
        max-width: 400px;
        max-height: 400px;
    }

    .page-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding-top: 5rem;
        gap: 3rem;
    }
`

const PageNotFound = () => {
    return (
        <StylesPageNotFound>
            <div className="page-container">
                <div>
                    <h1>Sorry, this page doesn't exist.</h1>
                    <h2>Try clicking in the "Home" word at the top of the page.</h2>
                </div>

                <img src={pgnotfound} alt="Error 404"/>
            </div>
        </StylesPageNotFound>
    )
}

export default PageNotFound; 