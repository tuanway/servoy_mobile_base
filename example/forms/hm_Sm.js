/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"F008DF29-F4BE-4D36-83F3-848519AD16FD"}
 */
function selectMenuItem(event) {
	scopes.mobileBase.gotoForm(event, menu_id, menu_title);
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @public
 *
 * @properties={typeid:24,uuid:"49E0715B-8D90-42DE-AFCC-E924FFCCBA08"}
 */
function onShow(firstShow, event) {
	loadMainMenu();
}
