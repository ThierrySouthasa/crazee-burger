import styled from 'styled-components/macro';

const Logo = ({ className, onClick }) => {

    return (
        <LogoStyled className={className} onClick={onClick}>
            <h1>Crazee</h1>
            <img src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png" alt='logo' />
            <h1>Burger</h1>
        </LogoStyled>
    )
}

const LogoStyled = styled.div`
    font-size : 4vh;
    font-family: "Amatic SC", cursive;
    color : #F38F00;
    display : flex;
    align-items : center;
    justify-content : center;
    text-transform : uppercase;

    img {
        height : 1.7em;
        margin : 0 10px;
    }

`

export default Logo;
