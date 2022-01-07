import React, { useState } from 'react';
import { Box, NumberPicker, Button } from '@alifd/next';
import { thousandFormat } from 'awsome-utils';

const ThousandFormat = () => {
  const [num, setNum] = useState<number>();
  const [digit, setDigit] = useState<number>(2);
  const [text, setText] = useState<string>('');

  const onChangeDigit = (val: number) => setDigit(val || 2)

  const onClick = () => {
    setText(thousandFormat(num || '', digit));
  }

  return (
    <Box direction="column">
      <NumberPicker label="请输入有效数字：" precision={8} placeholder="整数 or 小数" hasTrigger={false} onChange={setNum} />
      <br />
      <br />
      <NumberPicker label="请输入小数位：" placeholder="整数" hasTrigger={false} onChange={onChangeDigit} defaultValue={2} />
      <br />
      <br />
      <Button type="normal" onClick={onClick}>
        提交
      </Button>
      <br />
      <p style={{ color: "#4c4c4c", fontSize: 14 }}>{`格式化后：${text || '待输入'}`}</p>
    </Box>
  )
}

export default ThousandFormat;
