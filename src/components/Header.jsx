import { useState } from 'react';
import CohortList from './CohortList';

/**
 * Header()
 * ---------------------------
 * A header of the webpage. This will hold the title and menu. 
 * 
 * @param {React.prop} param0 
 * @returns 
 */
export default function Header({cohortList, setStudentList, data, darkmode, setDarkmode}){
    /** a bool state to toggle menu */
    const [toggleHamburger, setToggleHamburger] = useState(false);

    /**
     * onClickEventHandler()
     * ------------------------
     * update toggleHamburger to opposite value.
     */
    function onClickEventHandler(){
        setToggleHamburger(!toggleHamburger);
    }

    return(
        <header>
            <div className='header'>
                <h1>Dashboard Project</h1>
            </div>
            <div className="menu">
                <span onClick={()=> onClickEventHandler()}>☰</span>
                {toggleHamburger ? (
                                        <CohortList 
                                            cohortList={ cohortList } 
                                            setStudentList={ setStudentList } 
                                            data={data} 
                                            darkmode={ darkmode } 
                                            setDarkmode={ setDarkmode }
                                        />
                                    ) : null}
            </div>
        </header>
    )
}