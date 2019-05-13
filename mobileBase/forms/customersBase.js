//Business Logic

/**
 * @param {String} el
 * @override
 *
 * @properties={typeid:24,uuid:"A4091C46-9FE4-48FE-BDAD-F0C980EE4D8E"}
 */
function validateDP(el) {
	var dp = this[el];
	switch (el) {
	case 'city':
		if (!dp || dp == '') {
			return 'City cannot be empty.'
		}
		break;
	case 'country':
		if (!dp || dp == '') {
			return 'Country cannot be empty.'
		}
		if (dp != 'USA') {
			return 'Must be from USA.'
		}
		break;
	default:
		break;
	}

	return _super.validateDP(el);
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

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"4A3127F5-4F62-45BA-92FE-968012614145"}
 */
function onShow(firstShow, event) {
	scopes.nav.header_title = 'Customers';
}
