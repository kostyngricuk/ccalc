import React from 'react';
import ReactSelect, { Props } from 'react-select';

export default function Select<
  Option,
  IsMulti extends boolean = false
>(props: Props<Option, IsMulti>) {
  const {
    name,
    value,
    options,
    onChange
  } = props;
  return (
    <ReactSelect
      name={name}
      value={options?.length ? value : null}
      onChange={onChange}
      options={options}
    />
  )
}