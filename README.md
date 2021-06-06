# emo-rating-react

> Emoji rating react library

[![NPM](https://img.shields.io/npm/v/emo-rating-react.svg)](https://www.npmjs.com/package/emo-rating-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save emo-rating-react
```

# emo-rating-react

> A simple Emoji rating react library

## Usage

```jsx
import React, { Component } from 'react';

import EmoRating from 'emo-rating-react';
import 'emo-rating-react/dist/index.css';

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

class Example extends Component {
  handleOnChange = (selectedRating, e) => {
    console.log(selectedRating)
  }
  render() {
    return <EmoRating 
              ratingData={ratingData}
              onChange={this.handleOnChange}
              defaultSelected={defaultSelected}
              customClassName="classNameHere"
              size={67}
            />
  }
}
```

## API

#### Default options

Properties | Description | Default | Type | Optional
---|---|---|---|---
ratingData | ratingData must be an array of objects with id, text, icon, icon_selected as properties| [] | Array | No
onChange | onChange function handles changing the emoji selection, this function returns the emoji selected, see console | -- | function | No
defaultSelected | this shows a rating/ emoji selected by default | 1 | Yes 
customClassName | define a custom class for this plugin | -- | String | Yes
size | define size for the emoji image | "67" | Integer | Yes

## License

MIT © [sarbjeetsingh](https://github.com/sarbjeetsingh)
