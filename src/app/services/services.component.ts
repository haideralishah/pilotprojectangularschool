import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {


  /* ****************** Header *************************/

  coverHeading: string;
  coverDesc: string;

  /* ****************** Header *************************/


  /* ****************** Services *************************/

  serviceMainHeading: string;

  serviceHeading1: string;
  serviceHeading2: string;
  serviceHeading3: string;

  servicePara1: string;
  servicePara2: string;
  servicePara3: string;

  /* ****************** Services *************************/

  /* ****************** Mail Us *************************/

  mailHeading: string;
  mailContent: string;
  mailtoAddress: string;

  /* ****************** Mail Us *************************/


  /* ****************** Footer *************************/
  footerMsg: string;
  address: string;
  city: string;
  email: string;
  fone: string;
  /* ****************** Footer *************************/



  http: Http;
  constructor(http: Http) {

    this.http = http;
    /* ****************** Header *************************/
    this.coverHeading = 'Services';
    this.coverDesc = 'Matter of generations';

    /* ****************** Header *************************/

    /* ****************** Services *************************/

    this.serviceMainHeading = 'we are giving special Services';

    this.serviceHeading1 = 'suscipit turpis diam eget';
    this.serviceHeading2 = 'suscipit turpis diam eget';
    this.serviceHeading3 = 'Haider Ali Shah Haider Ali';

    this.servicePara1 = 'Quisque consectetur, sem id sagittis sodales, augue diam consequat mi, sed suscipit turpis diam eget nisl.';
    this.servicePara2 = 'Quisque consectetur, sem id sagittis sodales, augue diam consequat mi, sed suscipit turpis diam eget nisl.';
    this.servicePara3 = 'Quisque consectetur, sem id sagittis sodales, augue diam consequat mi, sed suscipit turpis diam eget nisl.';

    /* ****************** Services *************************/

    /* ****************** Mail Us *************************/

    this.mailHeading = 'Integer venenatis massa lobortis porta ultricies nulla nec facilisis turpis';
    this.mailContent = 'Etiam sit amet porta lectus, in convallis sapien. Nam quis erat lorem. Nullam bibendum nisi eu fringilla vulputate. Fusce non ligula vel sapien blandit cursus.';
    this.mailtoAddress = 'mailto:headeralishah@gmail.com';

    /* ****************** Mail Us *************************/


    /* ****************** Footer *************************/
    this.footerMsg = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero corrupti temporibus, dicta sit sint non nobis fugit, optio id eveniet ratione, repellat magni numquam reiciendis qui impedit magnam maiores odit?';
    this.address = '1234k Avenue, 4th block,';
    this.city = 'Karachi'
    this.email = 'mailto:info@example.com';
    this.fone = '+0341 354 2800';
    /* ****************** Footer *************************/
  }

  data: any;
  rec: any;

 ngOnInit() {}


  // ngOnInit() {
  //   this.http.post('http://localhost:5000/getAngularSchoolData', {
  //     autherName: 'haider'
  //   })
  //     .subscribe((res: Response) => {
  //       this.data = res.json();
  //       this.rec = this.data.record.data;
  //       // console.log(this.data);
  //       console.log(this.rec);


  //       /* ****************** Header *************************/
  //       this.coverHeading = this.rec.coverHeading
  //       this.coverDesc = this.rec.coverDesc

  //       /* ****************** Header *************************/



  //       /* ****************** Services *************************/

  //       this.serviceMainHeading = this.rec.serviceMainHeading

  //       this.serviceHeading1 = this.rec.serviceHeading1
  //       this.serviceHeading2 = this.rec.serviceHeading2
  //       this.serviceHeading3 = this.rec.serviceHeading3

  //       this.servicePara1 = this.rec.servicePara1
  //       this.servicePara2 = this.rec.servicePara2
  //       this.servicePara3 = this.rec.servicePara3

  //       /* ****************** Services *************************/

  //       /* ****************** Mail Us *************************/

  //       this.mailHeading = this.rec.mailHeading
  //       this.mailContent = this.rec.mailContent
  //       this.mailtoAddress = this.rec.mailtoAddress

  //       /* ****************** Mail Us *************************/







  //       /* ****************** Footer *************************/
  //       this.footerMsg = this.rec.footerMsg
  //       this.address = this.rec.address
  //       this.city = this.rec.city
  //       this.email = this.rec.email
  //       this.fone = this.rec.fone
  //       /* ****************** Footer *************************/


  //     })
  // }
}
