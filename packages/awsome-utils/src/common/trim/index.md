---
nav:
  title: awsome-utils
  path: /utils
group:
  path: /utils/general
  title: dataGeneral
  order: 4
---

## trim

Demo

```tsx
import React, { useState } from 'react';
import { Input } from '@alifd/next';
import { Common } from 'awsome-utils';

export default () => {
  const [str, setStr] = useState<string>('');

  const onChangeStr = val => {
    setStr(Common.trim(val))
  }

  return (
    <div>
      <Input onChange={onChangeStr} />
      <p>{str}</p>
    </div>
  )
}
```