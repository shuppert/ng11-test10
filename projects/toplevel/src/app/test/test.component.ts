import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, ComponentFactoryResolver, Injector, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService } from 'primeng/dynamicdialog';
import { LookupService } from '../dui-interface/lookup.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  @ViewChild('vc', { read: ViewContainerRef, static: true }) viewContainer!: ViewContainerRef;

  constructor(
    private router: Router,
    private dialogService: DialogService,
    private lookupService: LookupService,
    private injector: Injector,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.lookupService.lookup().then((duiApplications) => {
      const module = duiApplications.find(x => x.displayName === 'Component C');
      if (module) {
        loadRemoteModule(module).then(m => {
           this.router.navigate([module.routePath]);
        });
      } else {
        console.log(`Can't find module!`);
      }
    });    
  }

  onClickModal(): void {
    this.lookupService.lookup().then((duiApplications) => {
      const dModule = duiApplications.find(x => x.component === 'DComponent');
      if (dModule) {
        loadRemoteModule(dModule).then(m => {
           const component = m[dModule.component];
           this.dialogService.open(component, {});
        });
      } else {
        console.log(`Can't find dModule!`);
      }
    });    
  }

  onClickLazyInstatiateComponent(): void {
    this.lookupService.lookup().then((duiApplications) => {
      const dModule = duiApplications.find(x => x.component === 'BComponent');
      if (dModule) {
        loadRemoteModule(dModule).then(m => {
          const component = m[dModule.component];
          const factory = this.componentFactoryResolver.resolveComponentFactory(component);
          this.viewContainer.createComponent(factory, 0, this.injector);
        });
      } else {
        console.log(`Can't find dModule!`);
      }
    }); 
  }
}
