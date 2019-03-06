import { Component } from '@angular/core';
import {  HostListener } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
    title = 'algorland';

    // shows an element when a window is scrolled down & hides the element when the window is scrolled up
    @HostListener('document:scroll', [])
    onWindowScroll() {
        const element = document.getElementById('go-top');
        if (window.pageYOffset >= 250) {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    }

    // scrolls a window to the top
    scrollToTop() {
        const interval = setInterval(scrollUp, 5);
        function scrollUp() {
            if (window.pageYOffset <= 0) {
                clearInterval(interval);
            } else {
                window.scroll(0, pageYOffset - 20);
            }
        }
    }
}
