import { Injectable,NgModule } from '@angular/core'
import { HttpClient } from '@angular/common/http'
//import { Data } from '../model/data'
import { itemService } from '../services/item.service'
import { HotTableRegisterer } from '@handsontable/angular';
import * as Handsontable from 'handsontable';
import  {characterModel}  from '../models/character.module'


export interface array{

    
}

@Injectable()
export class tableCustomRender  {
    

    dataset: any; 
    //hotSettings:any;
    alex:any;
    data:any;
    id:any = 'hotInstance';
    hotRegisterer:HotTableRegisterer;
    row_id:any;
    fillHandle_direction:any='';
    colIndex:any = 0;
    hot:Handsontable.default;
    groupArray:any = []
    toggleEvents:any = [{}];
    isRender:any=false;
    colHeaders:any;
  constructor(private itemService:itemService ) {
      let test = new characterModel
    console.log(test)
  }

  async updateTable(data,colHeaders){
    this.data = data;
    this.colHeaders = colHeaders
    let hotSettings = await this.customRender(data,colHeaders,'','',false);
    this.hotRegisterer = new HotTableRegisterer()
    let example = document.getElementById('hotInstance');
    this.hot = new Handsontable.default(example, hotSettings);
    this.hotRegisterer.registerInstance('hotInstance',this.hot)
   // const freez = this.hot.getPlugin('manualColumnFreeze');
   // freez.freezeColumn(1)
   // let test = this.hot.getPlugin('fre')
   // test.freezeColumn(1)
   // this.hot.render()
    //console.log(this.hotRegisterer.(this.id))
    //if(this.hotRegisterer.getInstance(this.id)){
    //this.hotRegisterer.getInstance(this.id).destroy();
    //console.log(hotSettings)
    //this.hotRegisterer.getInstance(this.id).updateSettings(hotSettings)
    //}
     }
     onNewProduct(){
         this.customRender(this.data,this.colHeaders,'','',false)
        //this.hot.alter('remove_row',-1)
        //this.hot.alter('remove_row',-1)
        //this.hot.alter('remove_row',0)
        //this.hot.alter('remove_row',0)
        this.hot.alter('insert_row',1);
        //const rowMovePlugin = this.hot.getPlugin('manualRowMove');
        //console.log("this.hot.countRows()")
        //console.log(this.hot.countRows())
        //this.hot.alter()
        //rowMovePlugin.moveRow(0,3)

        //rowMovePlugin.dragRow(this.hot.countRows()-1,0)
        //this.hot.render();
        this.isRender = true;
        }

     onPrint(){
        const iframe = document.createElement('iframe');
        // we have to add an iframe to the document, otherwise, the browser will not generate the inner document
        // so to not show it in the layout you can set the display to none
        iframe.style.cssText = 'display: none';
      
        document.body.appendChild(iframe);
        const doc = iframe.contentDocument;
      
          // To convert Handsontable to its pure HTML form, you can use `.toHTML()` method.
        // Remember - it's a synchronous function - if you have thousands of rows, it might freeze the browser for a while.
        doc.open('text/html', 'replace');
        doc.write(`<!doctype html><html><head>
        <style>
          @media print {
            table {
              border-collapse: collapse;
            }
            th, td {
              border: 1px solid #ccc;
              min-width: 50px;
              padding: 2px 4px;
            }
            th {
              background-color: #f0f0f0;
              text-align: center;
              font-weight: 400;
              white-space: nowrap;
              -webkit-print-color-adjust: exact;
            }
          }
        </style>
        </head><body>${this.hot.toHTML()}</body></html>`);
        doc.close();
        
           doc.defaultView.print();
      
        setTimeout(() => {
            // this code will be executed 10ms after you close printing window
            iframe.parentElement.removeChild(iframe);
        }, 10);
     }

