export default function OneOnOne({comments, setComments, studentId}){
    function updateComments(e){
        console.log(e.target.id);
        const form = document.getElementById(e.target.id);
        console.log(form.comment.value)
        setComments([...comments, {[`${form.writer.value}`]:form.comment.value}]);
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