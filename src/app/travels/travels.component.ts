import { Component, OnInit } from '@angular/core';
import { TravelsService } from '../shared/travels.service';

@Component({
  selector: 'app-travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.css']
})
export class TravelsComponent implements OnInit {

  constructor(private travelsService: TravelsService) { }
  submitted: boolean;
  formControls = this.travelsService.form.controls;
  showSuccessMessage: boolean;

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    if (this.travelsService.form.valid) {
      if (this.travelsService.form.get('$key').value == null) {
        this.travelsService.insertEntry(this.travelsService.form.value);
        this.showSuccessMessage = true;
        setTimeout(() => this.showSuccessMessage = false, 3000);
        this.submitted = false;
        this.travelsService.form.reset();
      } else {
        this.travelsService.updateEntry(this.travelsService.form.value);
        this.showSuccessMessage = true;
        setTimeout(() => this.showSuccessMessage = false, 3000);
        this.submitted = false;
        this.travelsService.form.reset();
      }
    }
  }
}

