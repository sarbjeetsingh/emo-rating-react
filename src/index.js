import React, { useState, useEffect } from 'react'
import styles from './styles.module.css'

export const EmoRating = ({
  ratingData,
  onChange,
  defaultSelected,
  size,
  customClassName
}) => {
  const [selectedRating, setSelectedRating] = useState(defaultSelected || null)

  // when user clicks on rating
  const handleRatingClick = (rating, e) => {
    setSelectedRating(rating.id)
    if (onChange) {
      onChange(rating, e)
    }
  }

  return (
    <div className={`${styles['rating-wrapper']} ${customClassName || ""}`}>
      {ratingData && Array.isArray(ratingData) && ratingData.length > 0 ? (
        ratingData.map((rating) => (
          <div className={styles['face']} key={rating.id} 
            style={{
              width: size ? `${size}px` : `67px`,
              height: size ? `${size}px` : `67px`
            }}>
            <div
              className={`${styles['rating-btn']} ${
                selectedRating && selectedRating == rating.id
                  ? styles['selected']
                  : ''
              }`}
            >
              <input
                type='button'
                style={{
                  backgroundImage: `url(${
                    selectedRating && selectedRating == rating.id
                      ? rating.icon_selected
                      : rating.icon
                  })`,
                  width: size ? `${size}px` : `67px`,
                  height: size ? `${size}px` : `67px`
                }}
                onClick={(e) => handleRatingClick(rating, e)}
              />
              <div className={styles['rating-text']}>{rating.text}</div>
            </div>
          </div>
        ))
      ) : (
        <div>Please check the provided data</div>
      )}
    </div>
  )
}
