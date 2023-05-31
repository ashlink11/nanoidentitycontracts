import { Component } from '@angular/core';
import { Contract } from 'src/app/Contract';
import { CONTRACTS } from 'src/app/mock-contracts';

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.css']
})
export class ContractsComponent {
  contracts: Contract[] = CONTRACTS;
}
