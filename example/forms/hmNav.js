/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"ECFC094F-CA50-4BA1-B583-14A65AC07F36"}
 */
var title = '';

/**
 * @param {JSEvent} event
 * @override
 *
 * @properties={typeid:24,uuid:"B9A6DBD7-A8CD-4542-AECE-2BB32C71DEE8"}
 */
function onLoad(event) {
	// go to hm (home container) form
	scopes.mobileBase.gotoForm(event, 'hm', 'Main Menu');
	title = 'Main Menu';
	return _super.onLoad(event)
}

/**
 * TODO generated, please specify type and doc for the params
 * @param t
 *
 * @properties={typeid:24,uuid:"E034BFB7-DFF5-4B0F-8F18-97CCAA7B2266"}
 */
function setTitle(t) {
	title = t;
}

/**
 * @param {JSEvent} event
 * @override
 *
 * @properties={typeid:24,uuid:"8C7ED39A-23D0-451B-888D-2EFCCDA9B590"}
 */
function navListener(event) {
	//set the title when we open a new function or form
	title = scopes.svyNavigation.getCurrentItem().getText();
	return _super.navListener(event)
}
