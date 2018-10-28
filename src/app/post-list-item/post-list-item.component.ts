import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() hateIts: number;
  @Input() created_at = new Date();

  constructor() { }

  ngOnInit() {
  }

  isRed() {
      return (this.loveIts < this.hateIts);
  }

  isGreen() {
    return (this.loveIts > this.hateIts);
  }

  like() {
    this.loveIts++;
  }

  dislike() {
    this.hateIts++;
  }

}
