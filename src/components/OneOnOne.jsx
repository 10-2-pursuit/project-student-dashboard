/**
 * OneOnOne()
 * --------------------------------
 * will render 1 on 1 comments & its form. 
 * 
 * @param {React.prop} param0 
 *      @property {Object[]} comments - a state hook for comments
 *      @property {} setComments - a setter for comments
 *      @property {string} studentId - a unique string for each student's id
 * 
 */

export default function OneOnOne({comments, setComments, studentId}){
    /**
     * updateComments()
     * ---------------------------------
     * function to update comments state in App.jsx
     * @param {event} e - event from submitting a form 
     */
    function updateComments(e){
        const form = document.getElementById(e.target.id);
        const temp = (comments[studentId] ? [[form.writer.value, form.comment.value]] : Object.assign(comments[studentId],[form.writer.value, form.comment.value]));
        setComments({...comments, [studentId]:[...comments[studentId],temp]});
        form.reset();
    }

    /**
     * submitHandler()
     * -----------------------------------
     * submit event handler for a form. 
     * @param {event} e 
     */
    function submitHandler(e){
        e.preventDefault();
        updateComments(e);
    }

    return (
        <div>
            <form id={"form"+studentId} onSubmit={(e)=>submitHandler(e)}>
                <label htmlFor="writer" onChange={(e)=>updateComments(e)}>ID</label>
                <input
                    type="text"
                    id="writer"
                />
                <label htmlFor="comment" onChange={(e)=>updateComments(e)}>Comment</label>
                <input
                    type="text"
                    id="comment"
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}