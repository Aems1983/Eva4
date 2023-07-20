import React from "react";

const ComponenteBoton = () => {
    const [counter, setCounter] = React.useState(0);

    return (
        <div>
            <button
                onclic = {() => setCounter(prev => prev+1)}>
                Mira mi REACT {counter}
            </button>
        </div>
    );
};

export default ComponenteBoton;