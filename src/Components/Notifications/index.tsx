import React, {Fragment} from 'react'
import Notification from "./Notification"

export default function Notifications() {
    return (
        <Fragment>
            <h1 className="title">Overdue</h1>
            <Notification />
            <Notification />
        </Fragment>
    )
}
