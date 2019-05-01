/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"94FA0B2C-AD94-41E3-BB1B-5B57732E7E5D"}
 */
function selectMenuItem(event) {
	loadSubMenu(foundset.getSelectedRecord().menu_id);
	scopes.nav.toggleHeaderButtons(['home', 'back', 'title']);
	scopes.nav.gotoSubForm(2);
	scopes.nav.header_title = menu_title;
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"C35F43EF-211B-45A6-8F13-E6DB967D89A3"}
 */
function onShow(firstShow, event) {
	loadMainMenu();
	scopes.nav.toggleHeaderButtons(['home']);
}
