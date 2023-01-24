import { Component, Input, OnInit } from '@angular/core';

@Component({
  //standalone: true,
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.css']
})
export class MensagemComponent implements OnInit {
  @Input()
  mensagem = '';

  constructor() { }

  ngOnInit(): void {
  }

}
