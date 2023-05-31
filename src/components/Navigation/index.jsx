function Navigation(){
    const items = ['About Me', 'Portfolio', 'Contact', 'Resume'];
    return (
        <>
            <ul className="Navigation">
                {items.map((item) => (
                    <li key={item}>{item}</li>  
                ))}
            </ul>
        </>
    );
}

export { Navigation };