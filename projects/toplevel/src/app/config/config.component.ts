import { Component, OnInit } from '@angular/core';
import { DuiApplication } from '../dui-interface/dui-application';
import { LookupService } from '../dui-interface/lookup.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {

  constructor(private lookupService: LookupService) { }

  config: DuiApplication[] = [];

  async ngOnInit() {
    this.config = await this.lookupService.lookup();
  }
}
