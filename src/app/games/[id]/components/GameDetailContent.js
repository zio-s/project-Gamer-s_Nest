// import React from 'react';
// import {
//   Box,
//   Container,
//   Grid,
//   Heading,
//   Text,
//   Image,
//   Flex,
//   Stack,
//   Tab,
//   Tabs,
//   TabList,
//   TabPanel,
//   TabPanels,
//   Progress,
//   Card,
//   CardBody,
//   SimpleGrid,
//   Link,
//   Badge,
//   VStack,
//   HStack,
// } from '@chakra-ui/react';
// import { Star, Globe, Calendar, Clock, Users } from 'lucide-react';

// // 개요 섹션
// const OverviewSection = ({ game }) => {
//   return (
//     <Stack spacing={8}>
//       {/* 주요 정보 */}
//       <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
//         <Card>
//           <CardBody>
//             <HStack mb={2}>
//               <Globe size={16} />
//               <Text fontWeight='semibold'>장르</Text>
//             </HStack>
//             <Text color='gray.500'>{game?.genres?.map((genre) => genre.name).join(', ')}</Text>
//           </CardBody>
//         </Card>

//         <Card>
//           <CardBody>
//             <HStack mb={2}>
//               <Calendar size={16} />
//               <Text fontWeight='semibold'>출시일</Text>
//             </HStack>
//             <Text color='gray.500'>{game?.released}</Text>
//           </CardBody>
//         </Card>

//         <Card>
//           <CardBody>
//             <HStack mb={2}>
//               <Clock size={16} />
//               <Text fontWeight='semibold'>평균 플레이타임</Text>
//             </HStack>
//             <Text color='gray.500'>{game?.playtime} 시간</Text>
//           </CardBody>
//         </Card>
//       </SimpleGrid>

//       {/* 게임 설명 */}
//       <Box>
//         <Heading size='lg' mb={4}>
//           게임 소개
//         </Heading>
//         <Text color='gray.500' whiteSpace='pre-line'>
//           {game?.description_raw}
//         </Text>
//       </Box>

//       {/* 개발사 정보 */}
//       <Box>
//         <Heading size='lg' mb={4}>
//           개발/배급사
//         </Heading>
//         <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
//           <Box>
//             <Text fontWeight='semibold' mb={2}>
//               개발사
//             </Text>
//             <Text color='gray.500'>{game?.developers?.map((dev) => dev.name).join(', ')}</Text>
//           </Box>
//           <Box>
//             <Text fontWeight='semibold' mb={2}>
//               배급사
//             </Text>
//             <Text color='gray.500'>{game?.publishers?.map((pub) => pub.name).join(', ')}</Text>
//           </Box>
//         </SimpleGrid>
//       </Box>
//     </Stack>
//   );
// };

// // 미디어 섹션
// const MediaSection = ({ game }) => {
//   return (
//     <Box>
//       <Heading size='lg' mb={6}>
//         스크린샷
//       </Heading>
//       <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
//         {game?.screenshots?.map((screenshot, index) => (
//           <Image
//             key={screenshot.id}
//             src={screenshot.image}
//             alt={`Screenshot ${index + 1}`}
//             objectFit='cover'
//             height='200px'
//             borderRadius='lg'
//           />
//         ))}
//       </SimpleGrid>
//     </Box>
//   );
// };

// // 에디션 섹션
// const EditionsSection = ({ game }) => {
//   return (
//     <Box>
//       <Heading size='lg' mb={6}>
//         구매 정보
//       </Heading>
//       <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
//         {game?.stores?.map((store) => (
//           <Card key={store.id}>
//             <CardBody>
//               <Text fontWeight='semibold' mb={4}>
//                 {store.store.name}
//               </Text>
//               <Link href={`https://${store.store.domain}`} isExternal color='blue.500' _hover={{ color: 'blue.400' }}>
//                 스토어 방문하기 →
//               </Link>
//             </CardBody>
//           </Card>
//         ))}
//       </SimpleGrid>
//     </Box>
//   );
// };

// // 리뷰 섹션
// const ReviewsSection = ({ game }) => {
//   return (
//     <Box>
//       <HStack spacing={4} mb={6}>
//         <HStack>
//           <Text fontSize='4xl' fontWeight='bold'>
//             {game?.rating}
//           </Text>
//           <Star size={32} fill='yellow.400' />
//         </HStack>
//         <Text color='gray.500' fontSize='sm'>
//           {game?.ratings_count} ratings
//         </Text>
//       </HStack>

//       {/* 평점 분포 */}
//       <Stack spacing={4}>
//         {game?.ratings?.map((rating) => (
//           <Box key={rating.id}>
//             <Flex justify='space-between' mb={2}>
//               <Text fontSize='sm'>{rating.title}</Text>
//               <Text fontSize='sm'>{rating.percent}%</Text>
//             </Flex>
//             <Progress value={rating.percent} />
//           </Box>
//         ))}
//       </Stack>
//     </Box>
//   );
// };

// // 메인 컴포넌트
// const GameDetailContent = ({ game }) => {
//   return (
//     <Container maxW='7xl' py={8}>
//       <Tabs>
//         <TabList>
//           <Tab>개요</Tab>
//           <Tab>미디어</Tab>
//           <Tab>에디션</Tab>
//           <Tab>리뷰</Tab>
//         </TabList>

//         <TabPanels>
//           <TabPanel>
//             <OverviewSection game={game} />
//           </TabPanel>
//           <TabPanel>
//             <MediaSection game={game} />
//           </TabPanel>
//           <TabPanel>
//             <EditionsSection game={game} />
//           </TabPanel>
//           <TabPanel>
//             <ReviewsSection game={game} />
//           </TabPanel>
//         </TabPanels>
//       </Tabs>
//     </Container>
//   );
// };

// export default GameDetailContent;
