import { CommonModule, CurrencyPipe } from "@angular/common";
import { HttpParams } from "@angular/common/http";
import { Component, EventEmitter, Input, Output, inject } from "@angular/core";
import { OverlayPanelModule } from "primeng/overlaypanel";
import { TableLazyLoadEvent, TableModule } from "primeng/table";
import { TooltipModule } from "primeng/tooltip";
import { CopiarTextoComponent } from "../copiar-texto/copiar-texto.component";
import { UtilService } from "../../core/service/util.service";
import { ColumnsTableDTO, ItensAcoesDTO } from "../../core/dto/generic-table.dto";

// import { UtilService } from "../../../core/service/util.service";
// import { CopiarTextoComponent } from "../../copiar-texto/copiar-texto.component";
// import { MaskDocumentoPipe } from "../../../core/pipe/mask-documento.pipe";
// import { TextTransform } from "../../../core/pipe/text-transform.pipe";
// import { TabsGenericDTO } from "../../../core/dto/tabs.dto";
// import { GenericTabsComponent } from "../../generic-tabs/generic-tabs.component";
// import { MaskTelefone } from "../../../core/pipe/mask-telefone.pipe";

@Component({
  selector: "app-generic-table",
  standalone: true,
  imports: [
    TableModule,
    CommonModule,
    CopiarTextoComponent,
    TooltipModule,
    OverlayPanelModule,
    // MaskDocumentoPipe,
    // TextTransform,
    // GenericTabsComponent,
  ],
  templateUrl: "./generic-table.component.html",
  styleUrl: "./generic-table.component.scss",
  providers: [ CurrencyPipe],
})
export class GenericTableComponent {
  utilService = inject(UtilService);
  // maskTelefone = inject(MaskTelefone);

  @Input()
  data: any;

  @Input()
  columns!: ColumnsTableDTO[];

  @Output() acaoTabela = new EventEmitter<{ item: any; action: string }>();

  @Input()
  inicialSort!: { sortOrders: string; sortProperties: string };

  // @Input()
  // tabs: TabsGenericDTO[] | undefined;

  @Input()
  menuAction: ItensAcoesDTO[] | undefined;

  @Input()
  paginator: boolean = true;

  @Input()
  titulo: string | undefined;

  @Input()
  rows = 5;

  first = 0;

  @Output() pesquisar = new EventEmitter<HttpParams>();

  // maskDocumento = inject(MaskDocumentoPipe);
  // textTransform = inject(TextTransform);
  currencyPipe = inject(CurrencyPipe);

  itemSelecionado: any;

  verificaCaminho(obj: any, path?: any): any {
    if (path) {
      const properties = path.toString().split(".");
      return properties.reduce(
        (acc: { [x: string]: any }, prop: string | number) =>
          acc && acc[prop] !== undefined ? acc[prop] : path,
        obj
      );
    } else {
      return obj;
    }
  }

  tranformar(elemento: any, pipe?: string, transform?: Function) {
    let result: string = elemento;

    if (transform) {
      result = transform(result);
    }
    switch (pipe) {
      // case "documento":
      //   result = this.maskDocumento.transform(result);
      //   break;

      // case "textTransform":
      //   result = this.textTransform.transform(result);
      //   break;

      // case "telefone":
      //   result = this.maskTelefone.transform(result);
      //   break;

      // case 'cep':
      //   result = this.maskCepPipe.transform(result);
      //   break;

      case "date":
        const data = new Date(result);
        const options: Intl.DateTimeFormatOptions = {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        };
        result = data.toLocaleDateString("pt-BR", options);
        break;

      case "dinheiro":
        result = this.currencyPipe
          .transform(result, "BRL", "symbol", "1.2-2")!
          .replace(/(\D)\s*(\d)/, "$1 $2")!;
        break;

      case "porcentagem":
        result = result + "%";
        break;

      default:
        return result;
    }
    return result;
  }

  loadCarsLazy(event: TableLazyLoadEvent) {
    this.pesquisar.emit(
      this.utilService.generateParamsPage(
        event,
      )
    );
  }
}
