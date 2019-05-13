//business logic for orders
//variables

/**
 * @param {String} el
 * @override
 *
 * @properties={typeid:24,uuid:"8AE0818B-D1C0-434D-B5F1-32D4F692C852"}
 */
function validateDP(el) {
	var dp = this[el];
	switch (el) {
	case 'customer_id':
		if (!dp || dp == '') {
			return 'customer ID cannot be empty.'
		}
		break;
	case 'employee_id':
		if (!dp || dp == '') {
			return 'EmployeeID cannot be empty.'
		}
		break;
	default:
		break;
	}

	return _super.validateDP(el);
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @public 
 *
 * @properties={typeid:24,uuid:"3679B297-E75C-4C4F-A82D-A07D2AE888BE"}
 */
function onShow(firstShow, event) {
	scopes.nav.header_title = 'Orders'
}
