import { useState, useEffect } from 'react'
import { db } from '../firebase'
import { ref, update } from 'firebase/database'
import { useParams, useNavigate, Link } from 'react-router-dom'

const EventEdit = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [performer, setPerformer] = useState('')
  const [venue, setVenue] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [description, setDescription] = useState('')

  const handleEditSubmit = (e) => {
    e.preventDefault()
    const dataPayload = {
      name,
      performer,
      venue,
      date,
      time,
      description,
    }
    update(ref(db, `/${id}`), {
      event: dataPayload,
      uuid: id,
    })
    navigate('/eventlist')
  }

  return (
    <div style={{ background: 'white', padding: 15 }}>
      <h3>Event Edit Form</h3>
      <form onSubmit={handleEditSubmit} className='main'>
        <div className='row g-3'>
          <div className='col'>
            <label htmlFor='Name' class='form-label'>
              Event Name
            </label>
            <input
              name='name'
              id='name'
              className='form-control'
              type='text'
              placeholder='Input Details'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required='required'
            />
          </div>
          <div className='col'>
            <label htmlFor='Name' class='form-label'>
              Event Performer
            </label>
            <input
              name='performer'
              id='performer'
              value={performer}
              className='form-control'
              type='text'
              required='required'
              onChange={(e) => setPerformer(e.target.value)}
              placeholder='Type Name'
            />
          </div>
        </div>
        <div className='form-group'>
          <label htmlFor='inputState' class='form-label'>
            Event Venue
          </label>
          <input
            name='venue'
            id='venue'
            value={venue}
            className='form-control'
            type='place'
            required='required'
            onChange={(e) => setVenue(e.target.value)}
            placeholder='Type Name'
          />
        </div>
        <div className='row g-3'>
          <div className='col-sm-7'>
            <label htmlFor='contact '>Event Date</label>
            <input
              name='date'
              id='date'
              value={date}
              type='date'
              onChange={(e) => setDate(e.target.value)}
              className='form-control'
              required='required'
            />
          </div>
          <div className='col-sm'>
            <label htmlFor='contact '>Event Time</label>
            <input
              name='time'
              id='time'
              value={time}
              type='time'
              onChange={(e) => setTime(e.target.value)}
              className='form-control'
              required='required'
            />
          </div>
          <div className='form-group'>
            <label htmlFor='formGroupExampleInput' class='form-label'>
              Description
            </label>
            <textarea
              name='description'
              id='description'
              value={description}
              type='text'
              rows='4'
              className='form-control'
              onChange={(e) => setDescription(e.target.value)}
              required='required'
            />
          </div>
        </div>
        <div className='add-button '>
          <button className='btn btn-primary' type='submit'>
            Submit
          </button>
          <Link to='/eventlist'>
            <button className='btn btn-secondary' type='submit'>
              Cancel
            </button>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default EventEdit
