import React, { useState } from 'react';
import { Input } from '@alifd/next';
import { trim } from 'awsome-utils';

export default () => {
  const [str, setStr] = useState<string>('');

  const onChangeStr = (val: string) => {
    setStr(trim(val))
  }

  return (
    <div>
      <Input onChange={onChangeStr} />
      <p>{str}</p>
    </div>
  )
}