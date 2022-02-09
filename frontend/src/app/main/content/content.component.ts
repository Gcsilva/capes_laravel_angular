import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit, AfterViewInit {

  @Input('pageInfo') pageInfo: any;

  constructor(private titleService:Title) {
  }

  ngOnInit() {
    this.titleService.setTitle(this.pageInfo.name);
  }
  
  ngAfterViewInit() {
  }

}
function ViewContent(arg0: string) {
  throw new Error('Function not implemented.');
}