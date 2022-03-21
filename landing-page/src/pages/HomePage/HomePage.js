import { PhotoWrapper, StyledHomePageContainer, StyledPhoto } from "./HomePage.styled";

const HomePage = () => {
    return (
    <StyledHomePageContainer>
        <PhotoWrapper>
            <StyledPhoto src={require('./images/img1.png')} alt="Photo"></StyledPhoto>
        </PhotoWrapper>
    </StyledHomePageContainer>
    );
}

export default HomePage;