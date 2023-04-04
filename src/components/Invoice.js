import React from 'react';
import { Page, Document, StyleSheet, Font } from '@react-pdf/renderer';
import Table from './Table';
import InvoiceSection from './InvoiceSection';
import Vendor from './Vendor';
import GovtDoc from './GovtDoc';
import RobotoBold from '../fonts/RobotoMono-Bold.ttf';
import RobotoLight from '../fonts/RobotoMono-Light.ttf';
import Address from './Address';
import BankDetails from './BankDetails';
import Description from './Description';

Font.register({ family: 'Roboto-Bold',
	src: RobotoBold });
Font.register({ family: 'Roboto-Light',
	src: RobotoLight });

const styles = StyleSheet.create({
	page: {
		flexDirection: 'column',
		margin: 20,
		marginTop: 50,
		padding: 20,
	},
	view: {
		flexDirection: 'row',
	},
	text: {
		marginLeft: 30,
		fontSize: 10,
		width: 150,
		flexWrap: 'wrap',

	},
	bold: {
		fontFamily: 'Roboto-Bold',
		textAlign: 'justify',
	},
	light: {
		fontFamily: 'Roboto-Light',
		textAlign: 'justify',
	},
	subtext: {
		marginLeft: 99,
		paddingLeft: 30,
		fontSize: 10,
		width: 180,
		flexWrap: 'wrap',
	},
	subView: {
		flexDirection: 'column',
	},
});

const Invoice = (context) => <Document>
	<Page size="A4" style={ styles.page }>
		<InvoiceSection { ...{ ...context, styles } }/>
		<Vendor { ...{ ...context, styles } }/>
		<Address { ...{ ...context, styles } }/>
		<GovtDoc { ...{ ...context, styles } }/>
		<Table { ...context }/>
		<BankDetails { ...context }/>
		<Description { ...{ ...context, styles } }/>
	</Page>
</Document>;

export default Invoice;
