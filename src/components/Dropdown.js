import React from 'react'

const Dropdown = ({ options }) => {
    const renderedOptions = options.map((option) => {
        return (
            <div key={options.value} className="item" >
                {option.label}
            </div>
        )
    })

    return(
        <div className="ui form">
            <div className="field">
                <label className="label">select color</label>
            </div>
        </div>
    )
}

export default Dropdown