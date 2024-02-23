import { Component } from '@angular/core';
export interface item {
  name: string
  isCompleted: boolean
}

const db: item[] = [{ name: "Learn Angular", isCompleted: false }, { name: "Learn React", isCompleted: false }]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../styles.css']
})
export class AppComponent {
  title = 'ToDo-List';
}

export { db };