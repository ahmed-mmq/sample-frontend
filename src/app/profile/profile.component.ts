import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  numberOfPosts;
  numberOfAds;
  constructor() { }

  ngOnInit() {
    this.numberOfAds = Array.from(Array(8)).map(i => new Object({id: i, height: Math.floor((Math.random() * 150) + 40)}) );
    this.numberOfPosts = Array.from(Array(10)).map(i => new Object({id: i, height: Math.floor((Math.random() * 300) + 100)}));
    this.scrollActionChecker();
  }
  
  scrollActionChecker(){
    const that = this;
    window.onscroll = function(ev) {      
      if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
        that.addMorePosts();
      }
    }
  }

  addMorePosts(){
    /** 
     * timeout to simulate API request
     * on End of the page
     **/ 
    setTimeout(() => {
      this.numberOfPosts = this.numberOfPosts.concat(Array.from(Array(5)).map(i => new Object({id: i, height: Math.floor((Math.random() * 300) + 100)})))
    }, 1000);
  }

}
