import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isQuizStarted :boolean =false;
  startQuiz(){
    this.isQuizStarted = true;
  }
  minutes=1;
  seconds=59;
  time:string = this.minutes + " : " + this.seconds;
  timer = setInterval(() => {
    if(this.isQuizStarted)
    {
      this.seconds--;
      if(this.seconds==-1 && this.minutes>0)
      {
        this.minutes--;
        this.seconds=59;
      }
      if(this.seconds==0 && this.minutes==0)
      {
        clearInterval(this.timer);
      }
      if(this.minutes<10 && this.seconds<10)
      {
        this.time = "0" + this.minutes + " : " + "0" +this.seconds;
      }
      else if(this.seconds< 10 && this.minutes>9)
      {
        this.time = this.minutes + " : " + "0" +this.seconds;

      }
      else{
        this.time = "0" + this.minutes + " : " + this.seconds;

      }
    }
    
  },1000)
}
