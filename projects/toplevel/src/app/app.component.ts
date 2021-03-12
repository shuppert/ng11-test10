import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { DuiApplication, EntryType } from './dui-interface/dui-application';
import { LookupService } from './dui-interface/lookup.service';
import { appRoutes } from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  duiApplications: DuiApplication[] = [];
  title = 'toplevel';  

  constructor(
    private router: Router,
    private lookupService: LookupService
  ) { }

  async ngOnInit(): Promise<void> {
    this.duiApplications = await this.lookupService.lookup();
    const routes = this.buildRoutes(this.duiApplications);
    this.router.resetConfig(routes);
  }

  private buildRoutes(applications: DuiApplication[]): Routes {
    this.duiApplications = applications.filter(x => x.entryType === EntryType.Module);
    const lazyRoutes: Routes = this.duiApplications.map(a => ({
      path: a.routePath,
      loadChildren: () => loadRemoteModule(a).then(m => m[a.ngModuleName])
    }));

    return [...appRoutes, ...lazyRoutes];
  }
}
