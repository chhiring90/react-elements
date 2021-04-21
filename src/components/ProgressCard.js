import Card from './Card';

const progressCard = ({ cardContent, activeIndex }) => {
    const transformCardContent = cardContent
        .map((text, index) =>
            (activeIndex === index) ?
                <Card key={index} text={text} />
                : null);

    return (activeIndex > cardContent.length - 1) ?
        <h3 className="text-center">Congratulation for completion!</h3> :
        transformCardContent;
}

export default progressCard;