import React, {useState} from "react";


const OneOnOneNotes = ({onAddNote}) => {
const [commenter, setCommenter]= useState('');
    const [comment, setComment]= useState('');

    const handleCommenterChange = (event) => {
        setCommenter(event.target.value);
    };

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

const handleSubmit = (event) => {
    event.preventDefault();
    if(commenter && comment) { 
    onAddNote({commenter, comment});
    setCommenter('');
    setComment('');
}

};

return (
    <div className= "one-on-one-note">
        <h3>1-on-1 Notes</h3>
        <form onSubmit={handleSubmit}>
            <div> 
                <label htmlFor="commenter">Commenter:</label>
                <input type="text" id="commenter" value={commenter} onChange={handleCommenterChange}/>
            </div>
            <div>
                <label htmlFor="comment">Comment</label>
                <textarea id="comment" value={comment} onChange={handleCommentChange} />
            </div>
            <button type="submit">Add Notes</button>
        </form>
    </div>
    
);
};

export default OneonOneNotes; 
