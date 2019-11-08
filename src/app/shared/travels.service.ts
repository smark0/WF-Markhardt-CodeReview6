import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";

@Injectable({
  providedIn: 'root'
})
export class TravelsService {

  constructor(private firebase: AngularFireDatabase) { }
  travelList: AngularFireList<any>;

  form = new FormGroup({
    $key: new FormControl(null),
    fullName: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  getEntries() {
    this.travelList = this.firebase.list('travels');
    return this.travelList.snapshotChanges();
  }

  insertEntry(travels) {
    this.travelList.push({
      fullName: travels.fullName,
      location: travels.location,
      email: travels.email
    });
  }
  populateForm(travels) {
    this.form.setValue(travels);
  }
  updateEntry(travels) {
    this.travelList.update(travels.$key, {
      fullName: travels.fullName,
      location: travels.location,
      email: travels.email
    });
  }

  deleteEntry($key: string) {
    this.travelList.remove($key);
  }
}