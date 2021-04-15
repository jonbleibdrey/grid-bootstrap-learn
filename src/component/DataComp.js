import React from 'react'

const DataComp = ({name, last, hobbie, love}) => {
    return (
        <div style={{margin:"20px"}}>
            name:{name}
            <br/>
            lastname: {last}
            <br/>
            hobbies: {hobbie}
            <br/>
            love life: {love}
            <br/>
        </div>
    )
}

export default DataComp