     exportToExcel(){
        const exportPlugin = this.hot.getPlugin('exportFile');  
        exportPlugin.downloadFile('csv', {
            bom: false,
            columnDelimiter: ',',
            columnHeaders: true,
            exportHiddenColumns: true,
            exportHiddenRows: true,
            fileExtension: 'csv',
            filename: 'Handsontable-CSV-file_[YYYY]-[MM]-[DD]',
            mimeType: 'text/csv',
            rowDelimiter: '\r\n',
            rowHeaders: false
          });
        
     }
    
      check(data,value) {
        for(var i=0;data.length > i;i++){
           
            let check=false;
            for(var j=0;this.groupArray.length > j;j++){
                if(this.groupArray[j] == value){
                  check=true;
                  return null
                    }
                }
                if(check == false){
                    this.groupArray.push(value)
                    return value
                }
    }
}

  async customRender(data,colHeaders,currentValue,filterId,isRendering){
    var hotSettings;
    //I have to add a dynamic array size and dynamic object properties
    let newArray =[{}];
    
   
    newArray.shift()
    for(var i=0;data.length > i;i++){
        let group =this.check(data,data[i].code_grupo)
        let imgSrc = data[i].picturethumb.replace('..','http://rfq.edgeho.me')
      if(group){
        newArray.push([group])
        newArray.push([null,
            false,data[i]._id,data[i].code,data[i].grupo,data[i].notes,data[i].matrix,data[i].pkging,data[i].size_h,data[i].status,data[i].vendor,data[i].vendor2,data[i].vendor3,data[i].vendor4,data[i].vendor5,data[i].vendor6,data[i].vendor7,data[i].vendor8,data[i].vendor9,data[i].auditlog,data[i].customer,data[i].dilution,data[i].fob_cost,data[i].material,data[i].quantity,data[i].size_l_w,data[i].vendor10,data[i].vendor10,data[i].vendor11,data[i].vendor12,data[i].case_pack,data[i].duty_rate,data[i].prod_link,data[i].wholesale,data[i].code_grupo,
           data[i].fob_margin,data[i].item_label,data[i].ldp_margin,data[i].poe_margin,data[i].production,data[i].treatments,data[i].comp_retail,data[i].default_cbm,data[i].description,data[i].fob_netsell,data[i].fob_royalty,data[i].landed_cost,data[i].ldp_netsell,data[i].ldp_royalty,data[i].poe_netsell,data[i].poe_royalty,data[i].vendor1_cbm,data[i].vendor2_cbm,data[i].vendor3_cbm,data[i].vendor4_cbm,data[i].vendor5_cbm,data[i].vendor6_cbm,
           data[i].vendor7_cbm,data[i].vendor8_cbm,data[i].vendor9_cbm,data[i].construction,data[i].created_date,data[i].date_request,data[i].delivery_loc,imgSrc,data[i].quote_update,data[i].style_number,data[i].vendor10_cbm,data[i].vendor11_cbm,data[i].vendor12_cbm,data[i].cbm_per_piece,data[i].fob_pricesale,data[i].fob_sellprice,data[i].ldp_pricesale,data[i].ldp_sellprice,data[i].logistic_load,data[i].poe_pricesale,data[i].poe_sellprice,data[i].price_per_cbm,data[i].vendor1_amount,
           ,data[i].vendor1_status,data[i].vendor2_amount,data[i].vendor2_status,data[i].vendor3_amount,data[i].vendor3_status,data[i].vendor4_amount,data[i].vendor4_status,data[i].vendor5_amount,data[i].vendor5_status,data[i].vendor6_amount,data[i].vendor6_status,data[i].vendor7_amount,data[i].vendor7_status,data[i].vendor8_amount,data[i].vendor8_status,data[i].vendor9_amount,data[i].vendor9_status,data[i].vendor10_amount,data[i].vendor10_status,data[i].vendor11_amount,data[i].vendor11_status,data[i].vendor12_amount
           ,data[i].vendor12_amount,data[i].vendor12_status,data[i].standardized_products,data[i]._airbyte_emitted_at,data[i]._airbyte_products_hashid])
      }else{
       
     newArray.push([null,
        false,data[i]._id,data[i].code,data[i].grupo,data[i].notes,data[i].matrix,data[i].pkging,data[i].size_h,data[i].status,data[i].vendor,data[i].vendor2,data[i].vendor3,data[i].vendor4,data[i].vendor5,data[i].vendor6,data[i].vendor7,data[i].vendor8,data[i].vendor9,data[i].auditlog,data[i].customer,data[i].dilution,data[i].fob_cost,data[i].material,data[i].quantity,data[i].size_l_w,data[i].vendor10,data[i].vendor10,data[i].vendor11,data[i].vendor12,data[i].case_pack,data[i].duty_rate,data[i].prod_link,data[i].wholesale,data[i].code_grupo,
       data[i].fob_margin,data[i].item_label,data[i].ldp_margin,data[i].poe_margin,data[i].production,data[i].treatments,data[i].comp_retail,data[i].default_cbm,data[i].description,data[i].fob_netsell,data[i].fob_royalty,data[i].landed_cost,data[i].ldp_netsell,data[i].ldp_royalty,data[i].poe_netsell,data[i].poe_royalty,data[i].vendor1_cbm,data[i].vendor2_cbm,data[i].vendor3_cbm,data[i].vendor4_cbm,data[i].vendor5_cbm,data[i].vendor6_cbm,
       data[i].vendor7_cbm,data[i].vendor8_cbm,data[i].vendor9_cbm,data[i].construction,data[i].created_date,data[i].date_request,data[i].delivery_loc,imgSrc,data[i].quote_update,data[i].style_number,data[i].vendor10_cbm,data[i].vendor11_cbm,data[i].vendor12_cbm,data[i].cbm_per_piece,data[i].fob_pricesale,data[i].fob_sellprice,data[i].ldp_pricesale,data[i].ldp_sellprice,data[i].logistic_load,data[i].poe_pricesale,data[i].poe_sellprice,data[i].price_per_cbm,data[i].vendor1_amount,
       ,data[i].vendor1_status,data[i].vendor2_amount,data[i].vendor2_status,data[i].vendor3_amount,data[i].vendor3_status,data[i].vendor4_amount,data[i].vendor4_status,data[i].vendor5_amount,data[i].vendor5_status,data[i].vendor6_amount,data[i].vendor6_status,data[i].vendor7_amount,data[i].vendor7_status,data[i].vendor8_amount,data[i].vendor8_status,data[i].vendor9_amount,data[i].vendor9_status,data[i].vendor10_amount,data[i].vendor10_status,data[i].vendor11_amount,data[i].vendor11_status,data[i].vendor12_amount
       ,data[i].vendor12_amount,data[i].vendor12_status,data[i].standardized_products,data[i]._airbyte_emitted_at,data[i]._airbyte_products_hashid])
     
     }
    }
    
    return hotSettings = Handsontable.default.DefaultSettings = {
      data:newArray,
      columns: [
          
          {
              //readOnly: true,
              renderer: (instance, TD, row, col, prop, value, cellProperties) => {
                console.log(row)
              if(value != null && isRendering == false){
           TD.innerHTML = `<button id=group_toggle_`+value.split(' ').join('')+` >`+value+`</button>`
           TD.colSpan = 99

           return TD;
            }else if(isRendering == true && row == 0){
              console.log(row)
              TD.innerHTML = ``
              TD.style.background = '#d7f1e1';
              return TD
            }
          }
            },
          {
              type:"checkbox"
          }
          ,
        {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{
         editor: false,
         renderer(instance, td, row, col, prop, value, cellProperties) {
            const escaped = Handsontable.default.helper.stringify(value);
            let img = null;
  
            if (escaped.indexOf('http') === 0) {
                img = document.createElement('IMG');
                img.src = value;
    
                Handsontable.default.dom.addEvent(img, 'mousedown', event => {
                  event.preventDefault();
                });
    
                Handsontable.default.dom.empty(td);
                td.appendChild(img);
                
    
              } else {
                Handsontable.default.renderers.TextRenderer.apply(this, arguments);
              }
    
              return td;
            }
        },
      {},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},
      ],
      //rowHeights: 500,
      rowHeaders(index) {
        //console.log(index)
        return `<img src="/assets/icons/carret-up-down.svg" alt="Exclamation mark">`;          
      },
      colHeaders(index) {
        return index.toString()
        if(index){
           
        }else{
            return ''
        }
      
        if(1 == index && '0'){
           // return `<p>`+index+`</p><input type="text" id=`+'colHeader_'+index+ '_' + Math.random().toString(36).substring(7)+` value="`+currentValue+`" class="upsent" />`;
        }else{
            return `<p>`+index+`</p><input type="text" id=`+'colHeader_'+index+ '_' + Math.random().toString(36).substring(7)+` class="upsent" />`;
        }      
      },
      contextMenu: {
        items: {        
          'Freez' : {
            name: 'Freez',
            callback: function(key, selection) {
            let hotRegisterer = new HotTableRegisterer();
            hotRegisterer.getInstance('hotInstance').updateSettings({
                manualRowMove: [selection[0].start.row, 0],
                fixedRowsTop: 1
                })
                 
            }
          },
          'Undo' : {
              name: 'Undo',
              callback: function(key, selection) {
              let hotRegisterer = new HotTableRegisterer();
              hotRegisterer.getInstance('hotInstance').undo()
                   
              }
            }
        }
      },
      manualColumnFreeze :true,
      //fixedRowsTop: 0,
      viewportColumnRenderingOffset:100,
      viewportRowRenderingOffset:colHeaders.length+1,
      //renderAllRows:true,
      customBorders:true,
      manualColumnMove: true,
      manualRowMove: true,
      columnSorting: true,
      dropdownMenu: true,
      filters: true,
      undo: true,
      //height:"100%",
      currentRowClassName: 'currentRow',
      search: true,
      //hiddenRows:true,
      afterGetColHeader: this.addInput,
      beforeOnCellMouseDown(event, coords) {
        let target = event.target as HTMLInputElement
        // Deselect the column after clicking on input.
        if (coords.row === -1 && target.nodeName === 'INPUT') {
          event.stopImmediatePropagation();
          this.deselectCell();
        }
      },
      fillHandle: {
        // enable plugin in vertical direction and with autoInsertRow as false
        autoInsertRow: false,
        direction: 'vertical'
      },
      
      //manualColumnResize: [1, 2],
      width: '100%',
      //colWidths: '50px',
      licenseKey: 'non-commercial-and-evaluation',
      afterOnCellMouseDown: async(event, coords, TD) => {
        let target = event.target as HTMLParagraphElement
        let shouldSkip = null;
        if (target.id.includes('group_') ) {
           let id = target.id.split('_')
           console.log(id)
           //for(var i=0;this.toggleEvents.length > i;i++){}
          
           if(this.toggleEvents.length > 1){
           this.toggleEvents.every(async(element) => {
               if(!shouldSkip){
            if(element.id.includes(id[2]))
            {
             return shouldSkip = this.toggle(id[2],'hidden',target.textContent)
            }else{
             return shouldSkip = this.toggleEvents.push(this.toggle(id[2],'visible',target.textContent))
            }
        }
           });
        }else{
            delete this.toggleEvents[0]
            this.toggleEvents.push(this.toggle(id[2],'visible',target.textContent))
         
        }
       
        }
      },
      afterDocumentKeyDown:async (event) =>{
         
      
       }
      }
    }
     toggle(id,status,value){
        const filtersPlugin = this.hot.getPlugin('filters');
        console.log("here")
        console.log(this.toggleEvents)
        if(status == 'hidden'){
            //cell 34 is current place for code-group it should be dynamic
            filtersPlugin.removeConditions(34);
            //filtersPlugin.addCondition(34, 'contains', [value]);
            filtersPlugin.filter(); 
            return {id:id,status:'visible'}
        }else if(status == 'visible'){
            filtersPlugin.addCondition(34, 'not_contains', [value]);
            filtersPlugin.filter(); 
            return {id:id,status:'hidden'}
        }

      }

