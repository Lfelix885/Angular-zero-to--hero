import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

interface Cep {
  logradouro: string;
  bairro: string;
  localidade: string;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styles: [],
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}

  cepInfo$: Observable<Cep>;

  ngOnInit(): void {
    this.cepInfo$ = this.http.get<Cep>(
      "https://viacep.com.br/ws/07190023/json/"
    );
  }
}
