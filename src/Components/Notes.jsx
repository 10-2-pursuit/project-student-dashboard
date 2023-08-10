import React from 'react';
import { useState } from 'react';

const Notes = ({handleFormSubmit, studentId}) => {
    // console.log(StudentNotes)
    // console.log(studentId)

    // const [ comments, setComments] = useState(studentComments || {})
    const [ newComment, setNewComment] = useState({
        commenterName: "",
        comment: ""
    })

    const handleChange = (e) => {
        setNewComment({...newComment, 
        [e.target.id]: e.target.value
        })

    }
    return (
        <div className="Notes">
            <h3> 1-on-1 Notes</h3>
            <form onSubmit={handleFormSubmit}>
              <fieldset>
                    <input
                        value={studentId} 
                        type="hidden" name="studentId" id="studentId" />
                    <label htmlFor="commenterName"> {`Commenter Name `}</label>
                        <input 
                            value={newComment.commenterName} 
                            onChange={handleChange}
                            type="text" name="commenterName" id="commenterName" /><br />
                    <label htmlFor="comment"> Commenter </label>
                        <input 
                            value={newComment.comment} 
                            onChange={handleChange} 
                            type="text" name="comment" id="comment" required/><br />
                    <input type="submit" value="Add Note" />
              </fieldset>
            </form>
            {/* {comments != {}} */}
        </div>
    );
}

export default Notes;
