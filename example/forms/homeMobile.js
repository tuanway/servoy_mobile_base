/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"F008DF29-F4BE-4D36-83F3-848519AD16FD"}
 */
function selectMenuItem(event) {
	loadSubMenu(foundset.getSelectedRecord().menu_id);
	scopes.nav.toggleHeaderButtons(['home', 'back', 'title']);
	scopes.nav.gotoSubForm(2);
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
	scopes.nav.toggleHeaderButtons(['title','home']);
}
