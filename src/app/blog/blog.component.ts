import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  pageTitle: string | any;
  user: { id: number; name: string } | any;

  constructor(
    private title: Title,
    private meta: Meta,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name'],
    };
    console.log(this.user);
    this.title.setTitle(this.pageTitle);
    this.meta.addTag({ keyWords: 'angular 8, ssr,single page application' });
    this.meta.addTag({
      description: 'Create single page application in Angular.',
    });
  }
}
