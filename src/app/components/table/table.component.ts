import { Component, OnInit, ViewChild } from "@angular/core";
import { ApiService } from './../../services/api.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

// export interface Post {
//   userId: number;
//   id: number;
//   title: string;
//   body: string;
// }
@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"]
})
export class TableComponent implements OnInit {

  tableData;
  displayedColumns: string[] = ['userId', 'id', 'title', 'body'];

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.showPosts();
  }

  showPosts() {
    this.apiService.getPosts().subscribe(
      (res) => {
        this.tableData = res;
        this.tableData = new MatTableDataSource(this.tableData);
        this.tableData.sort = this.sort;
      }
    )
  }

  doFilter(value) {
    console.log(value)
    this.tableData.filter = value.trim().toLocaleLowerCase();
  }

}
