import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

import Button from './UI/Button';

const progressButtons = ({ activeIndex, stepsLength, prevHandler, nextHandler }) => {
    return (
        <div className="progress-deck__btns">
            {activeIndex === 0 || activeIndex > stepsLength - 1 ? null :
                <Button
                    clicked={prevHandler}>
                    <FaAngleLeft />Previous</Button>}
            {activeIndex !== stepsLength ?
                <Button
                    classes="btn ml-auto"
                    clicked={nextHandler}>
                    Next <FaAngleRight /></Button> : null}
        </div>
    )
}

export default progressButtons;