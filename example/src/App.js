import React from 'react'

import { EmoRating } from 'emo-rating-react'
import 'emo-rating-react/dist/index.css'
const ratingData = [
  {
    id:1,
    text:"Terrible",
    icon:"https://s3-ap-southeast-1.amazonaws.com/kulcare-assets/images/terrible-icon.svg",
    icon_selected:"https://s3-ap-southeast-1.amazonaws.com/kulcare-assets/images/terrible-big-icon.svg",
 },
 {
  id:2,
  text:"Bad",
  icon:"https://s3-ap-southeast-1.amazonaws.com/kulcare-assets/images/bad-icon.svg",
  icon_selected:"https://s3-ap-southeast-1.amazonaws.com/kulcare-assets/images/sad-big-icon.svg"
},
{
  id:3,
  text:"Okay",
  icon:"https://s3-ap-southeast-1.amazonaws.com/kulcare-assets/images/okay-icon.svg",
  icon_selected:"https://s3-ap-southeast-1.amazonaws.com/kulcare-assets/images/okay-big-icon.svg"
},
{
  id:4,
  text:"Good",
  icon:"https://s3-ap-southeast-1.amazonaws.com/kulcare-assets/images/good-icon.svg",
  icon_selected:"https://s3-ap-southeast-1.amazonaws.com/kulcare-assets/images/happy-big-icon.svg"
},
{
  id:5,
  text:"Great",
  icon:"https://s3-ap-southeast-1.amazonaws.com/kulcare-assets/images/great-icon.svg",
  icon_selected:"https://s3-ap-southeast-1.amazonaws.com/kulcare-assets/images/great-big-icon.svg"
},
]
const App = () => {

  const handleOnChange =  ( selectedRating,e)=>{
    console.log(selectedRating)
  }
  return <EmoRating ratingData ={ratingData} onChange={handleOnChange} defaultSelected={1} />
}

export default App
