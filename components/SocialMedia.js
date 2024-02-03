import { useColorMode, Stack, Link, Button, Icon } from '@chakra-ui/react'
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import { FaKaggle } from 'react-icons/fa'

const SocialMedia = () => {
  const { colorMode } = useColorMode()

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

  return (
    <Stack display={'flex'} flexDirection={'row'} spacing={0} pt={4}>
      <Link href='https://github.com/tal7aouy' target='_blank'>
        <Button
          aria-label='Open Github'
          leftIcon={<Icon mr={-2} as={IoLogoGithub} />}
          borderRadius={'5px'}
          p={0}
          color={socialIconColor[colorMode]}
          bg={socialBgColor[colorMode]}
          fontSize={['lg', 'md', null, null, null, null]}
          _hover={{
            color: '#e5e5e5',
            bg: socialHoverBg[colorMode],
          }}
        ></Button>
      </Link>
      <Link href='https://www.kaggle.com/tal7aouy' target='_blank'>
        <Button
          aria-label='Open Kaggle'
          leftIcon={<Icon mr={-2} mb={0.5} as={FaKaggle} />}
          borderRadius={'5px'}
          p={0}
          ml={2}
          color={socialIconColor[colorMode]}
          bg={socialBgColor[colorMode]}
          fontSize={['lg', 'md', null, null, null, null]}
          _hover={{
            color: '#e5e5e5',
            bg: socialHoverBg[colorMode],
          }}
        ></Button>
      </Link>
      <Link href='https://www.linkedin.com/in/tal7aouy/' target='_blank'>
        <Button
          aria-label='Open Instagram'
          leftIcon={<Icon mr={-2} as={IoLogoLinkedin} />}
          borderRadius={'5px'}
          p={0}
          ml={2}
          color={socialIconColor[colorMode]}
          bg={socialBgColor[colorMode]}
          fontSize={['lg', 'md', null, null, null, null]}
          _hover={{
            color: '#e5e5e5',
            bg: socialHoverBg[colorMode],
          }}
        ></Button>
      </Link>
    </Stack>
  )
}

export default SocialMedia
