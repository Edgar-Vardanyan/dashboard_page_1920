import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';



@NgModule({
  declarations: [],
  imports: [
    MatExpansionModule,
    MatSlideToggleModule,
  ],
  exports: [
    MatExpansionModule,
    MatSlideToggleModule,
  ],
})
export class MaterialModule { }
