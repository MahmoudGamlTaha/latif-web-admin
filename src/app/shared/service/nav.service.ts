import { Injectable, HostListener, Inject } from '@angular/core';
import { BehaviorSubject, Observable, Subscriber } from 'rxjs';
import { WINDOW } from "./windows.service";
// Menu
export interface Menu {
	path?: string;
	title?: string;
	icon?: string;
	type?: string;
	badgeType?: string;
	badgeValue?: string;
	active?: boolean;
	bookmark?: boolean;
	children?: Menu[];
}

@Injectable({
	providedIn: 'root'
})

export class NavService {

	public screenWidth: any
	public collapseSidebar: boolean = false

	constructor(@Inject(WINDOW) private window) {
		this.onResize();
		if (this.screenWidth < 991) {
			this.collapseSidebar = true
		}
	}

	// Windows width
	@HostListener("window:resize", ['$event'])
	onResize(event?) {
		this.screenWidth = window.innerWidth;
	}

	MENUITEMS: Menu[] = [
		{
			path: '/dashboard/default', title: 'Dashboard', icon: 'home', type: 'link', badgeType: 'primary', active: false
		},
		{
			title: 'blogs', icon: 'box', type: 'sub', active: false, children: [
				{ path: '/products/blogs/bloglist', title: 'blog list', type: 'link' },
				{ path: '/products/blogs/blogcategory', title: 'blog Category', type: 'link' },
				{ path: '/products/blogs/product-detail', title: 'create Blog', type: 'link' },

				// {
				// 	title: 'Physical', type: 'sub', children: [
				// 		{ path: '/products/physical/category', title: 'Category', type: 'link' },
				// 		{ path: '/products/physical/sub-category', title: 'Sub Category', type: 'link' },
				// 		{ path: '/products/physical/product-list', title: 'Product List', type: 'link' },
				// 		{ path: '/products/physical/add-product', title: 'Add Product', type: 'link' },
				// 	]
				// },
				// {
				// 	title: 'digital', type: 'sub', children: [
				// 		{ path: '/products/digital/digital-category', title: 'Category', type: 'link' },
				// 		{ path: '/products/digital/digital-sub-category', title: 'Sub Category', type: 'link' },
				// 		{ path: '/products/digital/digital-product-list', title: 'Product List', type: 'link' },
				// 		{ path: '/products/digital/digital-add-product', title: 'Add Product', type: 'link' },
				// 	]
				// },
			]
		},
		{
			title: 'category', icon: 'list', type: 'sub', active: false, children: [
				{ path: '/category/category-list', title: 'Category list', type: 'link' },
				// { path: '/category/categorytype/:id/:typeName', title: 'Category type', type: 'link' },
				{ path: '/category/create', title: 'create Category', type: 'link' },

			]
		},
		{
			title: 'ads', icon: 'tag', type: 'sub', active: false, children: [
				{ path: '/ads/adslist', title: 'Ads List', type: 'link' },
				// { path: '/ads/updateads/:id', title: 'update Ads', type: 'link' },
			]
		},
		{
			title: 'subscription', path: '/subscription', icon: 'camera', type: 'link', active: false
		},
		{
			title: 'role', path: '/role', icon: 'user', type: 'link', active: false
		},
		// {
		// 	title: 'Pages', icon: 'clipboard', type: 'sub', active: false, children: [
		// 		{ path: '/pages/list-page', title: 'List Page', type: 'link' },
		// 		{ path: '/pages/create-page', title: 'Create Page', type: 'link' },
		// 	]
		// },
		
		{
			title: 'Reports Ad', icon: 'align-left', type: 'sub', active: false, children: [
				{ path: '/reports/list-menu', title: 'All Reports', type: 'link' },
				{ path: '/reports/reports-reasons', title: 'reports Reasons', type: 'link' },
				{ path: '/reports/create-reasons', title: 'create Reasons', type: 'link' },
				{ path: '/reports/update-reasons/:id/:reason/:reasonAr', title: 'update Reasons', type: 'link' },

			]
		},
		{
			title: 'Users', icon: 'user-plus', type: 'sub', active: false, children: [
				{ path: '/users/list-user', title: 'User List', type: 'link' },
				// { path: '/users/create-user', title: 'Create User', type: 'link' },
			]
		},
		{
			title: 'configuration', icon: 'users', type: 'sub', active: false, children: [
				// { path: '/configuration/list-vendors', title: 'Vendor List', type: 'link' },
				{ path: '/configuration/policy', title: 'policy', type: 'link' },
			]
		},
		// {
		// 	title: 'Localization', icon: 'chrome', type: 'sub', children: [
		// 		{ path: '/localization/translations', title: 'Translations', type: 'link' },
		// 		{ path: '/localization/currency-rates', title: 'Currency Rates', type: 'link' },
		// 		{ path: '/localization/taxes', title: 'Taxes', type: 'link' },
		// 	]
		// },
		
		// {
		// 	title: 'Settings', icon: 'settings', type: 'sub', children: [
		// 		{ path: '/settings/profile', title: 'Profile', type: 'link' },
		// 	]
		// },
		{
			// title: 'activate user', path: '/invoice', icon: 'archive', type: 'link', active: false
		},
		{
			title: 'Login',path: '/auth/login', icon: 'log-in', type: 'link', active: false
		}
	]
	// Array
	items = new BehaviorSubject<Menu[]>(this.MENUITEMS);


}
