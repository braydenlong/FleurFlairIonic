import { Component } from '@angular/core';

import { SessionService } from './services/session.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPagesLogin = [
    { title: 'Home', url: '/index', icon: 'home' },
		{ title: 'Login', url: '/login', icon: 'lock-closed' }
    // { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    // { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    // { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    // { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    // { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    // { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];

  public appPagesLogout = [
		{ title: 'Home', url: '/index', icon: 'home' },
		{ title: 'Login', url: '/login', icon: 'lock-closed' }
	];

  public appPagesCustomerAdmin = [
		{ title: 'Home', url: '/login', icon: 'home' },
		{
			title: 'View Articles',
			url: '/login',
			icon: 'list-circle'
		},
		{
			title: 'Create Order',
			url: '/create-order',
			icon: 'add-circle'
		},
    {
			title: 'My Orders',
			url: '/view-orders',
			icon: 'list-circle'
		}

	];
  
  constructor(public sessionService: SessionService) {
	}


	ngOnInit() {
	}

}
