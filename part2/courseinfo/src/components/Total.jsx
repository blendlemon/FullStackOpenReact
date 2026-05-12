const Total = ({ parts }) => {
    const sum = parts.map(part => {
        sum += part.exercises;
    })
    return (
        <p>Number of exercises {sum}</p>
    );
}

export default Total;