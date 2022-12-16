import React from 'react';

const Exam = () => {
    const questions = [
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
            "marks": "1",
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
            "marks": "2",
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
        <div className='container m-auto c-mt pt-10'>
            <div className='m-auto flex flex-col gap-20 lg:w-2/3 rounded-md text-gray-800 text-xl '>
                {
                    questions.map((element, index) => {
                        if (element.question_type === 'true-false') {
                            return <ShowTrue index={index + 1} question={element.question} marks={element.marks}></ShowTrue>
                        }
                        else if (element.question_type === 'mcq') {
                            return <ShowQuiz index={index + 1} question={element.question} marks={element.marks} options={element.options}></ShowQuiz>
                        }
                        else if (element.question_type === 'fill-blanks') {
                            return <ShowGaps index={index + 1} question={element.question} marks={element.marks}></ShowGaps>
                        }

                    })
                }
            </div>

            <div className="button-wrapper text-end lg:w-2/3 m-auto pt-10">
                <button className='btn bg-indigo-800 text-white px-16 hover:bg-indigo-700'>Next &nbsp;&nbsp; &rarr;</button>
            </div>
        </div>
    );
};

export default Exam;





const ShowQuiz = (props) => {
    const { index, question, marks, options } = props;

    return (
        <div className='rounded-lg flex flex-col gap-10 p-10 border-l-8 border-l-indigo-600 border-t-2 shadow-lg'>
            <div className='flex items-center justify-between'>
                <span className='flex gap-5 items-center'>
                    <p>{index}.</p>
                    <h3 className=''>{question} ?</h3>
                </span>
                <p className='self-end'>{marks}<span className='text-sm'> marks</span></p>
            </div>
            <div className='flex flex-col gap-5'>
                {
                    options.map((option) => {
                        return (
                            <div className="radio-group flex gap-4 items-center ">
                                <input type="radio" name="radio" className="radio-field radio border-2 border-indigo-300 radio-accent" />
                                <p>{option}</p>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}
const ShowGaps = (props) => {
    const { index, question, marks } = props;

    return (
        <div className='rounded-lg flex flex-col gap-10 p-10 border-l-8 border-l-indigo-600 border-t-2 shadow-lg'>
            <div className='flex items-center justify-between'>
                <span className='flex gap-5 items-center'>
                    <p>{index}.</p>
                    <h3 className=''>{question} ?</h3>
                </span>
                <p className='self-end'>{marks}<span className='text-sm'> marks</span></p>
            </div>
            <div className="gap-4 border-indigo-400 border-b-2 w-1/2">
                <input className='text-field border-none text-xl rounded-md' type="text" placeholder='answer' autoFocus />
            </div>
        </div>
    )
}
const ShowTrue = (props) => {
    const { index, question, marks } = props;

    return (
        <div className='rounded-lg flex flex-col gap-10 p-10 border-l-8 border-l-indigo-600 border-t-2 shadow-lg'>
            <div className='flex items-center justify-between'>
                <span className='flex gap-5 items-center'>
                    <p>{index}.</p>
                    <h3 className=''>{question} ?</h3>
                </span>
                <p className='self-end'>{marks}<span className='text-sm'> marks</span></p>
            </div>
            <div className='flex flex-col gap-5'>
                <div className="radio-group flex gap-4"><input type="radio" name="radio" className="radio-field radio border-2 border-indigo-300 radio-accent" value={'true'} />
                    <p>true</p></div>
                <div className="radio-group flex gap-4">
                    <input type="radio" name="radio" className="radio-field radio border-2 border-indigo-300 radio-accent" value={'false'} />
                    <p>false</p></div>
            </div>
        </div>
    )
}


