import React,{useState,useEffect} from 'react'
import styles from './styles.module.css'

export const EmoRating = ({ ratingData,onChange,defaultSelected}) => {
  const [selectedRating, setSelectedRating] = useState(defaultSelected ? defaultSelected:null);

  // when user clicks on rating
  const handleRatingClick = (rating,e)=>{
    setSelectedRating(rating.id);
    if(onChange){
      onChange(rating,e)
    }
  }

  return (
          <div className={styles['rating-wrapper']}>
              {/* <div className={styles['bg-line']}></div> */}
              {ratingData && ratingData.length>0 ? (
              ratingData.map((rating)=>(
                <div className={styles['face']} key={rating.id}>
                  <div className={`${styles['rating-btn']} ${selectedRating && selectedRating===rating.id ? styles['selected']:""}`}>
                    <input type="button" style={{backgroundImage:`url(${selectedRating && selectedRating===rating.id ? rating.icon_selected:rating.icon })`}} onClick={(e)=>handleRatingClick(rating,e)} />
                    <div className={styles['rating-text']}>{rating.text}</div>
                  </div>
                </div>
              )) 
              ):(
                <div>No data available</div>
              ) }
              
               
            </div>
  )
}
