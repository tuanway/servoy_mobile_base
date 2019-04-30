/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"94FA0B2C-AD94-41E3-BB1B-5B57732E7E5D"}
 */
function selectMenuItem(event) {
	var item = new scopes.svyNavigation.NavigationItem('homeMobile_sub');
	item.setText(menu_title);
	scopes.nav.header_title = menu_title;
	scopes.svyNavigation.open(item);
	forms.homeContainer.loadSubMenu(foundset.getSelectedRecord().menu_id);
}
