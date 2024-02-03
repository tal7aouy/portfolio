import { forwardRef } from 'react';
import { Box, Spinner } from '@chakra-ui/react';

export const RaccoonSpinner = () => (
	<Spinner
		size="xl"
		position="absolute"
		left="50%"
		top="50%"
		ml="calc(0px - var(--spinner-size) / 2)"
		mt="calc(0px - var(--spinner-size))"
	/>
);

export const RaccoonContainer = forwardRef(({ children }, ref) => (
	<Box
		ref={ref}
		className="voxel-raccoon"
		m="auto"
		mt={['-80px', '-160px', '-200px', '-220px', '-230px', '-230px']}
		mb={['-60px', '-80px', '-120px', '-140px', '-170px', '-170px']}
		w={[300, 320, 500, 600, 700, null]}
		h={[300, 320, 500, 600, 700, null]}
	>
		{children}
	</Box>
));

RaccoonContainer.displayName = 'RaccoonContainer';

const Loader = () => {
	return (
		<RaccoonContainer>
			<RaccoonSpinner />
		</RaccoonContainer>
	);
};

export default Loader;
