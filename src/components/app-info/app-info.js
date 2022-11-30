import './app-info.css';
import Box from '../bloks/box/box';

const AppInfo = ({data}) => {
    
    const empl = data.length;

    const incr = data.filter(elem => elem.increase).length;
    
    return (
        <>
            <Box color="blue">
                <h1 className='title'>Учет сотрудников в компании N</h1>
                <h2 className='subtitle'>Общее число сотрудников: {empl}</h2>
                <h2 className='subtitle'>Премию получат: {incr}</h2>
            </Box>
        </>
    )
}

export default AppInfo;