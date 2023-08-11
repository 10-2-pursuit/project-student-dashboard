/**
 * cohortList()
 * -------------------------------
 * render page for menu button. Filtering, light&dark mode will be handeled here.
 * 
 * @param {React.props} param0 -  
 * @returns 
 */
export default function CohortList({cohortList, setStudentList, data, darkmode, setDarkmode}){
    /**
     * studentListHandler()
     * ------------------------
     * an onclick event handler for <li>tags in the menu. will call updateCohortList().
     * 
     * @param {string} cohort - string value for cohortcode that a user clicked
     */
    function studentListHandler(cohort){
        updateCohortList(cohort)
    }

    /**
     * updateCohortList()
     * --------------------------
     * will update studentList state to new filtered studentList.
     * 
     * @param {string} filterValue - string to filter (data.json).cohort.cohortcode
     */
    function updateCohortList(filterValue){        
        if(filterValue !== "all"){
            const tempList = data.filter((student)=>student.cohort.cohortCode === filterValue);
            setStudentList(tempList);
        }
        else{
            setStudentList([...data]);
        }
    }

    /**
     * onChangeHandler()
     * ----------------------
     * onChange event handler for darkmode.
     */
    function onChangeHandler(){
        darkmodeUpdate();
    }

    /**
     * darkmodeUpdate()
     * ------------------------
     * update darkmode state hook to opposite value.
     */
    function darkmodeUpdate(){
        setDarkmode(!darkmode);
    }

    return(
        <>
            <div className="cohort_list">
                <ul>
                {cohortList.map((cohort)=>{
                    return(       
                        <li key={cohort} onClick={()=>studentListHandler(cohort)}>{cohort.replace(/([^0-9])([0-9])/g, `$1 $2`)}</li>
                    )
                })}
                </ul>
            </div>
            <div className="darkmode_container">
                <label class="switch">
                    {darkmode ? <input type="checkbox" onClick={()=>onChangeHandler()} checked/> : <input type="checkbox" onClick={()=>onChangeHandler()}/>}                    
                    <span class="slider round"></span><span className="label_darkmode">{darkmode ? (<>🌙DARK</>) : (<>☀️LIGHT</>)}</span>
                </label>
            </div>
        </>
    )
}