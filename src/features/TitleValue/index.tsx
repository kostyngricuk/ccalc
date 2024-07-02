import React from 'react';

export default function TitleValue({
  title,
  value
}: {
  title: string
  value: number | string
}) {
  return (
    <p>
      <strong>{ title }:</strong> { value }
    </p>
  );
}
