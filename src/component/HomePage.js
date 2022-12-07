import React from 'react'
import { useNavigate } from 'react-router-dom'

function HomePage() {
  const navigate = useNavigate()

  function handleClickCreateEvent() {
    navigate('/eventadd')
  }

  function handleClickEvent() {
    navigate('/eventlist')
  }

  return (
    <div>
      <div className='header text-center'>
        <h3 className='text-white'>Start plan your Event</h3>
        <button
          type='button'
          className='btn btn-outline-warning mt-3'
          data-mdb-ripple-color='dark'
          onClick={handleClickCreateEvent}
        >
          Create Event
        </button>
        <button
          type='button'
          className='btn btn-outline-warning mt-3'
          data-mdb-ripple-color='dark'
          onClick={handleClickEvent}
        >
          Go to Events
        </button>
      </div>
    </div>
  )
}

export default HomePage
