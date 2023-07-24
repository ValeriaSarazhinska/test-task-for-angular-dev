import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyRoutingModule } from './lazy-routing.module';
import { LazyComponent } from './lazy.component';
import { ShellModule } from '@app/shell/shell.module';

@NgModule({
  declarations: [LazyComponent],
  imports: [CommonModule, LazyRoutingModule, ShellModule],
})
export class LazyModule {}
