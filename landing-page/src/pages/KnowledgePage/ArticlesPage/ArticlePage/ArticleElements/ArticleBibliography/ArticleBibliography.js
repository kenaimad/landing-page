import { StyledBibliography } from "./ArticleBibliography.styled"

const ArticleBibliography = (props) => {
    return (
        <StyledBibliography>{props.bibliography}</StyledBibliography>
    )
}

export default ArticleBibliography;