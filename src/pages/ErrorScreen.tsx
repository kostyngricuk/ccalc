import React from 'react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Section from 'components/Section'
import Title from 'components/Title'
import Main from 'features/Main'

export default function ErrorScreen() {
  const error = useRouteError();

  const { t } = useTranslation();

  return (
    <Main data-testid="error-screen">
      <Section>
        {
          isRouteErrorResponse(error)
            ? (
              <Title>
                { error.status }
                {t(`errors.${error.status}`)}
              </Title>
            )
            : (
              <p>
                {t('errors.unknown')}
              </p>
            )
        }
      </Section>
    </Main>
  );
}
