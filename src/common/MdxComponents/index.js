import React from 'react';
import H from './Headings';
import Text from './Text';
import Link from './Link';
import Span from './Span';

export default {
  h1: (props) => <H as="h1" {...props} />,
  h2: (props) => <H as="h2" {...props} />,
  h3: (props) => <H as="h3" {...props} />,
  h4: (props) => <H as="h4" {...props} />,
  h5: (props) => <H as="h5" {...props} />,
  h6: (props) => <H as="h6" {...props} />,
  p: (props) => <Text {...props} />,
  a: (props) => <Link {...props} />,
  highlight: (props) => <Span {...props} />,
};
