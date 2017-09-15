import { ActionCreatorFactory } from 'ngrx-action-creator-factory';
import { Injectable } from '@angular/core';
import { BasicNileEmployeeProfile } from './user-profile.reducer';


@Injectable()
export class UserProfileActions {
    static UPDATE = '[UserProfile] UPDATE';
    static LOG_OUT = '[UserProfile] LOG_OUT';
    static USER_PROFILE_COMPLETED = '[UserProfile] USER_PROFILE_COMPLETED';
    static UPDATE_USER_PROFILE = '[UserProfile] UPDATE_USER_PROFILE';
    static USER_PROFILE_RECIEVED = '[UserProfile] USER_PROFILE_RECIEVED';


  updateData = (data: any) => ({
    type: UserProfileActions.UPDATE,
    payload: data
  })

  signOut() {
    return {
      type: UserProfileActions.LOG_OUT
    };
  }

  userProfileCompleted() {
    return {
      type: UserProfileActions.USER_PROFILE_COMPLETED
    };
  }

  userProfileRecieved (profile: any) {
    return {
      type: UserProfileActions.USER_PROFILE_RECIEVED,
      payload: profile
    };
  }

  updateUserProfile (profile: BasicNileEmployeeProfile) {
    return {
      type: UserProfileActions.UPDATE_USER_PROFILE,
      payload: profile
    };
  }


}