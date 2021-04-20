

const button = ({ clicked, children, type, classes }) =>
    <button
        className={classes ? classes : 'btn'}
        type={type ? type : 'button'}
        onClick={clicked}>
        {children}</button>

export default button;