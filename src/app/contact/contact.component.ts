import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  /* ****************** Header *************************/

  coverHeading: string;
  coverDesc: string;

  /* ****************** Header *************************/

  /* ****************** Contact *************************/
  contentHeading: string;
  contactHeadingMsg: string;
  contactMsg1: string;
  contactMsg2: string;
  contactMsg3: string;



  /* ****************** Contact *************************/

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
    this.coverHeading = 'Contactus';
    this.coverDesc = 'Matter of generations';

    /* ****************** Header *************************/

    /* ****************** Contact *************************/

    this.contentHeading = 'any doubt Contact Us'
    this.contactHeadingMsg = 'Message'
    this.contactMsg1 = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur mollitia ducimus labore blanditiis cupiditate debitis ipsam eligendi, dolores quam, illum, officia nisi dolor culpa quae molestiae in est error et?';
    this.contactMsg2 = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur mollitia ducimus labore blanditiis cupiditate debitis ipsam eligendi, dolores quam, illum, officia nisi dolor culpa quae molestiae in est error et?';
    this.contactMsg3 = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur mollitia ducimus labore blanditiis cupiditate debitis ipsam eligendi, dolores quam, illum, officia nisi dolor culpa quae molestiae in est error et?';





    /* ****************** Contact *************************/
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


  //       /* ****************** Contact *************************/

  //       this.contentHeading = this.rec.contentHeading
  //       this.contactHeadingMsg = this.rec.contactHeadingMsg
  //       this.contactMsg1 = this.rec.contactMsg1
  //       this.contactMsg2 = this.rec.contactMsg2
  //       this.contactMsg3 = this.rec.contactMsg3


  //       /* ****************** Contact *************************/


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
