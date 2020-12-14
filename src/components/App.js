import React, { useState } from 'react'
import Accordion from './Accordion'
import Dropdown from './Dropdown'
import Search from './Search'

const items = [
    {
        title: 'What is React?',
        content: 'React is a front end javascript framework'
    },

    {
        title: 'Why use React?',
        content: 'React is a favorite JS library among engineers'
    },
    
    {
        title: 'How do you use React?',
        content: 'You use React by creating components'
    }
]

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The color Green',
        value: 'green'
    },
    {
        label: 'A Shade of Blue',
        value: 'blue'
    }
]

const App = () => {
    const [selected, setSelected] = useState(options[0])

    return (
            <div>
                <Dropdown options= {options} selected={selected} onSelectedChange={setSelected}/>
                <Search />
                <Accordion items={items}/>
            </div>
        )
}

export default App 