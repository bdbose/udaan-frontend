import React from 'react';
import { IntlProvider } from 'react-intl';
import translate from './translate';

const Provider = ({ children, locale = translate.en }) => {
  return (
    <IntlProvider locale={locale} messages={locale}>
      {children}
    </IntlProvider>
  );
};

export default Provider;
