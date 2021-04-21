import { BiCheck } from 'react-icons/bi';

const progressIndicator = ({ steps, activeIndex, ready }) => {
    return (
        <ul className="progress-deck__indicator">
            {steps.map((step, index) =>
                <li key={index}
                    className={`progress-step ${activeIndex === index ? 'active' : 'inactive'} ${activeIndex > index ? 'complete' : 'incomplete'} ${ready ? 'ready' : null}`}>
                    <span className="progress-step__icon">
                        {activeIndex > index ? <BiCheck /> : step.icon}
                    </span>
                    <h3>{step.label}</h3>
                    {steps.length - 1 > index ? <span className="progress-step__bar"></span> : null}
                </li>)}
        </ul>
    )
}

export default progressIndicator;