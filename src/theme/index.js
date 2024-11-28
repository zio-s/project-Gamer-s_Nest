import { extendTheme } from '@chakra-ui/react';
import { Container } from './componets/container';
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};
const theme = extendTheme({
  components: {
    Container,
  },
  config,

  // 필요한 경우 추가 테마 설정
  // colors: {
  //   brand: {
  //     // 커스텀 색상
  //   },
  // },
});

export default theme;
