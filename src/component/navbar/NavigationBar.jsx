import React from 'react';
import NavBarItem from './navbar-items/NavBarItem';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';


const useStyles = makeStyles({
	menuListWrapper: {
		"& .MuiPaper-root": {
			borderRadius: "0 0 5px 5px"
		},
		"& .MuiListItem-gutters": {
			fontSize: "12px",

		}
	},
	button: {
		textTransform: "none",
		fontSize: '16px',
	}
});


const NavigationBar = () => {
	const firstBottonMenuParameters = [
		{ name: "Державна підсумкова атестація", navLinkTo: "/dima" },
		{ name: "Державний стандарт освіти", navLinkTo: "/olya" },
		{ name: "Навчальні програми", navLinkTo: "/olya" },
		{ name: "Методичні рекомендації", navLinkTo: "/olya" },
		{ name: "Листи МОН України", navLinkTo: "/olya" },
		{ name: "Календарно-тематичні плани", navLinkTo: "/olya" }
	]
	const secondBottonMenuParameters = [
		{ name: "Підручники", navLinkTo: "/dima" },
		{ name: "Посібники", navLinkTo: "/olya" },
		{ name: "Мультимедійні посібники", navLinkTo: "/olya" }
	]
	const thirdBottonMenuParameters = [
		{ name: "Експрес-урок української", navLinkTo: "/Теле- й радіоуроки/Експрес-урок української" },
		{ name: "Радіопередача “Загадки мови”", navLinkTo: "/Теле- й радіоуроки/Радіопередача_Загадки_мови" },
		{ name: "Аудіодиктанти", navLinkTo: "/Теле- й радіоуроки/Аудіодиктанти" },
		{ name: "Інтерв’ю", navLinkTo: "/Теле- й радіоуроки/Інтерв’ю" }
		
	]
	const classes = useStyles();

	return (
		<div className='navigationBarWrapper'>

			<Container  maxWidth='md'>
				<div className='navBarItems' >
					<Button className={classes.button} > Головна</Button>
					<NavBarItem menuItemName={firstBottonMenuParameters}
						classes={classes}
						buttonName={"Нормативна база"}
					/>
					<NavBarItem menuItemName={secondBottonMenuParameters}
						classes={classes}
						buttonName={"Підручники й посібники"}
					/>
					<NavBarItem menuItemName={thirdBottonMenuParameters}
						classes={classes}
						buttonName={"Теле- й радіоуроки"}
					/>
				</div>
			</Container>
		</div>


	);
}
export default NavigationBar;