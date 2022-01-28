import React from 'react'

const Loading = ({ visible }) => {
    return(
        <div>{visible ? 'carregando' : ''}</div>
    )
}

export default Loading