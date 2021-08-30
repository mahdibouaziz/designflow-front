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
    //id:any = 'hotInstance';
    hotRegisterer:HotTableRegisterer;
    row_id:any;
    fillHandle_direction:any='';

  constructor(private itemService:itemService ) {
      let test = new characterModel
    console.log(test)
  }

  async updateTable(data,colHeaders){
    let hotSettings = await this.customRender(data,colHeaders,'','');
    this.hotRegisterer = new HotTableRegisterer()
    let example = document.getElementById('hotInstance');
    let newInstance = new Handsontable.default(example, hotSettings);
    this.hotRegisterer.registerInstance('hotInstance',newInstance)
    //console.log(this.hotRegisterer.(this.id))
    //if(this.hotRegisterer.getInstance(this.id)){
    //this.hotRegisterer.getInstance(this.id).destroy();
    //console.log(hotSettings)
    //this.hotRegisterer.getInstance(this.id).updateSettings(hotSettings)
    //}
     }
    
  
  async customRender(data,colHeaders,currentValue,filterId){
    var hotSettings;
    let newArray = [{}];
    for(var i=0;data.length > i;i++){
     // let temp = data[i].picturethumb.replace('..','http://rfq.edgeho.me')
     let temp=""
     newArray.push([null,false,data[i]._id,data[i].code,data[i].grupo,data[i].notes,data[i].matrix,data[i].pkging,data[i].size_h,data[i].status,data[i].vendor,data[i].vendor2,data[i].vendor3,data[i].vendor4,data[i].vendor5,data[i].vendor6,data[i].vendor7,data[i].vendor8,data[i].vendor9,data[i].auditlog,data[i].customer,data[i].dilution,data[i].fob_cost,data[i].material,data[i].quantity,data[i].size_l_w,data[i].vendor10,data[i].vendor10,data[i].vendor11,data[i].vendor12,data[i].case_pack,data[i].duty_rate,data[i].prod_link,data[i].wholesale,data[i].code_grupo,
       data[i].fob_margin,data[i].item_label,data[i].ldp_margin,data[i].poe_margin,data[i].production,data[i].treatments,data[i].comp_retail,data[i].default_cbm,data[i].description,data[i].fob_netsell,data[i].fob_royalty,data[i].landed_cost,data[i].ldp_netsell,data[i].ldp_royalty,data[i].poe_netsell,data[i].poe_royalty,data[i].vendor1_cbm,data[i].vendor2_cbm,data[i].vendor3_cbm,data[i].vendor4_cbm,data[i].vendor5_cbm,data[i].vendor6_cbm,
       data[i].vendor7_cbm,data[i].vendor8_cbm,data[i].vendor9_cbm,data[i].construction,data[i].created_date,data[i].date_request,data[i].delivery_loc,temp,data[i].quote_update,data[i].style_number,data[i].vendor10_cbm,data[i].vendor11_cbm,data[i].vendor12_cbm,data[i].cbm_per_piece,data[i].fob_pricesale,data[i].fob_sellprice,data[i].ldp_pricesale,data[i].ldp_sellprice,data[i].logistic_load,data[i].poe_pricesale,data[i].poe_sellprice,data[i].price_per_cbm,data[i].vendor1_amount,
       ,data[i].vendor1_status,data[i].vendor2_amount,data[i].vendor2_status,data[i].vendor3_amount,data[i].vendor3_status,data[i].vendor4_amount,data[i].vendor4_status,data[i].vendor5_amount,data[i].vendor5_status,data[i].vendor6_amount,data[i].vendor6_status,data[i].vendor7_amount,data[i].vendor7_status,data[i].vendor8_amount,data[i].vendor8_status,data[i].vendor9_amount,data[i].vendor9_status,data[i].vendor10_amount,data[i].vendor10_status,data[i].vendor11_amount,data[i].vendor11_status,data[i].vendor12_amount
       ,data[i].vendor12_amount,data[i].vendor12_status,data[i].standardized_products,data[i]._airbyte_emitted_at,data[i]._airbyte_products_hashid])
     }
     newArray.shift()

    return hotSettings = Handsontable.default.DefaultSettings = {
      data:newArray,
      columns: [
        {
            readOnly: true,
            renderer: (instance, TD, row, col, prop, value, cellProperties) => {
              TD.innerHTML = `<button id="button1" class="upsent">UPSENT</button><button id="button2" class="present">PRESENT</button>`
              return TD;
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
                img.event = "test()"
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
          console.log()
          //console.log(index)
          //colHeaders[index].title
        //colHeaders[index].field
        return index.toString()
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
          }
        }
      },
      manualColumnMove: true,
      manualRowMove: true,
      columnSorting: true,
      dropdownMenu: true,
      filters: true,
      search: true,
      afterGetColHeader: this.addInput,
      beforeOnCellMouseDown(event, coords) {
        let target = event.target as HTMLInputElement
        // Deselect the column after clicking on input.
        if (coords.row === -1 && target.nodeName === 'INPUT') {
          event.stopImmediatePropagation();
          this.deselectCell();
        }
      },
      height: 500,
      fillHandle: {
        // enable plugin in vertical direction and with autoInsertRow as false
        autoInsertRow: false,
        direction: 'vertical'
      },
     
      manualColumnResize: true,
      width: '100%',
      licenseKey: 'non-commercial-and-evaluation',
      afterOnCellMouseDown: (event, coords, TD) => {
         
      },
      afterDocumentKeyDown:async (event) =>{
         
      
       }
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
        
        const filtersPlugin = this.hotRegisterer.getInstance('hotInstance').getPlugin('filters');
        console.log(filtersPlugin)
        filtersPlugin.removeConditions(colIndex);
        console.log(filtersPlugin.addCondition(colIndex, 'contains', [value])); 
        filtersPlugin.addCondition(colIndex, 'contains', [value]);
        filtersPlugin.filter();
    }
       addEventListeners = (input, colIndex) => {
        return input.addEventListener('keydown', event => {
          var alphabet = [
"Backspace","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9",'/','*','-','+','.','\\','!','@','#','$','%','^','"',';','=','_',')','(','&','{','}']
            
            let falseEvent= false;
            console.log(event.ctrlKey)
                if(!alphabet.includes(event.key) && event.ctrlKey == true || alphabet.includes(event.key) && event.ctrlKey == true){
                    falseEvent = true
                }
 
           if(!falseEvent)
          this.debounceFn(colIndex, event);
        });
      };
      
      // Build elements which will be displayed in header.
       getInitializedElements = colIndex => {
        const div = document.createElement('div');
        const input = document.createElement('input');
        const br = document.createElement('br');
        div.className = 'filterHeader';
      
        this.addEventListeners(input, colIndex);
      
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
      
        if (col >= 0 && TH.childElementCount < 2) {
          TH.appendChild(this.getInitializedElements(col));
        }
      };
}
