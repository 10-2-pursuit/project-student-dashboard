import { useState } from 'react';
import CohortList from './CohortList';

export default function Header({cohortList, setStudentList, data}){
    const [toggleHamburger, setToggleHamburger] = useState(false);

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
                {toggleHamburger ? (<CohortList cohortList={ cohortList } setStudentList={ setStudentList } data={data}/>) : null}
            </div>
        </header>
    )
}