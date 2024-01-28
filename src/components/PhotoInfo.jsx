import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'

function PhotoInfo({ data }) {
  const { id } = useParams()
  const [photo, setPhoto] = useState(null)

  useEffect(() => {
    const photoData = data.find((photo) => photo.id === parseInt(id))

    if (!photoData) {
      console.error('Nie znaleziono zdjęcia')
      return
    }

    setPhoto(photoData)
  }, [id, data])

  if (!photo) {
    return <div>Loading...</div>
  }

  return (
    <div className="photo">
      <img src={photo.url} alt={photo.name} className="photo" />

      <div className="photo-details">
        <p className="photo-title">Name: {photo.name}</p>
        <p className="photo-date">Date: {photo.date}</p>
        <p className="photo-description">Description: {photo.description}</p>
        <p className="photo-likes">Likes: {photo.likes}</p>
        <p className="photo-dislikes">Dislikes: {photo.dislikes}</p>
      </div>
    </div>
  )
}

PhotoInfo.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      url: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      likes: PropTypes.number.isRequired,
      dislikes: PropTypes.number.isRequired,
    })
  ).isRequired,
}

export default PhotoInfo
