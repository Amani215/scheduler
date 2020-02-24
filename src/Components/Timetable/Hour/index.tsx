import React, { Component } from 'react'
import Task from "../Task"

export default class Hour extends Component {
    render() {
        return (
            <tr>
                <th>10:00</th>
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
            </tr>
        )
    }
}
