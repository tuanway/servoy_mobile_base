//Business Logic

/**
 * @param {String} el
 * @override
 *
 * @properties={typeid:24,uuid:"7C33C9A5-4C19-41F8-A426-C3DC5DE233BA"}
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
 * @properties={typeid:24,uuid:"EB344882-7043-4B4F-A9BC-3EFA5B4F636D"}
 */
function submit() {
	if (_super.submit.apply(this, arguments)) {
		plugins.dialogs.showInfoDialog('INFO', 'submission completed');
	}
}
