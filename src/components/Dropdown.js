import React from 'react'

const Dropdown = ({ options }) => {
    const renderedOptions = options.map((option) => {
        return (
            <div key={options.value} className="item" >
                {option.lable}
            </div>
        )
    })

    return(
        <div>
            <h1>Dropdown</h1>
        </div>
    )
}

export default Dropdown