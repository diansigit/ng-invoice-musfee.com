import { Event, NavigationStart, NavigationEnd, NavigationError, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';

  fullPageUrl = ['/account/login', 'account/checkin'];
  fullWidthUrl = [];
  isDefaultLayout = false;
  isFullPageLayout = false;
  isFullWidthLayout = false;

  constructor(
    private router: Router
  ) {
  }

  ngOnInit() {
    this.router.events.subscribe( (event: Event) => {

      if (event instanceof NavigationStart) {
      }

      if (event instanceof NavigationEnd) {
        this.initSetupPageLayoutCondition();
      }

      if (event instanceof NavigationError) {
        // Hide loading indicator
        // Present error to user
        console.log(event.error);
      }
    });

    this.initSetupPageLayoutCondition();
  }

  initSetupPageLayoutCondition() {
    // console.log(this.router.url);

    this.isFullPageLayout = this.fullPageUrl.findIndex(url  => url === this.router.url) > -1 ? true : false;
    this.isFullWidthLayout = this.fullWidthUrl.findIndex(url => url === this.router.url) > -1 ? true : false;

    setTimeout(() => {
      if (this.isFullPageLayout) {
        this.isDefaultLayout = false;
        this.isFullWidthLayout = false;
      } else if (this.isFullWidthLayout) {
        this.isDefaultLayout = false;
        this.isFullPageLayout = false;
      } else {
        this.isDefaultLayout = true;
        this.isFullPageLayout = false;
        this.isFullWidthLayout = false;
      }
    });
  }
}
