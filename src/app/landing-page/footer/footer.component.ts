import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  links = [{
    title: "For designers",
    list: ["Go Pro!", "Explore design work", "Design blog", "Overtime podcast", "Dribbble meetups", "Playoffs"," Weekly Warm-Up", "Code of conduct"]
  },{
    title: "Hire designers",
    list: ["Post a job opening", "Post a freelance project", "Search for designers"]
  },{
    title: "Company",
    list: ["About", "Careers", "Support", "Media kit", "Dribbble shop", "Testimonials", "API", "Terms of service", "Privacy policy"]
  },{
    title: "Directories",
    list: ["Top designers", "Top design teams", "Design jobs", "Tags", "Places"]
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
