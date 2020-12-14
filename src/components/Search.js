import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Search = () => {
    const [term, setTerm] = useState('programming')
    const [results, setResult] = useState([])
    useEffect(() => {
        // axios.get('url')
        // .then((res) => {
        //     console.log(res.data);
        // })
        //or
        // (async () => {
        //     await axios.get('url')
        // })()
        //or
        const search = async () => {
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term,
                },
            })
            setResult(data.query.search)
        }

    if (term && !results.length) {
        search()
    } else {
        const timeoutId = setTimeout(() =>{
            if (term) {
                search()
              }
            }, 1000)
    
        return () => {
            clearTimeout(timeoutId)
        }
    }
}, [term])

    const renderedResults = results.map((result) => {
        return(
            <div key={result.pageid} className="item">
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
                </div>
            </div>
        )
    })
    
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input className="input" value={term} onChange={(e) => setTerm(e.target.value)}/>
                </div>
            </div>
        </div>
    )
}

export default Search 