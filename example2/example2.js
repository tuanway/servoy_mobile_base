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
 * @type {String}
 *
 * @properties={typeid:35,uuid:"62406106-6D8F-45EB-ADEB-90461D1C53B0"}
 */
var currentFunctionTitle = '';

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

	//initialize framework using specific homeNav form.
	scopes.mobileBase.init('hmNav', NC);

}
