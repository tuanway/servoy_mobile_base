/**
 * @public
 * @properties={typeid:24,uuid:"A8C7EA54-A6EA-4314-A38F-4CC087B6A05F"}
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
 * @properties={typeid:24,uuid:"90BC356F-39D4-4C9D-869F-206F67B36BD7"}
 * @AllowToRunInFind
 */
function loadSubMenu(id) {
	foundset.find();
	foundset.menu_parent = id;
	foundset.search();
	foundset.sort('menu_order asc');
}
