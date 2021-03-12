import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { DComponent } from '../d/d.component';

@Component({
  selector: 'app-dloader',
  templateUrl: './dloader.component.html',
  styleUrls: ['./dloader.component.scss']
})
export class DloaderComponent implements OnInit {
  @ViewChild('dComponentTemplate', { static: false }) dComponent!: TemplateRef<DComponent>;

  constructor(
    private dialogService: DialogService
  ) { }

  ngOnInit(): void {
    this.dialogService.open(DComponent, {});
  }

}
