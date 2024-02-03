import { useColorMode, IconButton } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

const DarkModeSwitch = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const iconColor = {
		light: '#e5e5e5',
		dark: '#e5e5e5',
	};

	const bgColor = {
		light: 'red.400',
		dark: 'red.400',
	};

	const hoverBg = {
		light: 'teal.500',
		dark: 'teal.300',
	};

	return (
		<IconButton
			aria-label="Toggle dark mode"
			icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
			onClick={toggleColorMode}
			borderRadius={'5px'}
			_hover={{
				color: '#e5e5e5',
				bg: hoverBg[colorMode],
			}}
			color={iconColor[colorMode]}
			bg={bgColor[colorMode]}
			pointerEvents="auto"
			fontSize={['md', null, null, null, null, null]}
		/>
	);
};

export default DarkModeSwitch;
