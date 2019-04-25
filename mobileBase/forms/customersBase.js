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

/**
 * @override
 *
 * @properties={typeid:24,uuid:"C11A825A-B1E1-4F40-81BF-9D7D6A174811"}
 */
function submit() {
	if (_super.submit.apply(this, arguments)) {
		plugins.dialogs.showInfoDialog('INFO', 'submission completed');
	}
}
