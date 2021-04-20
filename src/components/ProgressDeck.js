import React, { useEffect, useState } from 'react';
import { BiUserCircle, BiCurrentLocation, BiMessageAltDetail, BiCheckCircle, BiCheck } from 'react-icons/bi';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

import Card from './Card';
import Button from './UI/Button';
const progressContent = {
    steps: [
        {
            label: 'Personal Detail',
            icon: <BiUserCircle />
        },
        {
            label: 'Shipping Detail',
            icon: <BiMessageAltDetail />
        },
        {
            label: 'Location Detail',
            icon: <BiCurrentLocation />
        },
        {
            label: 'Verification Detail',
            icon: <BiCheckCircle />
        }
    ],
    cardContent: [
        {
            content: [
                'Jane Doe looked at the ribbed banana in his hands and felt ecstatic.',
                'He walked over to the window and reflected on his sleepy surroundings. He had always loved hilly Los Angeles with its talented, thirsty trees. It was a place that encouraged his tendency to feel ecstatic'
            ]
        }, {
            content: [
                'Then he saw something in the distance, or rather someone. It was the figure of Simon Zeus. Simon was an intuitive monster with sloppy eyelashes and curvaceous eyebrows.',
                'Jane gulped. He glanced at his own reflection. He was a brave, brave, beer drinker with charming eyelashes and greasy eyebrows.'
            ]
        }, {
            content: [
                'His friends saw him as an energetic, embarrassed elephant. Once, he had even saved a lonely puppy that was stuck in a drain.',
                'But not even a brave person who had once saved a lonely puppy that was stuck in a drain, was prepared for what Simon had in store today.'
            ]
        }, {
            content: [
                'The clouds danced like running owls, making Jane afraid. As Jane stepped outside and Simon came closer, he could see the energetic glint in his eye.',
                'Simon gazed with the affection of 9733 cowardly mouldy maggots. He said, in hushed tones, "I love you and I want a fight." Jane looked back, even more afraid and still fingering the ribbed banana. "Simon, hands up or I\'ll shoot, " he replied.'
            ]
        }
    ]
};

const ProgressDeck = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [ready, setReady] = useState(false);
    const { steps, cardContent } = progressContent;

    const prevHandler = () => setActiveIndex(activeIndex - 1);
    const nextHandler = () => setActiveIndex(activeIndex + 1);

    useEffect(() => {
        setTimeout(() => {
            setReady(true);
        }, 200)
    });

    return (
        <div className="progress-deck">
            <ul className="progress-deck__indicator">
                {steps.map((step, index) =>
                    <li key={index}
                        className={`progress-step ${activeIndex === index ? 'active' : 'inactive'} ${activeIndex > index ? 'complete' : 'incomplete'} ${ready ? 'ready' : null}`}>
                        <span className="progress-step__icon">
                            {activeIndex > index ? <BiCheck /> : step.icon}
                        </span>
                        <h3>{step.label}</h3>
                        {steps.length - 1 > index ? <span className="progress-step__bar"></span> : null}
                    </li>
                )}
            </ul>
            {cardContent.map((text, index) => {
                if (activeIndex === index) {
                    return <Card key={index} text={text} />
                }
                return null;
            })}
            {(activeIndex > cardContent.length - 1) ?
                <h3 className="text-center">Congratulation for completion!</h3> : null
            }
            <div className="progress-deck__btns">
                {activeIndex !== 0 ?
                    <Button
                        clicked={prevHandler}>
                        <FaAngleLeft />Previous</Button> : null}
                {activeIndex !== steps.length ?
                    <Button
                        classes="btn ml-auto"
                        clicked={nextHandler}>
                        Next <FaAngleRight /></Button> : null}
            </div>
        </div >
    )
}

export default ProgressDeck;