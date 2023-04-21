import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  username: String
  text: String
  constructor(private element: ElementRef, private renderer: Renderer2) {
  }
  nameChange() {
    if (this.username === '') {
      this.text = 'Hello I am Aaryak!'
    }
    else {
      this.text = `Hello I am ${this.username}!`
    }
  }
}

