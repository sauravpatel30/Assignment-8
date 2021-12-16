import { Link } from 'react-router-dom'

const footer = () => {
    return (
        <footer style={{textAlign:"center"}}>
            <p><b>This is a footer page</b></p>
            <Link to="/about">About</Link>
        </footer>
    )
}

export default footer
