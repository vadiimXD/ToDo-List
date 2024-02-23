import { Component } from '@angular/core';
import { db, item } from "../app.component"

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent {
  ToDoList = db
  createToDoItem(item: HTMLInputElement) {
    db.push({ name: item.value, isCompleted: false })
    item.value = ""
  }

  completeItem(name: string) {
    const completedItem: item[] = db.filter(x => x.name == name);
    completedItem[0].isCompleted = true
  }

  showEdit(ev: Event, itemObj: item) {
    const popup: any = document.getElementsByTagName("app-popup")[0];
    const input = popup.querySelector(".popup-input");
    input.value = itemObj.name
    input.dataset.value = itemObj.name
    const isShowed = popup.style.display == "none" ? "flex" : "none"
    popup.style.display = isShowed
  }

  deleteItem(itemObj: item) {
    const startIndex: number = db.indexOf(itemObj)
    db.splice(startIndex, 1)
  }
}


