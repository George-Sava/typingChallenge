import { Component} from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-game-box',
  templateUrl: './game-box.component.html',
  styleUrls: ['./game-box.component.css']
})
export class GameBoxComponent {

  randomText = lorem.sentence();
  enteredText = '';

  onInput(event : Event)
  {
    this.enteredText = (event.target as HTMLInputElement).value;
  }

  getclassStyle(randomLetter:string, enteredLetter:string)
  {
    if(!enteredLetter)
    {
      return 'pending';
    }

    return randomLetter === enteredLetter ? 'correct' : 'incorrect';
  }

}
