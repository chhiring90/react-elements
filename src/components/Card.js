import Button from './UI/Button';

const Card = ({ title, text }) => {

    return (
        <article className="card">
            {title ?
                <div className="card__header">
                    <h3>{title}</h3>
                </div> : null}
            {text ?
                <div className="card__body">
                    {Object.keys(text)
                        .map(key => [...text[key]]
                            .map((str, index) => <p key={index}>{str}</p>))
                        .reduce((acc, val) => acc.concat(val), [])}
                </div> : null}
            <div className="card__footer">
                <Button>Click Me</Button>
            </div>
        </article>)
}

export default Card;