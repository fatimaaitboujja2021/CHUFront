import { Component, OnInit } from '@angular/core';
import {IndemniteGarde} from '../../../../../controller/model/indemnite-garde.model';
import {IndemniteGardeService} from '../../../../../controller/service/indemnite-garde.service';
import {Router} from '@angular/router';
import {TokenStorageService} from '../../../../../_services/token-storage.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-printgarde',
  templateUrl: './printgarde.component.html',
  styleUrls: ['./printgarde.component.scss']
})
export class PrintgardeComponent implements OnInit {
  rowGroupMetadata: any;
  matricule:string;
  isLoggedIn = false;
  trim:number=0;
  year:number;
  totalMontantNet:number;
  fileName= 'ExcelSheet.xlsx';

  constructor(private  service:IndemniteGardeService,private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.service.findAll().subscribe(data => this.items = data);
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      //this.lastname=this.tokenStorageService.getUser().lastname

      this.matricule=user.matricule;
    }
  }
  reset(){
    this.service.findAll().subscribe(data => this.items = data);
    this.trim=null;
    this.year=null;
    this.totalMontantNet=null;

  }
  exportexcel(): void
  {
    /* pass here the table id */
    let element = document.getElementById('print-me');
    const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);

  }
  searchFonctionnaire(year,trim) {
    if(trim!=0){
      this.service.findByyearTrim(year,trim).subscribe(data => this.items = data);
      this.service.findMontantnettotal(this.year).subscribe(data=>this.totalMontantNet=data);



    }else{
      this.service.findByYear(year).subscribe(data => this.items = data);
      this.service.findMontantnettotal(this.year).subscribe(data=>this.totalMontantNet=data);

    }

  }
  onSort() {
    this.updateRowGroupMetaData();
  }

  updateRowGroupMetaData() {
    this.rowGroupMetadata = {};

    if (this.items) {
      for (let i = 0; i < this.items.length; i++) {
        const rowData = this.items[i];
        const representativeName = rowData.ref.substring(12,15);

        if (i === 0) {
          this.rowGroupMetadata[representativeName] = { index: 0, size: 1 };
        }
        else {
          const previousRowData = this.items[i - 1];
          const previousRowGroup = previousRowData.ref.substring(12,15);
          if (representativeName === previousRowGroup) {
            this.rowGroupMetadata[representativeName].size++;
          }
          else {
            this.rowGroupMetadata[representativeName] = { index: i, size: 1 };
          }
        }
      }
    }
  }

  get items(): Array<IndemniteGarde> {
    return this.service.items;
  }

  set items(value: Array<IndemniteGarde>) {
    this.service.items = value;
  }

}
