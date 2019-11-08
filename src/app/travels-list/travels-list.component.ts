import { Component, OnInit } from '@angular/core';
import { TravelsService } from '../shared/travels.service';

@Component({
  selector: 'app-travels-list',
  templateUrl: './travels-list.component.html',
  styleUrls: ['./travels-list.component.css']
})
export class TravelsListComponent implements OnInit {
  travelArray = [];
  showDeletedMessage: boolean;
  searchText: string = "";

  constructor(private travelsService: TravelsService) { }

  ngOnInit() {
    this.travelsService.getEntries().subscribe(
      (list) => {
        this.travelArray = list.map((item) => {
          return {
            $key: item.key,
            ...item.payload.val()
          }
        })
      });

  }

  onDelete($key) {
    if (confirm("Are you sure you want to delete this record?")) {
      this.travelsService.deleteEntry($key);
      this.showDeletedMessage = true;
      setTimeout(() => this.showDeletedMessage = false, 3000)
    }
  }

  filterCondition(travels) {
    return travels.location.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1;
  }

}