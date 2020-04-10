/**
 * Utilize specific naming convention for forms
 * @properties={typeid:35,uuid:"5A9F60C9-73FD-44C1-86C2-36A4F87994A8",variableType:-4}
 */
var NC = {
	Small: '_Sm',
	Large: '_Lg',
	Container: '_Ctn'
}

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

	//initialize framework using specific homeNav form.
	scopes.mobileBase.init('hmNav', NC);
}

/**
 * @properties={typeid:24,uuid:"D868C488-2BD8-401E-99D8-C4CC46063B21"}
 */
function createMenuData() {
	var f = datasources.mem.menu.getFoundSet();
	f.deleteAllRecords();

	//Add Main Menu
	//first parameter is an ID to specific container.  If you do not create a container, you can still pass
	//the name of the first portion of the form name as the containers are auto generated.

	scopes.mobileBase.addMenuItem('custList', 'Customers', 'fa-user', 'nav-skyblue', 1);
	scopes.mobileBase.addMenuItem('emp', 'Employees', 'fa-shipping-fast', 'nav-green', 3);
	scopes.mobileBase.addMenuItem('prodList', 'Products', 'fa-box-open', 'nav-gray', 3);
	scopes.mobileBase.addMenuItem('ordList', 'Orders', 'fa-boxes', 'nav-green', 3);
	scopes.mobileBase.addMenuItem('labels', 'Labels', 'fa-tags', 'nav-neon', 3);
	scopes.mobileBase.addMenuItem('picking', 'Picking', 'fa-dolly-flatbed', 'nav-orange', 3);
	scopes.mobileBase.addMenuItem('rma', 'RMA', 'fa-heart-broken', 'nav-neon', 3);
	scopes.mobileBase.addMenuItem('move', 'Move', 'fa-dolly', 'nav-skyblue', 3);
	scopes.mobileBase.addMenuItem('settings', 'Settings', 'fa-cog', 'nav-gray', 3);

	//Add Sub Menu for customers
	//	scopes.mobileBase.addMenuItem('custContainer', 'Customers', 'fa-circle', 'nav-skyblue', 1, 'customers');
	//	scopes.mobileBase.addMenuItem('custContainer', 'Orders', 'fa-circle', 'nav-yellow', 2, 'customers');

	databaseManager.saveData(f);
}
