/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"F235C278-C319-4346-84AF-68911CC0BDDA"}
 */
var title = 'Main Menu'
/**
 * @param formName
 * @override
 *
 * @properties={typeid:24,uuid:"2C4D43A8-B5B1-4A7C-9842-A805C5BF223A"}
 */
function openForm(formName) {
	elements.nav_content.containedForm = formName;
}

/**
 * @param {JSEvent} event
 * @override
 *
 * @properties={typeid:24,uuid:"D92B8ECA-FD6E-4EBF-A120-248DDB7DDEA3"}
 */
function onLoad(event) {
	scopes.mobileBase.gotoForm(event, 'home', 'Main Menu')
	return _super.onLoad(event)
}

/**
 * @param {JSEvent} event
 * @override
 *
 * @properties={typeid:24,uuid:"1EE89F60-9C76-454D-9081-3D8F137F562E"}
 */
function navListener(event) {
	title = event.getNavigationItem().text;
	if (title == 'Main Menu') {
		elements.back.visible = false;
	} else {
		elements.back.visible = true;
	}
}
