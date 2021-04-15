import React, {useState} from 'react'

const Comment = () => {
    const [comment, setComment] = useState("")

        function handleSubmit(e){
            e.preventDefault()
            alert("we did it")
        }

        function handleChange(e){
            setComment(e.target.value)
        }
    return (
        <div style={{border:"2px solid black"}}>
            <form onSubmit={handleSubmit}>
                <textarea
                 type="text" placeholder="comment down below" value={comment} onChange={handleChange}/>
                <button>submit</button>
            </form>
            <h1>henrys comment: {comment}</h1>
        </div>
    )
}

export default Comment
