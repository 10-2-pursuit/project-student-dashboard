export default function OneOnOne({comments, setComments, studentId}){
    function updateComments(e){
        const form = document.getElementById(e.target.id);
        let temp = (comments[studentId] ? [[form.writer.value, form.comment.value]] : Object.assign(comments[studentId],[form.writer.value, form.comment.value]));
        setComments({...comments, [studentId]:[...comments[studentId],temp]});
        form.reset();
    }

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