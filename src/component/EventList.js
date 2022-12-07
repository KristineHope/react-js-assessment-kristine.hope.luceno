import React, { useState, useEffect } from 'react'
// import { getApp } from 'firebase/app'
import { db } from '../firebase'
import { ref, onValue, remove } from 'firebase/database'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const EventList = () => {
  const navigate = useNavigate()
  const [eventData, setEventData] = useState([])

  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      setEventData([])
      const data = snapshot.val()
      if (data !== null) {
        Object.values(data).map((todo) => {
          setEventData((oldArray) => [...oldArray, todo])
        })
      }
    })
  }, [])

  const handleEdit = (id) => {
    navigate(`/event-edit/${id}`)
  }

  const handleDelete = (id) => {
    remove(ref(db, `/${id}`))
  }

  return (
    <div style={{ marginTop: '100px' }}>
      <div className='style-table'>
        {eventData.length > 0 ? (
          <table className='style-table'>
            <thead>
              <tr>
                <th style={{ textAlign: 'center' }}>Event Id</th>
                <th style={{ textAlign: 'center' }}>Event Name</th>
                <th style={{ textAlign: 'center' }}>Event Performer</th>
                <th style={{ textAlign: 'center' }}>Event Venue</th>
                <th style={{ textAlign: 'center' }}>Event Date</th>
                <th style={{ textAlign: 'center' }}>Event Time</th>
                <th style={{ textAlign: 'center' }}>Event Description</th>
              </tr>
            </thead>
            <tbody>
              {eventData.map(({ event, id }, index) => {
                return (
                  <tr style={{ textAlign: 'center' }} key={id}>
                    <th scope='row'>{index + 1}</th>
                    <td>{event.name}</td>
                    <td>{event.performer}</td>
                    <td>{event.venue}</td>
                    <td>{event.date}</td>
                    <td>{event.time}</td>
                    <td>{event.description}</td>
                    <td>
                      <button
                        className='btn btn-outline-primary'
                        onClick={() => handleEdit(id)}
                      >
                        Edit
                      </button>
                      <button
                        className='btn btn-outline-warning'
                        onClick={() => {
                          handleDelete(id)
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        ) : (
          <h1 style={{ textAlign: 'center', padding: 10 }}>No Events Added</h1>
        )}
      </div>
    </div>
  )
}

export default EventList
