import React from 'react';
import { useColorMode, Button, Flex, Box } from '@chakra-ui/react';
import NextLink from 'next/link';
import DarkModeSwitch from '../components/DarkModeSwitch';
import Section from './Section.js';

const Container = ({ children }) => {
	const { colorMode } = useColorMode();

	const bgColor = {
		light: '#EFE7DA',
		dark: '#201F24',
	};

	const color = {
		light: '#171717',
		dark: '#e5e5e5',
	};

	const navHoverBg = {
		light: 'teal.600',
		dark: 'teal.200',
	};

	return (
		<Box bg={bgColor[colorMode]} color={color[colorMode]}>
			<Flex as="main">{children}</Flex>
			<Box
				as="nav"
				className="fixed-navbar"
				display="flex"
				justifyContent={[
					'flex-end',
					'flex-end',
					'flex-end',
					'space-between',
					null,
					null,
				]}
				alignItems={'flex-end'}
				width={'100%'}
				//pl={[null, null, null, 8, 10, null]}
				//pr={[4, 4, 8, 8, 10, null]}
				//pb={[2, 4, 6, null, null, 10]}
				p={[4, 4, 8, 8, 10, null]}
			>
				<Box
					display={['none', null, null, 'flex', null, null]}
					flexDirection={'column'}
					alignItems={'flex-start'}
				>
					<Section delay="0.60">
						<NextLink href="#home" passHref>
							<Button
								as="a"
								color="red.400"
								variant="link"
								//pt={[0, 0, 0.5, null, null, null]}
								_hover={{ color: navHoverBg[colorMode] }}
								pointerEvents="auto"
								fontSize={[null, null, null, 'md', null, null]}
							>
								/ home
							</Button>
						</NextLink>
					</Section>
					<Section delay="0.65">
						<NextLink href="#about-me" passHref>
							<Button
								as="a"
								color="red.400"
								variant="link"
								pt={[0, 0, 0.5, null, null, null]}
								_hover={{ color: navHoverBg[colorMode] }}
								pointerEvents="auto"
								fontSize={[null, null, null, 'md', null, null]}
							>
								/ about me
							</Button>
						</NextLink>
					</Section>
					<Section delay="0.70">
						<NextLink href="#experience" passHref>
							<Button
								as="a"
								color="red.400"
								variant="link"
								pt={[0, 0, 0.5, null, null, null]}
								_hover={{ color: navHoverBg[colorMode] }}
								pointerEvents="auto"
								fontSize={[null, null, null, 'md', null, null]}
							>
								/ experience
							</Button>
						</NextLink>
					</Section>
					
				</Box>
				<Section delay="0.75">
					<DarkModeSwitch />
				</Section>
			</Box>
		</Box>
	);
};

export default Container;
