import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'HelloWorldApp'; 
  imgUrl = "assets/BridgeLabzLogo.jpg";
  Url = "https://www.bridgelabz.com/";
 

  ngOnInit(): void {  
    this.title = "Hello from BridgeLabz."; 
  }

  onClick($event:MouseEvent){
    console.log("Save buttrameter '$event' implicitly has an 'any' type.ts(7006)on is clicked!",$event)
    window.open(this.Url,"_blank")
  }
}

