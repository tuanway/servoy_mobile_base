/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"93A26B6C-667D-45CB-85A0-5067BE7FB418"}
 */
var test;

/**
 * @param {String} el
 * @override
 *
 * @properties={typeid:24,uuid:"5D733DED-3E82-4AD3-BD7F-8B28175BCEE2"}
 */
function validateDP(el) {
	var dp = this[el];
	switch (el) {
	case 'test':
		if (!dp || dp == '') {
			return 'Test cannot be empty.'
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
 * @properties={typeid:24,uuid:"7197EF72-9D38-4D38-86C8-37E581780389"}
 */
function submit() {
	if (_super.submit.apply(this, arguments)) {
		application.output(scopes.nav.getCurrentLevel())
		if (scopes.nav.getCurrentLevel().mobile_level == 1) {
			scopes.nav.gotoSubForm(2);
		}
	}
}
