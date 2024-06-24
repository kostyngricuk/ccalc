import React from 'react';
import { useTranslation } from 'react-i18next';

import StyledCopyright from './StyledCopyright';

export default function Copyright() {
  const  { t } = useTranslation();
  return (
    <StyledCopyright>
      { t('copyright') } ©
      {
        new Date().getFullYear()
      }
    </StyledCopyright>
  );
}
