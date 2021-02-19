import { Component, OnInit } from "@angular/core";
import { AuthService } from '../../services/auth.service';
declare var $: any;

@Component({
  selector: "app-repairs",
  templateUrl: "./repairs.component.html",
  styleUrls: ["./repairs.component.scss"],
})
export class RepairsComponent implements OnInit {
  
 token = null;
  constructor(
    public auth: AuthService,
  ) {

  }


  ngOnInit() {

 this.auth.getAccessTokenSilently().subscribe(
      res => {
        console.log("token is " + res);
        alert("token is " + res);
        this.token = res;


/*
        $(document).ready(function() {
          $('#example').DataTable(
            {
              "processing": true,
              "serverSide": true,
              "ordering": false,
              "ajax": {
                  url: "/api/customers",
                  headers: {
                      "Authorization": "Bearer bro"
                  }
              }
            }
          );
      } );
      */
  
      }
    );


  }
}
