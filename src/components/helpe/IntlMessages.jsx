import React from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';

const InjectMessages = (props) => <FormattedMessage {...props} />;

export default injectIntl(InjectMessages, {
  withRef: false,
});
