/**
 * Callback method for when solution is opened.
 * When deeplinking into solutions, the argument part of the deeplink url will be passed in as the first argument
 * All query parameters + the argument of the deeplink url will be passed in as the second argument
 * For more information on deeplinking, see the chapters on the different Clients in the Deployment Guide.
 *
 * @param {String} arg startup argument part of the deeplink url with which the Client was started
 * @param {Object<Array<String>>} queryParams all query parameters of the deeplink url with which the Client was started
 *
 * @properties={typeid:24,uuid:"E86963EC-7A7E-40F3-81D2-FDAD156F2721"}
 */
function onSolutionOpen(arg, queryParams) {
	//initialize mobile base
	scopes.mobileBase.onSolutionOpen(arg, queryParams);

	//setup main/sub menu
	createMenuData();

	scopes.mobileBase.init('nav')
}

/**
 * @properties={typeid:24,uuid:"D868C488-2BD8-401E-99D8-C4CC46063B21"}
 */
function createMenuData() {
	var f = datasources.mem.menu.getFoundSet();
	f.deleteAllRecords();

	//Add Main Menu
	scopes.mobileBase.addMenuItem('customers', 'Customers', 'fa-truck-loading', 'nav-skyblue', 1);
	scopes.mobileBase.addMenuItem('shipping', 'Shipping', 'fa-shipping-fast', 'mobileBase-green', 3);
	scopes.mobileBase.addMenuItem('kitting', 'Kitting', 'fa-box-open', 'mobileBase-gray', 3);
	scopes.mobileBase.addMenuItem('inventory', 'Inventory', 'fa-boxes', 'mobileBase-green', 3);
	scopes.mobileBase.addMenuItem('labels', 'Labels', 'fa-tags', 'mobileBase-neon', 3);
	scopes.mobileBase.addMenuItem('picking', 'Picking', 'fa-dolly-flatbed', 'mobileBase-orange', 3);
	scopes.mobileBase.addMenuItem('rma', 'RMA', 'fa-heart-broken', 'mobileBase-neon', 3);
	scopes.mobileBase.addMenuItem('move', 'Move', 'fa-dolly', 'mobileBase-skyblue', 3);
	scopes.mobileBase.addMenuItem('settings', 'Settings', 'fa-cog', 'nav-gray', 3);

	databaseManager.saveData(f);
}
