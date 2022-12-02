const List = () => {
    const items = [
        {
            id: 1,
            name: "João"
        },
        {
            id: 2,
            name: "André"
        },
        {
            id: 3,
            name: "Ricardo"
        }
    ]
    
    return (
        <div>
            {items.map((item) => (
                <p key={item.id}>{item.id} - {item.name}</p>
            ))}
        </div>
    );
}

export default List;