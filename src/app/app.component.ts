import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  selectedCity;
  cities = [
    'BANGALORE',
    'CHENNAI',
    'DELHI',
    'HYDERABAD',
    'MUMBAI'
  ];
  data: any = [];
  searchText;
  loading: boolean;

  constructor(private dataService: DataService){
  }
  ngOnInit(){
  
  }

  getdata(city){
    console.log(city);
    this.loading = true
    
    if (city) {
      if (this.dataService.cachedData[city]) {
        this.data = this.dataService.cachedData[city];
        this.loading = false;
      } else {
        this.dataService.getBanks(city).subscribe(
          (res) => {
            console.log(res);
            this.data = res;
            this.dataService.cachedData[city] = res;
            this.loading = false;
          }
        )
      }
      
    } else {
      this.data = [];
      this.loading = false;
    }
  }
  setFav(id){
    const favs = localStorage.getItem('favs') ? JSON.parse(localStorage.getItem('favs')) : [];
    favs.push({id});
    localStorage.setItem('favs', JSON.stringify(favs));
  }
  RemoveFav(id){
    let favs = localStorage.getItem('favs') ? JSON.parse(localStorage.getItem('favs')) : [];
    favs = favs.filter(f => {
      return f.id!= id;
    });
    localStorage.setItem('favs', JSON.stringify(favs));
  }

  checkFav(id){
    const favs = localStorage.getItem('favs') ? JSON.parse(localStorage.getItem('favs')) : [];
    return favs.find(f => {
      return f.id == id;
    })
  }
}


