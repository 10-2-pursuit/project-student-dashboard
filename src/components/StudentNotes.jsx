import React from 'react';

const StudentNotes = () => {
    return (
        <div>
            <h4>1-on-1 Notes</h4>
            <form>
                <p>Commenter Name</p><input type='text' placeholder='Enter commenters name'></input><br />
                <p>Comment</p><input type='text' placeholder='Comment'></input><br />
                <button>Add Note</button>
            </form>
        </div>
    );
}

export default StudentNotes;
