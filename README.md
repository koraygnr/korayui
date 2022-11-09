# korayui

> Patika.dev npm package publishing task

![Preview](https://i.hizliresim.com/m3xkbi2.png)


[![NPM](https://img.shields.io/npm/v/korayui.svg)](https://www.npmjs.com/package/korayui) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save korayui
```

## Usage

```jsx
import React from 'react'

import { Button } from 'korayui'
import 'korayui/dist/index.css'

const App = ( ) => {
  return (
    <>
      <Button type="primary">Primary Button</Button>
      <Button type="default">Default Button</Button>
      <Button type="dashed">Dashed Button</Button>
      <Button type="text">Text Button</Button>
      <Button type="link">Link Button</Button>
    </>
  )
  
}
```

## License

MIT © [koraygnr](https://github.com/koraygnr)
