import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
protected imageurl1="/image/home_page 1.jpg";
protected imageurl2="/image/home_page2.jpg";
protected imageurl3="/image/home_page3.jpg";
currentIndex = 0;
totalSlides = 3;
nextSlide()
{
    this.currentIndex++;
    if (this.currentIndex >= this.totalSlides)
    {
      this.currentIndex = 0;
    }
}
prevSlide()
{
    this.currentIndex--;
    if (this.currentIndex < 0) 
    {
      this.currentIndex = this.totalSlides - 1;
    }
}

}
