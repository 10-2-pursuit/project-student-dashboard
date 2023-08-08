import { useState } from "react"

export default function Page({ studentList }){
    const [pageNumber, setPageNumber] = useState(0);
    const [pageMax, setPageMax] = useState(Math.ceil(studentList.length / 5))
    //const [studentListPiece, setStudentListPiece] = useState(studentList.splice(0,50));
    return(
        <div>
            
        </div>
    )
}