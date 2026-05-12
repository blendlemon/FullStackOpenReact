import Part from './Part';

const Content = ({ parts }) => {
    return (
        <div>
            {parts.map(part => {
                <Part key={part.name} part={part.name, part.exercises} />
            })}
        </div>
    );
}

export default Content;