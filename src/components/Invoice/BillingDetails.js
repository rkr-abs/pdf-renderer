import React from 'react';
import { map, values } from '@laufire/utils/collection';
import { View, Text } from '@react-pdf/renderer';

const BillingDetails = (context) => {
	const { styles, config: { obj, billingDetails, digits }} = context;

	return <View style={ [styles.row, { borderLeft: '1.5px solid #EEE' }] }>
		{values(map(billingDetails, (value, key) =>
			<View
				key={ key }
				style={ [styles.row1, styles.borderTop] }
			>
				<Text style={ styles.bold }>{key}</Text>
				<Text style={ styles.light }>{obj[value].toFixed(digits)}
				</Text>
			</View>))}
		<View style={ [styles.row1, styles.borderTop] }>
			<Text style={ styles.bold }>Amount in words:
				<Text style={ styles.light }>{ obj.amountInWords}</Text>
			</Text>
		</View>
	</View>;
};

export default BillingDetails;
