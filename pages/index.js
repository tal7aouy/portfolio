import Head from 'next/head'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import {
  useColorMode,
  Heading,
  Box,
  Stack,
  Highlight,
  Image,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  List,
  ListIcon,
  ListItem,
  Button,
  Link,
  Icon
} from '@chakra-ui/react'
import { IoLogoTwitter } from 'react-icons/io5'

// components
import Container from '../components/Container'
import { BioSection, BioYear } from '../components/Bio.js'
import Paragraph from '../components/Paragraph'
import VoxelRaccoonLoader from '../components/voxel-raccoon-loader.js'
import SocialMedia from '../components/SocialMedia.js'
import Section from '../components/Section.js'

import { ChevronRightIcon, DownloadIcon, ChatIcon } from '@chakra-ui/icons'

import Typed from 'react-typed'

// raccoon voxel component
const LazyVoxelRaccoon = dynamic(
  () => import('../components/voxel-raccoon.js'),
  {
    ssr: false,
    loading: () => <VoxelRaccoonLoader />,
  }
)

export default function Home() {
  const router = useRouter()
  const { colorMode } = useColorMode()
  const year = new Date().getFullYear()
  const headingColor = {
    light: 'teal.500',
    dark: 'teal.300',
  }
  const socialIconColor = {
    light: 'red.400',
    dark: 'red.400',
  }
  const socialBgColor = {
    light: 'whiteAlpha',
    dark: 'blackAlpha',
  }
  const socialHoverBg = {
    light: 'teal.500',
    dark: 'teal.300',
  }

  const listIconsColor = {
    light: 'red.400',
    dark: 'teal.300',
  }

  const highlightColor = {
    light: '#171717',
    dark: '#e5e5e5',
  }

  const componentsBoxShadow = {
    light: '0 5px 5px rgba(0, 0, 0, 0.1)',
    dark: '0 5px 5px rgba(0, 0, 0, 0.1)',
  }

  const tabButtonColor = {
    light: '#171717',
    dark: '#e5e5e5',
  }

  const tabButtonBgColor = {
    light: '',
    dark: '',
  }

  const contentButtonColor = {
    light: '#e5e5e5',
    dark: '#e5e5e5',
  }

  const contentButtonBgColor = {
    light: 'teal.500',
    dark: '',
  }

  const contentButtonHoverBg = {
    light: 'teal.500',
    dark: 'teal.300',
  }

  const contentButtonHoverColor = {
    light: '#e5e5e5',
    dark: '#e5e5e5',
  }

  const contentButtonBorderColor = {
    light: 'teal.500',
    dark: 'teal.300',
  }

  const contentButtonHoverBorderColor = {
    light: '',
    dark: '',
  }

  return (
    <Container>
      <Head>
        <title>tal7aouy</title>
        <link rel='shortcut icon' href='/favicon.ico' />
      </Head>
      <Stack
        spacing={20}
        m='0 auto 1rem auto'
        maxWidth='700px'
        px={[8, null, null, null, null, null]}
      >
        <Box
          as='main'
          id='home'
          display='flex'
          flexDirection='column'
          justifyContent='center'
          height='100vh'
        >
          <Section delay='0.3'>
            <Box display='flex' zIndex={0}>
              <LazyVoxelRaccoon />
            </Box>
          </Section>
          <Section>
            <Heading
              as='h1'
              fontSize={['4xl', null, '4.5xl', null, null, null]}
              mb={2}
              zIndex={1}
            >
              <Typed
                strings={[
                  "hi, <mark class='highlight-word-banner'>I am an NLP engineer 🧠🛠️✨</mark>.",
                ]}
                startDelay={1500}
                typeSpeed={45}
              />
            </Heading>
          </Section>
          <Section delay='0.4'>
            <Box zIndex={1}>
              <Paragraph>
                <Highlight
                  query={['aaaa']}
                  styles={{
                    fontWeight: '600',
                    color: highlightColor[colorMode],
                  }}
                >
                  I&apos;m Med Talhaouy. Working @Maxmind , specializing in web development with a strong inclination towards crafting elegant and efficient deep learning solutions. While I approach life with a light-hearted attitude, my commitment to my work is unwavering. I am passionate about problem-solving, consistently choosing to confront challenges head-on rather than dwelling on them.
                </Highlight>
              </Paragraph>
            </Box>
            <Section delay='0.6'>
              <Box
                display='flex'
                alignItems='flex-end'
                justifyContent='space-between'
                flexWrap='wrap'
              >
                <Box display='flex'>
                  <Box as={motion.div} whileHover={{ scale: 1.05 }} mt={8}>
                    <Button
                      aria-label='Contact me'
                      fontSize={['md', null, 'lg', null, null, null]}
                      fontWeight={500}
                      rightIcon={<ChatIcon />}
                      borderRadius={'5px'}
                      variant='outline'
                      pt={6}
                      pb={6}
                      borderColor={contentButtonBorderColor[colorMode]}
                      color={contentButtonColor[colorMode]}
                      bg={contentButtonBgColor[colorMode]}
                      _hover={{
                        color: contentButtonHoverColor[colorMode],
                        bg: contentButtonHoverBg[colorMode],
                        borderColor: contentButtonHoverBorderColor[colorMode],
                      }}
                      onClick={() => router.push('mailto:talhaouy.me@gmail.com')}
                    >
                      Contact me
                    </Button>
                  </Box>
                </Box>
                <Box>
                  <SocialMedia />
                </Box>
              </Box>
            </Section>
          </Section>
        </Box>
        <Box id='about-me'>
          <Box display={'flex'}>
            <Box>
              <Heading
                as='h2'
                variant='section-title'
                mb={6}
                fontSize={['3xl', null, '3.5xl', null, null, null]}
                color={headingColor[colorMode]}
              >
                / about me
              </Heading>
              <Box fontSize={['sm', null, 'md', null, null, null]}>
                <BioSection>
                  <Paragraph>I mostly used <b>Laravel</b>, <b>Node.js</b>, <b>PyTorch</b> .
Outside of programming, I enjoy doing Video editing and traveling. If you happen to be in the same city I live (currently in <b>Casablanca</b>), maybe we can hang out or work on something together.</Paragraph>
                </BioSection>
              
              </Box>
            </Box>
            <Box
              mt={10}
              ml={5}
              display={['none', 'none', 'inline-block', null, null]}
            >
              <Image
                boxShadow={componentsBoxShadow[colorMode]}
                maxWidth={[null, null, '180px', '200px', null]}
                borderRadius='full'
                src='/images/profile.jpeg'
                alt='Profile Image'
              />
            </Box>
          </Box>
          <Box fontSize={['sm', null, 'md', null, null, null]} pt={8}>
            <Paragraph>
              Here are some of the main technologies I have been working with:
            </Paragraph>
            <Box display='flex' justifyContent={'center'}>
              <Box
                display='flex'
                justifyContent={'space-around'}
                width={'100%'}
              >
                <List spacing={1} pt={4} pb={8}>
                  <ListItem display='flex' alignItems='center'>
                    <ListIcon
                      as={ChevronRightIcon}
                      color={listIconsColor[colorMode]}
                    />
                    <Paragraph>Python</Paragraph>
                  </ListItem>
                  <ListItem display='flex' alignItems='center'>
                    <ListIcon
                      as={ChevronRightIcon}
                      color={listIconsColor[colorMode]}
                    />
                    <Paragraph>PHP</Paragraph>
                  </ListItem>
                  <ListItem display='flex' alignItems='center'>
                    <ListIcon
                      as={ChevronRightIcon}
                      color={listIconsColor[colorMode]}
                    />
                    <Paragraph>JavaScript</Paragraph>
                  </ListItem>
                  <ListItem display='flex' alignItems='center'>
                    <ListIcon
                      as={ChevronRightIcon}
                      color={listIconsColor[colorMode]}
                    />
                    <Paragraph>Golang</Paragraph>
                  </ListItem>
                  <ListItem display='flex' alignItems='center'>
                    <ListIcon
                      as={ChevronRightIcon}
                      color={listIconsColor[colorMode]}
                    />
                    <Paragraph>Docker</Paragraph>
                  </ListItem>
                </List>
                <List spacing={1} pt={4} pb={8}>
                  <ListItem display='flex' alignItems='center'>
                    <ListIcon
                      as={ChevronRightIcon}
                      color={listIconsColor[colorMode]}
                    />
                    <Paragraph>PyTorch</Paragraph>
                  </ListItem>
                  <ListItem display='flex' alignItems='center'>
                    <ListIcon
                      as={ChevronRightIcon}
                      color={listIconsColor[colorMode]}
                    />
                    <Paragraph>Laravel</Paragraph>
                  </ListItem>
                  <ListItem display='flex' alignItems='center'>
                    <ListIcon
                      as={ChevronRightIcon}
                      color={listIconsColor[colorMode]}
                    />
                    <Paragraph>Pandas, Numpy</Paragraph>
                  </ListItem>
                  <ListItem display='flex' alignItems='center'>
                    <ListIcon
                      as={ChevronRightIcon}
                      color={listIconsColor[colorMode]}
                    />
                    <Paragraph>OpenCV</Paragraph>
                  </ListItem>
                  <ListItem display='flex' alignItems='center'>
                    <ListIcon
                      as={ChevronRightIcon}
                      color={listIconsColor[colorMode]}
                    />
                    <Paragraph>(Node, Vue, Next).js</Paragraph>
                  </ListItem>
                </List>
              </Box>
            </Box>
            <Paragraph>
              Outside of work, I actively engage with the latest developments in
              science and art, staying up to date with advancements in these
              fields. Alongside that, I indulge in playing video games, consume
              productivity resources, and nurture a deep passion for learning
              foreign languages.
            </Paragraph>
          </Box>
        </Box>
        <Box id='experience'>
          <Heading
            as='h2'
            variant='section-title'
            mb={6}
            fontSize={['3xl', null, '3.5xl', null, null, null]}
            color={headingColor[colorMode]}
          >
            / experience
          </Heading>
          <Tabs
            variant='unstyled'
            display='flex'
            flexDirection={'column'}
            alignItems={'flex-start'}
          >
 <TabPanels fontSize={['sm', null, 'md', null, null, null]} pl={2}>
              <TabPanel pl={0} pr={0} pb={0}>
                <Heading
                  as='h3'
                  fontSize={['xl', null, '2xl', null, null, null]}
                >
                  <Highlight
                    query='maxmind.ma'
                    styles={{
                      color: headingColor[colorMode],
                    }}
                  >
                    Software engineer - Full-time @maxmind.ma
                  </Highlight>
                </Heading>
                <Paragraph as='em'>03/2023 — Today</Paragraph>
               
              </TabPanel>
            </TabPanels>
             <TabPanels fontSize={['sm', null, 'md', null, null, null]} pl={2}>
              <TabPanel pl={0} pr={0} pb={0}>
                <Heading
                  as='h3'
                  fontSize={['xl', null, '2xl', null, null, null]}
                >
                  <Highlight
                    query='Phlokk'
                    styles={{
                      color: headingColor[colorMode],
                    }}
                  >
                   Laravel engineer - Part-time @Phlokk
                  </Highlight>
                </Heading>
                <Paragraph as='em'>09/2022 — 03/2023</Paragraph>
               
              </TabPanel>
            </TabPanels>
             <TabPanels fontSize={['sm', null, 'md', null, null, null]} pl={2}>
              <TabPanel pl={0} pr={0} pb={0}>
                <Heading
                  as='h3'
                  fontSize={['xl', null, '2xl', null, null, null]}
                >
                  <Highlight
                    query='Fiverr'
                    styles={{
                      color: headingColor[colorMode],
                    }}
                  >
                    Full-stack Developer - Freelancer @Fiverr
                  </Highlight>
                </Heading>
                <Paragraph as='em'>12/2020 — 03/2023</Paragraph>
               
              </TabPanel>
            </TabPanels>
             <TabPanels fontSize={['sm', null, 'md', null, null, null]} pl={2}>
              <TabPanel pl={0} pr={0} pb={0}>
                <Heading
                  as='h3'
                  fontSize={['xl', null, '2xl', null, null, null]}
                >
                  <Highlight
                    query='ChickenSpot'
                    styles={{
                      color: headingColor[colorMode],
                    }}
                  >
                    Software Developer - Intern @ChickenSpot
                  </Highlight>
                </Heading>
                <Paragraph as='em'>01/2020 — 06/2020</Paragraph>
               
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>

        <Box
          display='flex'
          flexDirection='column'
          alignItems='center'
          fontSize={'xs'}
        >
          <Paragraph>designed with ❤️.</Paragraph>
          <Paragraph>{year} ©All rights reserved.</Paragraph>
        </Box>
      </Stack>
    </Container>
  )
}
