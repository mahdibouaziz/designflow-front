import { Component} from '@angular/core';

import { id } from '@swimlane/ngx-datatable';
import * as Handsontable from 'handsontable';
import { observable } from 'rxjs';
import { itemService } from '../../../helpers/services/item.service'
import { HotTableRegisterer } from '@handsontable/angular';
import { tableCustomRender } from '../../../helpers/services/table-custom-render.service'
@Component({
  selector: 'app-blank-page',
  templateUrl: './blank-page.component.html'
})
export class BlankPageComponent  {
  dataset: any; 
  hotSettings:any;
  alex:any;
  data:any;
  id:any = 'hotInstance';
  hotRegisterer:any
  row_id:any;
   constructor(private itemService: itemService,private tableCustomRender: tableCustomRender) { 

  }

  ngOnInit(): void {
    this.itemService.getAllItem().subscribe(async(data)=>{
      this.itemService.Table_Headers_Key().subscribe(async(colHeaders)=>{
        await this.tableCustomRender.updateTable(data,colHeaders)
      })
    })
    
  }


}
