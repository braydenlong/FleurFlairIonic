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
		{
			title: 'View Articles',
			url: '',
			icon: 'add-circle'
		},
		{
			title: 'Create Order',
			url: '/CustomerAdmin/createOrder',
			icon: 'list-circle'
		},
    {
			title: 'My Orders',
			url: '/CustomerAdmin/viewOrders',
			icon: 'list-circle'
		}

	];

  //public labels = ['View Articles', 'Create Bouquet', 'My Orders'];
  
  constructor(public sessionService: SessionService) {
	}


	ngOnInit() {
	}

}
