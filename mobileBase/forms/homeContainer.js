
/**
 * @param {JSEvent} event
 * @override
 *
 * @properties={typeid:24,uuid:"1B89F657-5185-4E89-A840-86181A9799B1"}
 */
function onLoad(event) {
	loadMainMenu();
}

/**
 * @public 
 * @properties={typeid:24,uuid:"DD8F1A8E-127E-40AF-B447-FEB0443B5DF3"}
 */
function loadMainMenu(){	
	elements.mobile.removeAllTabs();
	elements.mobile.addTab('homeMobile');
	foundset.deleteAllRecords();
	foundset.newRecord();foundset.menu_display = '<i class="fas fa-truck-loading"></i> <br> Receiving';foundset.menu_id = 'customers';foundset.menu_color='nav-orange';foundset.menu_order=1;foundset.menu_title='Sub Menu';	
	foundset.newRecord();foundset.menu_display = '<i class="fas fa-shipping-fast"></i> <br> Shipping';foundset.menu_id = 'itemsss';foundset.menu_color='nav-blue';foundset.menu_order=3;
	foundset.newRecord();foundset.menu_display = '<i class="fas fa-box-open"></i> <br> Kitting';foundset.menu_id = 'itembb';foundset.menu_color='nav-yellow';foundset.menu_order=3;
	foundset.newRecord();foundset.menu_display = '<i class="fas fa-boxes"></i> <br> Inventory';foundset.menu_id = 'itema';foundset.menu_color='nav-teal';foundset.menu_order=3;
	foundset.newRecord();foundset.menu_display = '<i class="fas fa-tags"></i> <br> Labels';foundset.menu_id = 'item';foundset.menu_color='nav-neon';foundset.menu_order=3;
	foundset.newRecord();foundset.menu_display = '<i class="fas fa-heart-broken"></i> <br> RMA';foundset.menu_id = 'item';foundset.menu_color='nav-purple';foundset.menu_order=3;
	foundset.newRecord();foundset.menu_display = '<i class="fas fa-dolly-flatbed"></i> <br> Picking';foundset.menu_id = 'item';foundset.menu_color='nav-green';foundset.menu_order=3;
	foundset.newRecord();foundset.menu_display = '<i class="fas fa-dolly"></i> <br> Move';foundset.menu_id = 'item';foundset.menu_color='nav-skyblue';foundset.menu_order=3;
	foundset.newRecord();foundset.menu_display = '<i class="fas fa-cog"></i> <br> Settings';foundset.menu_id = 'item';foundset.menu_color='nav-gray';foundset.menu_order=3;
	foundset.sort('menu_order asc');
}

/**
 * @public 
 * @param {String} [id]
 * @properties={typeid:24,uuid:"A4F5AFCB-27F7-473F-A5CD-1E9311689595"}
 */
function loadSubMenu(id){
	elements.mobile.removeAllTabs();
	elements.mobile.addTab('homeMobile_sub');
	foundset.deleteAllRecords();
	foundset.newRecord();foundset.menu_display = '<i class="fas fa-circle"></i> Customers';foundset.menu_id = 'customersContainer';foundset.menu_title='Customers';foundset.menu_order=1;
	foundset.newRecord();foundset.menu_display = '<i class="fas fa-circle"></i> Orders';foundset.menu_id = 'ordersContainer';foundset.menu_title='Orders';foundset.menu_order=2;
	foundset.newRecord();foundset.menu_display = '<i class="fas fa-circle"></i> SubItem A';foundset.menu_id = 'item';foundset.menu_order=3;
	foundset.newRecord();foundset.menu_display = '<i class="fas fa-circle"></i> SubItem B';foundset.menu_id = 'item';foundset.menu_order=3;
	foundset.newRecord();foundset.menu_display = '<i class="fas fa-circle"></i> SubItem C';foundset.menu_id = 'item';foundset.menu_order=3;
	foundset.newRecord();foundset.menu_display = '<i class="fas fa-circle"></i> SubItem D';foundset.menu_id = 'item';foundset.menu_order=3;
	foundset.newRecord();foundset.menu_display = '<i class="fas fa-circle"></i> SubItem E';foundset.menu_id = 'item';foundset.menu_order=3;
	foundset.newRecord();foundset.menu_display = '<i class="fas fa-circle"></i> SubItem F';foundset.menu_id = 'item';foundset.menu_order=3;
	foundset.newRecord();foundset.menu_display = '<i class="fas fa-circle"></i> SubItem G';foundset.menu_id = 'item';foundset.menu_order=3;
	foundset.newRecord();foundset.menu_display = '<i class="fas fa-circle"></i> SubItem H';foundset.menu_id = 'item';foundset.menu_order=3;
	foundset.newRecord();foundset.menu_display = '<i class="fas fa-circle"></i> SubItem';foundset.menu_id = 'item';foundset.menu_order=3;
	foundset.newRecord();foundset.menu_display = '<i class="fas fa-circle"></i> SubItem';foundset.menu_id = 'item';foundset.menu_order=3;
	foundset.newRecord();foundset.menu_display = '<i class="fas fa-circle"></i> SubItem';foundset.menu_id = 'item';foundset.menu_order=3;
	foundset.newRecord();foundset.menu_display = '<i class="fas fa-circle"></i> SubItem';foundset.menu_id = 'item';foundset.menu_order=3;
	foundset.newRecord();foundset.menu_display = '<i class="fas fa-circle"></i> SubItem';foundset.menu_id = 'item';foundset.menu_order=3;
	foundset.newRecord();foundset.menu_display = '<i class="fas fa-circle"></i> SubItem';foundset.menu_id = 'item';foundset.menu_order=3;
	foundset.newRecord();foundset.menu_display = '<i class="fas fa-circle"></i> SubItem';foundset.menu_id = 'item';foundset.menu_order=3;
	foundset.newRecord();foundset.menu_display = '<i class="fas fa-circle"></i> SubItem';foundset.menu_id = 'item';foundset.menu_order=3;
	foundset.sort('menu_order asc');
}
