import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerningspillComponent } from './terningspill.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { DropdownModule} from 'primeng/primeng';
import { FormsModule} from '@angular/forms';
import { ButtonModule} from 'primeng/primeng';
import { ProgressSpinnerModule} from 'primeng/primeng';
import { TabViewModule} from 'primeng/primeng';
import { CodeHighlighterModule} from 'primeng/primeng';
import { DataTableModule} from 'primeng/primeng';
import { SharedModule} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,BrowserModule,
    BrowserAnimationsModule,
    DropdownModule,
    FormsModule,
    ButtonModule,
    ProgressSpinnerModule,
    TabViewModule,
    CodeHighlighterModule,
    DataTableModule,
    SharedModule
  ],
  declarations: [TerningspillComponent]
})
export class TerningspillModule { }
