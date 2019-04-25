//Business Logic

/**
 * @override
 *
 * @properties={typeid:24,uuid:"1433F1E8-7D60-4FD3-B660-E685A3BAF29B"}
 */
function setupValidators() {
	validations = {
		city: [{ value: '', message: 'City cannot be empty.' }],
		country: [{ value: '', message: 'Country cannot be empty.' }, { valid_value: 'USA', message: 'Must be from USA.' }]
	}
}
