import { Component } from '@angular/core';
import { db } from '../app.component';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent {

  hideEdit() {
    const popup: any = document.getElementsByTagName("app-popup")[0];
    popup.style.display = "none"
  }
  updateItem(item: string) {
    const input: any = document.querySelector(".popup-input");
    const completedItem = db.filter(x => x.name == input.dataset.value);
    completedItem[0].name = item
    this.hideEdit()
  }
}
