import React from 'react';

const Exam = () => {
    const data = [
        {
            "question": "first one",
            "marks": "2",
            "options": [
                "song",
                "dance"
            ],
            "correct_answer": "song",
            "question_type": "mcq",
            "q_id": 1
        },
        {
            "question": "second one __",
            "marks": "1",
            "correct_answer": "yes",
            "question_type": "fill-blanks",
            "q_id": 2
        },
        {
            "question": "i am ok",
            "marks": "",
            "correct_answer": "false",
            "options": [
                "true",
                "false"
            ],
            "question_type": "true-false",
            "q_id": 3
        },
        {
            "question": "tv or radio",
            "marks": "",
            "options": [
                "tv",
                "pen",
                "radio"
            ],
            "correct_answer": "tv",
            "question_type": "mcq",
            "q_id": 4
        },
        {
            "question": "not __ be true",
            "marks": "3",
            "correct_answer": "to",
            "question_type": "fill-blanks",
            "q_id": 5
        },
        {
            "question": "yellow shirt",
            "marks": "1",
            "correct_answer": "true",
            "options": [
                "true",
                "false"
            ],
            "question_type": "true-false",
            "q_id": 6
        }
    ]
    return (
        <div className=''>
            <div className='container m-auto h-80 border-2 w-1/2 border-red-400 rounded-md'>
                {
                    data.map(d => {
                        if(d.question_type=='true-false')
                        {
                            return <p>{d.question_type}</p>
                        }
                        else if(d.question_type=='mcq'){
                            return <p>{d.question_type}</p>
                        }
                        else if(d.question_type=='fill-blanks'){
                            return <p>{d.question_type}</p>
                        }

                    })
                }
            </div>

            <button className='btn btn-info px-20'>Next</button>
        </div>
    );
};

export default Exam;