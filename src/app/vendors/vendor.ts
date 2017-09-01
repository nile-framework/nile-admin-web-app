import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

import { VendorService } from './vendor.service';

export class Vendor {
    loading: boolean;
    someFormGroup: FormGroup;

    constructor(
        public fb: FormBuilder,
        public afDB: AngularFireDatabase,
        public _vendorService : VendorService
    ) {
        

    }
}
