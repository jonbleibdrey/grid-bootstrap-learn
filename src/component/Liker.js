import React, {useState} from 'react'

const Liker = () => {
    const [count, setCounter] = useState(0)
    const [likes, setLikes] = useState(0)
    const [emo, setEmo] = useState("❤️") 
    
    function likess() {
        setLikes(likes + 1)
        setCounter(count + 1)
    }
    function handleChange(event) {
        setEmo(event.target.value);
      }

    return (
        <div>
            <form>
            <input type="text" placeholder="emoji goes here" value={emo} onChange={handleChange}/>
            </form>

           <p>number of likes:{likes}</p>
            <button style={{border:'none', background:"white", borderRadius:"20px", boxShadow:" -7px 10px 15px 1px", }} onClick={likess}>{emo} likes: {count}</button>
        </div>
    )
}

export default Liker
