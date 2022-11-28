import './box.css';

const Box = ({color, children}) => {
    
    const colorStyle = color === 'blue' ? "box blue" : "box white";

    return (
        <div className={colorStyle} >
            {children}
        </div>
    )
};

export default Box;