import { Component, OnInit } from "@angular/core";
import { AuthService } from '../../services/auth.service';
declare var $: any;

@Component({
  selector: "app-repairs",
  templateUrl: "./repairs.component.html",
  styleUrls: ["./repairs.component.scss"],
})
export class RepairsComponent implements OnInit {
  
  constructor(
    public auth: AuthService,
  ) {

    console.log("getting token");
    const token =  auth.getTokenSilently$()

    //console.log("token = " + JSON.stringify(token));
    

  }


  ngOnInit() {

    $(document).ready(function() {
          $('#example').DataTable();
      } );
  
  }
}