    debounceFn (colIndex, event)  {
        let value;
           if(event.key == "Backspace"){
            if(event.target.selectionStart == event.target.selectionEnd){
            value = event.target.value
            value  = value.substring(0, value.length - 1);
            }else{
                value = event.target.value
                if(event.target.selectionStart == 0 && event.target.selectionEnd == event.target.value.length){
                    value = value.slice(parseInt(event.target.selectionStart) ,-parseInt(event.target.selectionEnd));
                }else if(event.target.selectionStart != 0 && event.target.selectionEnd == event.target.value.length){
                    let temp = (parseInt(event.target.selectionEnd))-(parseInt(event.target.selectionStart))
                    value = value.slice(0 ,-temp);
                }else if(event.target.selectionStart == 0 && event.target.selectionEnd != event.target.value.length){
                    let temp = (parseInt(event.target.selectionEnd))-(parseInt(event.target.selectionStart))
                    value = value.slice(temp);
                }else if(event.target.selectionStart != 0 && event.target.selectionEnd != event.target.value.length){
                    value = value.slice(0,event.target.selectionStart)+ value.slice(event.target.selectionEnd);
                }
            }
           }
           else if(event.target.selectionStart != event.target.selectionEnd){
            value = event.target.value
            value = value.substring(0, event.target.selectionStart) + event.key + value.substring(event.target.selectionEnd);
            }else if(event.target.value.length != event.target.selectionEnd && event.target.value.length != event.target.selectionEnd){
            value = event.target.value
            value = [value.slice(0, parseInt(event.target.selectionStart)), event.key, value.slice(parseInt(event.target.selectionStart))].join('');
           }else if(event.target.value.length >= 1 && event.target.selectionStart == event.target.selectionEnd){
            value = event.target.value + event.key
           }else if(!event.target.value && event.target.selectionStart == event.target.selectionEnd){
            value = event.key
           }
        //console.log(this.hotRegisterer.getInstance('hotInstance').getData())

        const filtersPlugin = this.hot.getPlugin('filters');
        filtersPlugin.removeConditions(colIndex);
        filtersPlugin.addCondition(colIndex, 'contains', [value]);
        filtersPlugin.filter();
    }
       addEventListeners = (input) => {
        return input.addEventListener('keydown', event => {
            let inputOuterHTML = input.parentElement.parentElement.outerHTML
            let value = inputOuterHTML.split('<')
            value = value[5].split('>')
          var alphabet = [
"Backspace","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9",'/','*','-','+','.','\\','!','@','#','$','%','^','"',';','=','_',')','(','&','{','}']
            
            let falseEvent= false;
                if(!alphabet.includes(event.key) && event.ctrlKey == true || alphabet.includes(event.key) && event.ctrlKey == true || !alphabet.includes(event.key)){
                    falseEvent = true
                }
 
           if(!falseEvent)
          this.debounceFn(value[1], event);
        });
      };
      
      // Build elements which will be displayed in header.
       getInitializedElements = colIndex => {
        const div = document.createElement('div');
        const input = document.createElement('input');
        input.setAttribute( "id",``+'colHeader_'+colIndex+ '_' + Math.random().toString(36).substring(7)+``)
        const br = document.createElement('br');
        div.className = 'filterHeader';
      
        this.addEventListeners(input);
      
        div.appendChild(input);
        div.appendChild(br)
      
        return div;
      };
      
      // Add elements to header on `afterGetColHeader` hook.
       addInput = (col, TH) => {
        // Hooks can return a value other than number (for example `columnSorting` plugin uses this).
        if (typeof col !== 'number') {
          return col;
        }
        if(col >= this.colIndex){
            this.colIndex = col
        }
        if (col >= 0 && TH.childElementCount < 2 ) {
          TH.appendChild(this.getInitializedElements(col));
        }
      };
}
