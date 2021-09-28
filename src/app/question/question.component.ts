import { Component, OnInit } from '@angular/core';
import data from "../../data.json";

@Component({
  selector: 'question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  questions = data;
  i=0;
  question: any = this.questions[this.i];
  actualAnswer:string=this.question.answer;
  selectedAnswer:string = "";
  score:number=0;
  isSubmitted:boolean=false;
  isend:boolean =false;
  totalQuestions: number = this.questions.length;
  constructor() { }

  ngOnInit(): void {
    
  }

  changeQuestion(){
    if(this.selectedAnswer == this.actualAnswer){
      console.log(this.score);
      this.score++;}
    console.log("answer: ",this.selectedAnswer);
    this.i++;
    this.isend = (this.i == this.questions.length);
    this.question = this.questions[this.i];
    this.actualAnswer=this.question.answer;
  }
  previousQuestion(){

    if(this.selectedAnswer == this.actualAnswer)
    {
      console.log(this.score);
      this.score++;
    }
    console.log("answer: ",this.selectedAnswer);
    this.i--;
    this.question = this.questions[this.i];
    this.actualAnswer=this.question.answer;
  }
  onChangingOption(op:any){
    this.selectedAnswer = op.value;
    console.log("Onchange: ",this.selectedAnswer);
  }
  displayScore(){
    this.isSubmitted = true;
    console.log(this.score);
  }


}