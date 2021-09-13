/** @jsx jsx */
import React from 'react';
import { Flex, Text, jsx } from 'theme-ui';
import {
	FacebookShareButton,
	TwitterShareButton,
	PinterestShareButton,
	FacebookIcon,
	TwitterIcon,
	PinterestIcon,
} from 'react-share';
import styles from './social-share.style';

type PropsType = {
	title: string;
	url: string;
};

const SocialShare: React.FC<PropsType> = ({ title, url }) => {
	return (
		<Flex sx={styles.wrapper}>
			<Text sx={styles.title}>Paylaş: &nbsp;</Text>
			<FacebookShareButton quote={title} url={url}>
				<FacebookIcon size={35} round />
			</FacebookShareButton>
			<TwitterShareButton title={title} url={url}>
				<TwitterIcon size={35} round />
			</TwitterShareButton>
			<PinterestShareButton media={`${url}`} title={title} url={url}>
				<PinterestIcon size={35} round />
			</PinterestShareButton>
		</Flex>
	);
};

export default SocialShare;
