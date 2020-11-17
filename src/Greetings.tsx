import React from 'react';

type GreetingsProps = {
    name: string;
};

const Greetings: React.FC<GreetingsProps> = ({name}) => {
    return (<div>Hello, {name}</div>)
}

export default Greetings;