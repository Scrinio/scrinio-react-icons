# scrinio-react-icons

> Customizable icons to use in React projects

[![NPM](https://img.shields.io/npm/v/scrinio-react-icons.svg)](https://www.npmjs.com/package/scrinio-react-icons) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## To install

```bash
yarn add scrinio-react-icons
# or
npm install scrinio-react-icons
```

## Example usage

```tsx
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

## Example usage 2

```tsx
import { useState } from 'react'
import { HomeIcon } from 'scrinio-react-icons'

const App = () => {
  const [isActive, setIsActive] = useState(false)

  const handleToggleIsActive = () => {
    setIsActive(!isActive)
  }

  return (
    <button onClick={handleToggleIsActive} type='button'>
      <span>Ir al home</span>
      <HomeIcon color='white' isActive={isActive} colorActive='purple' />
    </button>
  )
}
```

## Optional icon properties

| Property      | Default          |
| ------------- | ---------------- |
| `color`       | `scrinio colors` |
| `isActive`    | `false`          |
| `colorActive` | `#FFF`           |

## License

MIT © Scrinio
