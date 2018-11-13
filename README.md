# builrd-
Build ui library with rollup.js

## Features
building ui library for react components with sass and css-modules

## Installation 
```sh 
npm i 
```

## Example

```jsx
// src/Logo

import React from 'react';
import styles from './Logo.scss'

export function Logo({text}) {
  return <div className={styles.logo}>{text}</div>
}
```

#### Out file

```javascript
import React from 'react';

var styles = {"_logo_17vek_1":"Logo__logo_17vek_1__fKvGE"};

function Logo(_ref) {
  var text = _ref.text;
  return React.createElement("div", {
    className: styles.logo
  }, text);
}
```
