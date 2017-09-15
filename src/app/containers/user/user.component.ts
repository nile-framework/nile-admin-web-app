import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';

import { UserProfile, Authorization } from '../../core/services';
import { EchoesState } from '../../core/store';
import { getUserPlaylists$, getUserViewPlaylist$, getIsUserSignedIn$ } from '../../core/store/user-profile/user-profile.selectors';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
