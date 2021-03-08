import React from 'react'
import { Link } from 'react-router-dom'

const Person = ({ id, bio, fullName, profession, image }) => {
  return (
    <article className='cocktail'>
      <div className='img-container'>
        <img src={image} alt={fullName} />
      </div>
      <div className='cocktail-footer'>
        <h3>{fullName}</h3>
        <h4>{profession}</h4>
        <Link to={`/person/${id}`} className='btn btn-primary btn-details'>
          {' '}
          Details{' '}
        </Link>
      </div>
    </article>
  )
}

export default Person
