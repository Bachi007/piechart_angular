import { Component,Input } from '@angular/core';
import { schemeCategory10 } from 'd3-scale-chromatic';
import { Color,ScaleType } from '@swimlane/ngx-charts';
@Component({
  selector: 'app-charting',
  templateUrl: './charting.component.html',
  styleUrls: ['./charting.component.css']
})
export class ChartingComponent {
    spendingData=[
      
        // Month 1
        { "spendingType": "Food", "spendingAmount": 500, "spendingDate": "2024-02-01" },
        { "spendingType": "Entertainment", "spendingAmount": 150, "spendingDate": "2024-02-05" },
        { "spendingType": "Medical", "spendingAmount": 50, "spendingDate": "2024-02-10" },
        { "spendingType": "Emergency Fund", "spendingAmount": 100, "spendingDate": "2024-02-15" },
        { "spendingType": "Savings", "spendingAmount": 300, "spendingDate": "2024-02-20" },
      
        // Month 2
        { "spendingType": "Food", "spendingAmount": 180, "spendingDate": "2024-03-03" },
        { "spendingType": "Entertainment", "spendingAmount": 120, "spendingDate": "2024-03-08" },
        { "spendingType": "Medical", "spendingAmount": 40, "spendingDate": "2024-03-13" },
        { "spendingType": "Emergency Fund", "spendingAmount": 90, "spendingDate": "2024-03-18" },
        { "spendingType": "Savings", "spendingAmount": 250, "spendingDate": "2024-03-23" },
      
        // Month 3
        { "spendingType": "Food", "spendingAmount": 190, "spendingDate": "2024-04-02" },
        { "spendingType": "Entertainment", "spendingAmount": 130, "spendingDate": "2024-04-07" },
        { "spendingType": "Medical", "spendingAmount": 45, "spendingDate": "2024-04-12" },
        { "spendingType": "Emergency Fund", "spendingAmount": 95, "spendingDate": "2024-04-17" },
        { "spendingType": "Savings", "spendingAmount": 260, "spendingDate": "2024-04-22" },
      
        // Month 4
        { "spendingType": "Food", "spendingAmount": 210, "spendingDate": "2024-05-05" },
        { "spendingType": "Entertainment", "spendingAmount": 140, "spendingDate": "2024-05-10" },
        { "spendingType": "Medical", "spendingAmount": 55, "spendingDate": "2024-05-15" },
        { "spendingType": "Emergency Fund", "spendingAmount": 105, "spendingDate": "2024-05-20" },
        { "spendingType": "Savings", "spendingAmount": 280, "spendingDate": "2024-05-25" }
      
    ];
    single: any[] = []; // ngx-charts require data in a specific format

    view: [number, number] = [700, 400]; // Adjust dimensions as needed
  
    // Customize colors as needed
    colorScheme:Color = {
      domain: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#9C27B0'],
      name: 'Custom Scheme', // Provide a name
      selectable: true,      // Specify whether colors are selectable
      group: ScaleType.Ordinal, 
     };
  
    constructor() { }
  
    ngOnInit(): void {
      const filteredData = this.filterDataByMonth('2024-05'); // Change the month as needed
      const totalSpendingByType = this.calculateTotalSpending(filteredData);
  
      this.single = Object.keys(totalSpendingByType).map(spendingType => ({
        name: spendingType,
        value: totalSpendingByType[spendingType]
      }));
    }
  
    filterDataByMonth(month: string) {
      return this.spendingData.filter(item => item.spendingDate.startsWith(month));
    }
  
    calculateTotalSpending(data: any[]) {
      const totalSpendingByType: { [key: string]: number } = {};
  
      data.forEach(item => {
        if (totalSpendingByType[item.spendingType]) {
          totalSpendingByType[item.spendingType] += item.spendingAmount;
        } else {
          totalSpendingByType[item.spendingType] = item.spendingAmount;
        }
      });
  
      return totalSpendingByType;
    }
  }