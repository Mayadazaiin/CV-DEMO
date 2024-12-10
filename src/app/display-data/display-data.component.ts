import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css'],
})
export class DisplayDataComponent implements OnInit {
  data: any[] = [];
  filteredData: any[] = [];
  availableSources: string[] = [];
  searchName: string = '';
  selectedSource: string = '';
  loading: boolean = true;
  patch: any;

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.loading = true;
    this.dataService.fetchData(this.selectedSource, this.searchName).subscribe({
      next: (response) => {
        console.log('Filtered API Response:', response);
        this.data = response.patches || [];
        this.filteredData = [...this.data];
        this.availableSources = [
          ...new Set(this.data.map((item) => item.source)),
        ];
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching data:', error);
        this.loading = false;
      },
    });
  }

  applyFilter(): void {
    this.fetchData();
  }

  onEdit(id: string): void {
    this.router.navigate(['/edit', id]);
  }

  deletePatch(id: string): void {
    this.dataService.deletePatch(id).subscribe(
      (res: any) => {
        console.log(res);
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
  navigateToAddBatch(): void {
    this.router
      .navigate(['/add-batch'])
      .then(() => {
        console.log('Navigation to add-batch successful');
      })
      .catch((err) => {
        console.error('Navigation to add-batch failed', err);
      });
  }
}
