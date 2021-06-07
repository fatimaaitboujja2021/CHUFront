import { Component, OnInit } from '@angular/core';
import {IndemniteAstreinte} from '../../../../../controller/model/indemniteAstreinte.model';
import {IndemniteAstreinteService} from '../../../../../controller/service/indemnite-astreinte.service';
import {TokenStorageService} from '../../../../../_services/token-storage.service';
import {Router} from '@angular/router';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-printastreinte',
  templateUrl: './printastreinte.component.html',
  styleUrls: ['./printastreinte.component.scss']
})
export class PrintastreinteComponent implements OnInit {
  rowGroupMetadata: {};
  rowData: any;
  trim:number;
  year:number;
  totalMontantNet:number;
  fileName= 'ExcelSheet.xlsx';

  constructor(private  indemniteastreinteservice:IndemniteAstreinteService,private route: Router,private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.indemniteastreinteservice.findAll().subscribe(data => this.items = data);

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
  reset(){
    this.indemniteastreinteservice.findAll().subscribe(data => this.items = data);
    this.trim=null;
    this.year=null;
    this.totalMontantNet=null;
  }
  private valider(){
    this.route.navigate(['/printastreinte'])

  }
  onSort() {
    this.updateRowGroupMetaData();
  }
  updateRowGroupMetaData() {
    this.rowGroupMetadata = <any> {};

    if (this.items) {
      for (let i = 0; i < this.items.length; i++) {

        this.rowData = this.items[i];
        const representativeName = this.rowData.ref.substring(12,15)

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


  searchFonctionnaire(year,trim) {

    if(trim!=null){
      this.indemniteastreinteservice.findByyearTrim(year,trim).subscribe(data => this.items = data);



    }else{
      this.indemniteastreinteservice.findByYear(year).subscribe(data => this.items = data);

    }
    this.indemniteastreinteservice.findMontantnettotal(this.year).subscribe(data=>this.totalMontantNet=data);

  }

  get items(): Array<IndemniteAstreinte> {
    return this.indemniteastreinteservice.items;
  }

  set items(value: Array<IndemniteAstreinte>) {
    this.indemniteastreinteservice.items = value;
  }

}
