import Card from "../components/shared/Card"
import {Link} from 'react-router-dom'
function AboutPage() {
    return (
        <Card>
            <div className="about">
                <h1>About</h1>
                <p>This is content.</p>
                <Link to='/'>
                    Return home.
                </Link>
            </div>
        </Card>
    )
}
export default AboutPage