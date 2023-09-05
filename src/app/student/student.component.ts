import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

  public student = [
  {"Name" :"Rayan" ,"Email":"Rayan@gmail.com","Marks":55},
  {"Name" :"Ghadeer" ,"Email":"Ghadeer@gmail.com","Marks":30},
  {"Name" :"Arwa" ,"Email":"Arwa@gmail.com","Marks":80}
  ]
}
