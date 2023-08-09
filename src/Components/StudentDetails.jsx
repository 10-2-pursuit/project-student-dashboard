import React from 'react';

const StudentDetails = ({codewars, scores, certifications}) => {
    return (
        <div className='StudentDetails'>
            <section>
                <h4>Codewars:</h4>
                <span><span className='SpanGreen'>{`Current Total:`}</span>{}</span><br /><br />
                <span><span className='SpanGreen'>{`Current Total:`}</span>{}</span><br /><br />
                <span><span className='SpanGreen'>{`Current Total:`}</span>{}</span><br /><br />
                <span><span className='SpanGreen'>{`Current Total:`}</span>{}</span><br /><br />
            </section>
            <section>
                <h4>Scores</h4>
                <span><span className='SpanGreen'>{`Current Total:`}</span>{}</span><br /><br />
                <span><span className='SpanGreen'>{`Current Total:`}</span>{}</span><br /><br />
                <span><span className='SpanGreen'>{`Current Total:`}</span>{}</span><br /><br />
            </section>
            <section>
                <h4>Certifications</h4>
                <span><span className='SpanGreen'>{`Current Total:`}</span>{}</span><br /><br />
                <span><span className='SpanGreen'>{`Current Total:`}</span>{}</span><br /><br />
                <span><span className='SpanGreen'>{`Current Total:`}</span>{}</span><br /><br />
                <span><span className='SpanGreen'>{`Current Total:`}</span>{}</span><br /><br />
            </section>
        </div>
    );
}

export default StudentDetails;
