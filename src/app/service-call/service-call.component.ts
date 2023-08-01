import { Component } from '@angular/core';
import { ApiServiceService } from 'api.service.service';

@Component({
  selector: 'app-service-call',
  templateUrl: './service-call.component.html',
  styleUrls: ['./service-call.component.css'],
})
export class ServiceCallComponent {
  constructor(private apiService: ApiServiceService) {}

  ngOnInit() {
    this.fetchData();
  }

  private fetchData() {
    this.apiService.getData().subscribe(
      (data) => {
        // API response data here
        console.log(data);
      },
      (error) => {
        // errors if any
        console.error('Error fetching data:', error);
      }
    );
  }
}
