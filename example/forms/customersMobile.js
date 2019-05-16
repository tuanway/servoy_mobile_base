

/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"7D5E0344-C2F4-489D-A897-E99906AC47B3"}
 */
function openDetailForm(event) {
	scopes.nav.gotoSubForm(2);
}

/**
 * @param {Boolean} firstShow
 * @param {JSEvent} event
 * @override
 *
 * @properties={typeid:24,uuid:"2E1E1AF8-80FC-44B4-88C9-589D1D5BB83E"}
 */
function onShow(firstShow, event) {	
	return _super.onShow(firstShow, event);
}
