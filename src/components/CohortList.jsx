
export default function CohortList({cohortList, setStudentList, data, darkmode, setDarkmode}){

    function studentListHandler(cohort){
        updateCohortList(cohort)
    }

    function updateCohortList(filterValue){        
        if(filterValue !== "all"){
            const tempList = data.filter((student)=>student.cohort.cohortCode === filterValue);
            setStudentList(tempList);
        }
        else{
            setStudentList([...data]);
        }
    }

    function onChangeHandler(){
        darkmodeUpdate();
    }

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
            <div className="dark_mode">
                <label class="switch">
                    {darkmode ? <input type="checkbox" onClick={()=>onChangeHandler()} checked/> : <input type="checkbox" onClick={()=>onChangeHandler()}/>}                    
                    <span class="slider round"></span>
                </label>
            </div>
        </>
        
        
    )
}