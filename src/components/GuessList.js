import React from "react";

const GuessList = ({ list }) => {
    return (
        <div>
            {list.map((element, index) => {
                return <ol style={{ 'listStyleType': 'disc' }} key={index}>
                    <li>
                        <span style={{fontWeight: 'bold'}}>{element.name} - {element.age}</span>
                    </li>
                </ol>
            })}
        </div>
    );
};

export default GuessList;