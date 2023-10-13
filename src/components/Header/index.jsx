
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StylesHeader = styled.div`
    .navbar {
        background-color: var(--dark);
        display: flex;
        align-content: center;
        justify-content: center;
        padding: 1rem;
    }

    .navbar .navbar-menu {
        flex-grow: initial;
        flex-shrink: initial;
    }

    .navbar-start {
        display: flex;
        justify-content: center;
    }

    .navbar-item {
        font-size: 1.5rem;
        padding: 0.75rem 1rem;
        text-decoration: none;
        color: var(--white);
        font-weight: 700;
        transition: all 0.4s ease;
    }

    .navbar-item:hover {
        color: var(--black);
        text-decoration: underline;
    }
`

const Header = () => {
    return(
        <StylesHeader>
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div id="navbarBasicExample" class="navbar-menu">
                    <div class="navbar-start">
                        <Link class="navbar-item" to='/'>
                            Home
                        </Link>

                        <Link class="navbar-item" to='aboutme'>
                            About Me
                        </Link>

                        <Link class="navbar-item" to='projects'>
                            Projects
                        </Link>

                        <Link class="navbar-item" to='contact'>
                            Contact Me
                        </Link>
                    </div>
                </div>
            </nav>
        </StylesHeader>
    )
}

export default Header; 