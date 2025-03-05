import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'HelloWorldApp'; 
  imgUrl = "assets/BridgeLabzLogo.jpg";
  Url = "https://www.bridgelabz.com/";
  userName: string = "";
 

  ngOnInit(): void {  
    this.title = "Hello from BridgeLabz."; 
  }

  onClick($event:MouseEvent){
    console.log("Save buttrameter '$event' implicitly has an 'any' type.ts(7006)on is clicked!",$event)
    window.open(this.Url,"_blank")
  }
}

