import React from 'react';
import ReactSelect, { GroupBase, Props } from 'react-select';

export default function Select<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(props: Props<Option, IsMulti, Group>) {
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