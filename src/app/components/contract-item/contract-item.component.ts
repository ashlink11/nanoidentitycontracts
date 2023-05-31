import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Contract } from 'src/app/Contract';

@Component({
  selector: 'app-contract-item',
  templateUrl: './contract-item.component.html',
  styleUrls: ['./contract-item.component.css']
})
export class ContractItemComponent implements OnInit {
  @Input() contract: Contract;

  constructor() {}

  ngOnInit(): void {}
}
