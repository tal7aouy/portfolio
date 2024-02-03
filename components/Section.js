import { motion } from 'framer-motion';
import { chakra, shouldForwardProp } from '@chakra-ui/react';

const StyledDiv = chakra(motion.div, {
	shouldForwardProp: (prop) => {
		return shouldForwardProp(prop) || prop === 'transition';
	},
});

const Section = ({ children, delay = 0 }) => (
	<StyledDiv
		display="flex"
		flexDirection="column"
		initial={{ y: 80, opacity: 0 }}
		animate={{ y: 0, opacity: 1 }}
		transition={{ duration: 0.6, delay }}
		fontSize={['sm', null, 'md', null, null, null]}
	>
		{children}
	</StyledDiv>
);

export default Section;
