import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Key } from 'protractor';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  @Input() fileDropContainer: string;
  @Input() fileUploadId: string = '';
  @Input() disabled: boolean = false;
  @Input() multiple: boolean = false;
  @Input() resetFileData: boolean = false;

  @Output() InputChanged = new EventEmitter<any>();

  @ViewChild('file') file = null;
  public files: Set<File> = new Set();

  constructor() { }

  ngOnInit() {
  }

  public onFilesAdded = () => {
    const files: { [key: string]: File } = this.file.nativeElement.files;
    this.InputChanged.emit(files);
  }

  public resetFiles = () => {
    (this.resetFileData) ? this.file.nativeElement.value = '' : this.onFilesAdded();
  }

}
