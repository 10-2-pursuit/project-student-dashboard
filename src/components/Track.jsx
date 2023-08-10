import {useEffect, useState} from 'react';

export default function Track({codewars, certifications}){
    const [track, setTrack] = useState();
    useEffect(()=>{
        const onTrack = onOrOff();
        setTrack(onTrack);
    },[]);
    function onOrOff(){
        if(!certifications.resume){
            return false;
        }
        if(!certifications.certifications.linkedin){
            return false;
        }
        if(!certifications.github){
            return false;
        }
        if(!certifications.mockInterview){
            return false;
        }
        if(codewars.current.total <= 600){
            return false;
        }
        return true;
    }
    return(
        <div>{track ? (<span>OnTrack</span>):(<span>OffTrack</span>)}</div>
    )
}