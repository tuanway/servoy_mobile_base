/**
 * @public
 * @properties={typeid:24,uuid:"D0C2B413-8980-4F5E-BBC4-B9245F26154A"}
 * @AllowToRunInFind
 */
function loadMainMenu() {
	foundset.find();
	foundset.menu_parent = '^';
	foundset.search();
	foundset.sort('menu_order asc');	
}

/**
 * @public
 * @param {String} [id]
 * @properties={typeid:24,uuid:"0497C524-96E3-4B42-8952-6CD187397686"}
 * @AllowToRunInFind
 */
function loadSubMenu(id) {
	//get title
	foundset.find();
	foundset.menu_id = id;
	foundset.search();
	if (foundset.getSelectedRecord()) {
		scopes.nav.header_title = foundset.getSelectedRecord().menu_title;
	}

	foundset.find();
	foundset.menu_parent = id;
	foundset.search();
	foundset.sort('menu_order asc');
}
