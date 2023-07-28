# scrinio-react-icons

> Customizable icons to use in React projects

[![NPM](https://img.shields.io/npm/v/scrinio-react-icons.svg)](https://www.npmjs.com/package/scrinio-react-icons) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
yarn add scrinio-react-icons
# or
npm install scrinio-react-icons
```

## Example usage

```tsx
import React, { Component } from 'react'

import { HomeIcon } from 'scrinio-react-icons'

const App = () => {
  return (
    <button type='button'>
      <span>Ir al home</span>
      <HomeIcon />
    </button>
  )
}
```

## Optional properties

| Key           | Default         |
| ------------- | --------------- |
| `color`       | `scrinio color` |
| `isActive`    | `false`         |
| `colorActive` | `#FFF`          |

## License

MIT © [Scrinio]
