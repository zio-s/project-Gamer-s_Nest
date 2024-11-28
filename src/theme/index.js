import { extendTheme } from '@chakra-ui/react';
import { Container } from './componets/container';

const theme = extendTheme({
  components: {
    Container,
  },
});

export default theme;
