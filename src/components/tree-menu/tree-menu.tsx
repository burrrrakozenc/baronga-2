/** @jsx jsx */
import React, { useState, Fragment, useEffect } from 'react';
import { Link } from 'gatsby';
import { FiChevronRight } from 'react-icons/fi';
import { Box, Text, jsx } from 'theme-ui';
import CategoryIcon from '../category-icon';
import Tree from './tree';
import styles from './tree-menu.styled';

type Props = {
	items: {
		title: string;
		path: string;
		submenu?: {
			title: string;
			path: string;
		}[];
	}[];
	name?: string;
	style?: React.CSSProperties;
	defaultOpen?: boolean;
};

const TreeMenu: React.FC<Props> = ({ items }) => {
	const [selectedItem, setSelectedItem] = useState('');
	const [subMenu, setSubMenu] = useState('');

	useEffect(() => {
		const path = window.location.pathname;
		let subMenu = path.split('/katalog/collection/')[1] || '';
		subMenu = subMenu.replace(/\/$/, '');
		setSubMenu(subMenu);
		let menu: any = null;
		items.forEach((item: any) => {
			const index = item.submenu.findIndex((menu: any) => menu.path == subMenu);
			if (index > -1) {
				menu = setTimeout(() => setSelectedItem(item.path), 100);
			}
		});
		return () => {
			clearTimeout(menu);
		};
	}, []);
	return (
		<Box className="tree-menu" sx={styles.wrapper} style={{margin:'0 auto', justifyContent:'center', width:150}} >
			{items.map((item) => (
				<Fragment key={item.title} sx={{margin:'0 auto', justifyContent:'center'}}>
					{item?.submenu ? (
						<Tree
							isOpen={selectedItem === item.path}
							onClick={() => setSelectedItem(item.path)}
							className={item.path}
							handler={
								<Fragment>
									<CategoryIcon name={item.path} />
									<Text as="span" sx={styles.menuText}>
										{item.title.replace(/Takı-Aksesuar/,"Takı")}
									</Text>
									{/* <FiChevronRight className="chevron" /> */}
								</Fragment>
							}
						>
							<Fragment>
								{item?.submenu.map((subItem) => (
									<Box
										sx={styles.subItem}
										key={`${item.title}-${subItem.title}`}
										className={subItem.path === subMenu ? 'active-menu' : ''}
									>
										<Link to={`/katalog/collection/${subItem.path}`}>
											{subItem.title.replace(/Takı-Aksesuar/,"Takı")}
										</Link>
									</Box>
								))}
							</Fragment>
						</Tree>
					) : (
						<Link to={item.path}>{item.title}</Link>
					)}
				</Fragment>
			))}
		</Box>
	);
};

export default TreeMenu;
