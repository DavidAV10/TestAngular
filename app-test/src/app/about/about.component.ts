import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Post } from '../Post';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  publicaciones: Post[];
  constructor(private dataService: DataService) {
    this.dataService.getData().subscribe(dataService => {
      console.log(dataService);
      this.publicaciones = dataService;
    });
  }
  ngOnInit() {
  }

}
