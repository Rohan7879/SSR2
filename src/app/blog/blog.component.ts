import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  pageTitle: string | any;

  constructor(private title: Title, private meta: Meta) {}

  ngOnInit(): void {
    this.pageTitle = 'Blog';
    this.title.setTitle(this.pageTitle);
    this.meta.addTag({ keyWords: 'angular 8, ssr,single page application' });
    this.meta.addTag({
      description: 'Create single page application in Angular.',
    });
  }
}
