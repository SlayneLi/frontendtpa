import React, { Component } from 'react'
import ReactDragList from 'react-drag-list'
import './draggable-proto.scss'

const modifiedStyle = {
    'width' : '250px',
    'display': 'flex',
    'flex-direction': 'row'
}

export default class Test extends Component {
    render() {
        return (
            <div className="container">
                <ReactDragList 
                    dataSource={['row1','row2','row3','row4','row5','row6']}
                    row={(record,index)=> <span className="test">{record} + {index}</span>}
                    rowKey={"none"}
                    dragClass={"test"}
                    style={modifiedStyle}
                />
            </div>
        )
    }
}