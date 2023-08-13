import {useEffect, useState} from 'react';

/**
 * Track()
 * ----------------------------
 * A react component to render single tracking status for Pursuit curriculum.
 * 
 * @param {React.props} param0 
 *      @property {Object} codewars - an object which is holding codewars scores
 *      @property {Object} certification - an object which is holding certification info
 */
export default function Track({codewars, certifications}){
    /** track will store the tracking status for the curriculum */
    const [track, setTrack] = useState();

    /** initialize the tracking status */
    useEffect(()=>{
        const onTrack = onOrOff();
        setTrack(onTrack);
    },[]);

    /**
     * onOrOff()
     * --------------------------------
     * updating the tracking status
     * 
     * @return {boolean} - true if the student follows the right track
     */
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