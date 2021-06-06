import React from 'react'

import { EmoRating } from 'emo-rating-react'
import 'emo-rating-react/dist/index.css'

const ratingData = [
  {
    id: 1,
    text: 'Terrible',
    icon: 'https://i.ibb.co/BPKK8Hm/terrible-icon.png',
    icon_selected:
      'https://i.ibb.co/r6qN2YV/terrible-big-icon.png'
  },
  {
    id: 2,
    text: 'Bad',
    icon: 'https://i.ibb.co/9hLWPYh/bad-icon.png',
    icon_selected:
      'https://i.ibb.co/71rzMSt/sad-big-icon.png'
  },
  {
    id: 3,
    text: 'Okay',
    icon: 'https://i.ibb.co/QcGswBH/okay-icon.png',
    icon_selected:
      'https://i.ibb.co/HTvbnRP/okay-big-icon.png'
  },
  {
    id: 4,
    text: 'Good',
    icon: 'https://i.ibb.co/Z8xYwcs/good-icon.png',
    icon_selected:
      'https://i.ibb.co/6tf34hJ/happy-big-icon.png'
  },
  {
    id: 5,
    text: 'Great',
    icon: 'https://i.ibb.co/4WzvFsm/great-icon.png',
    icon_selected:
      'https://i.ibb.co/rsh9BNt/great-big-icon.png'
  }
]

const defaultSelected = 1;

const size = 67;


const App = () => {
  const handleOnChange = (selectedRating, e) => {
    console.log(selectedRating)
  }
  return (
    <EmoRating
      ratingData={ratingData}
      onChange={handleOnChange}
      defaultSelected={defaultSelected || 1}
      size = {size}
    />
  )
}

export default App
