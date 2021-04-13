import '../styles/Dashboard.css'
import React from 'react'
import { usePinContext } from '../api/context'
import Pin from './Pin'
const Dashboard = () => {
    const {pins} = usePinContext()
    return (
        <div className="dashboard">

            <div className="dashboard__content">
            {
                pins.map(e => {
                    return <Pin key={e.id} img={e.url} />
                })
            }
            </div>

        </div>
    )
}

export default Dashboard
