import React from 'react';
import { Input } from '@alifd/next';

interface Props {
  placeholder: string;
}

export default ({ placeholder }: Props) => <Input placeholder={placeholder} />;

