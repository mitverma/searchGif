import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  apiLinkKey = 'http://api.giphy.com/v1/gifs/search?api_key=Ej5MSXtrAw0brhA6JmV97yJASSJt2yAo&q=';
  searchText = '';
  emailId = '';
  showError = false;
  searchList: any;
  constructor(public http: HttpClient){

  }

  ngOnInit() {
    this.getSearchList('developer');
  }

  getSearchList(searchText){
    let apiLinkToCalled = this.apiLinkKey + searchText;
    this.http.get(apiLinkToCalled).subscribe((data: any)=>{
      if(data && data.data.length){
          this.searchList = data.data;
      }
    }, err=>{
      console.error(err);
    })
  }

  sendEmail(emailIdValue){
    if(emailIdValue && emailIdValue.valid){
      this.showError = false;
    }else {
      this.showError = true;
    }
  }
}
