import { useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'

function FeedbackForm() {
    const [text, setText] = useState('')
    const handleTextChange = (e) => {
        setText(e.target.value)
    }
    return (
        <Card>
            <form>
                <h2>How would you rate your service?</h2>
                <div className="input-group">
                    <input value= {text} onChange={handleTextChange} type="text" placeholder='Write a Review'/>
                    <Button type='submit'>
                        Send
                    </Button>
                </div>

            </form>
        </Card>
    )
}

export default FeedbackForm