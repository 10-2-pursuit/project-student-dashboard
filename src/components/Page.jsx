import { useState, useEffect } from "react"
import StudentList from "./StudentList";

export default function Page({ studentList }){
    const [pageNumber, setPageNumber] = useState(0);
    const [pageMax, setPageMax] = useState(Math.ceil(studentList.length / 25));
    //const [studentListPiece, setStudentListPiece] = useState([]studentList.slice(pageNumber, pageNumber + 24));
    const [currentPage, setCurrentPage] = useState(0);
    const [studentListPiece, setStudentListPiece] = useState([]);
    const [pageArray, setPageArray] = useState([]);

    useEffect(()=>{
        const tempPageArray = [];
        const tempStudentListPiece = [];
        for(let index = 0; index < pageMax; index += 25){
            tempPageArray.push(index);
            tempStudentListPiece.push(studentList.slice(index, index + 25));
        }
        setStudentListPiece(tempPageArray);
        setStudentListPiece(tempStudentListPiece);
    },[studentList]);
    
    function onClickPage(e){
        console.log(e.target.key);
        setCurrentPage(e.target.key);
    }

    return(
        <div className="page_container">
            <>
                {/*<StudentList studentList={ studentListPiece[currentPage] }/>*/}
                {console.log(studentListPiece[0])}
            </>
            <div className="pagination">
                <p>HI {console.log(pageArray)}</p>
                <ul>
                    {pageArray.map((elem,index) => {
                        (<li key={index} onClick={(e)=>onClickPage(e)}>{elem}</li>)
                    })}
                </ul>
            </div>            
        </div>
    )
}