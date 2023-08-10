import React from 'react';

const Notes = () => {
    return (
        <div  className="Notes">
            <h3> 1-on-1 Notes</h3>
            <form action="">
              <fieldset>
                    <label htmlFor="commenterName"> {`Commenter Name `}</label>
                        <input value="" type="text" name="commenterName" id="commenterName" /><br />
                    <label htmlFor="comment"> Commenter </label>
                        <input value="" type="text" name="comment" id="comment" /><br />
                    <input type="submit" value="Add Note" />
              </fieldset>
            </form>
        </div>
    );
}

export default Notes;
