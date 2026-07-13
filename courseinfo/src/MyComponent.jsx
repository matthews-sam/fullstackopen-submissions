import react, { useState } from 'react';


function MyComponent() {

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        const newName = prompt("Enter your name:");
        setName(newName);
    }

    const updateAge = () => {
        const newAge = prompt("Enter your age:");
        setAge(Number(newAge));
    }

    return(
        <div>
            <p>Hello, {name}!</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={updateAge}>Set Age</button>

            <p>Employed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={() => setIsEmployed(!isEmployed)}>Toggle Employment Status</button>
        </div>
    );

}

export default MyComponent