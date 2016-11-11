import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {



  /* ****************** Header *************************/

  coverHeading: string;
  coverDesc: string;

  /* ****************** Header *************************/


  /* ****************** Content *************************/
  contentMainHeading: string;

  contentImg1: string;
  contentImg2: string;
  contentImg3: string;
  contentImg4: string;
  contentImg5: string;
  contentImg6: string;
  contentImg7: string;
  contentImg8: string;
  contentImg9: string;



  /* ****************** Content *************************/

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
    this.coverHeading = 'portfolio';
    this.coverDesc = 'Matter of generations';

    /* ****************** Header *************************/


    /* ****************** Content *************************/
    this.contentMainHeading = 'Latest portfolio grids';

    this.contentImg1 = 'images/6.jpg';
    this.contentImg2 = 'images/1.jpg';
    this.contentImg3 = 'images/7.jpg';
    this.contentImg4 = 'images/8.jpg';
    this.contentImg5 = 'images/9.jpg';
    this.contentImg6 = 'images/10.jpg';
    this.contentImg7 = 'images/11.jpg';
    this.contentImg8 = 'images/12.jpg';
    this.contentImg9 = 'images/13.jpg';



    /* ****************** Content *************************/


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
  //       /* ****************** Content *************************/
  //       this.contentMainHeading = 'Latest portfolio grids';

  //       this.contentImg1 = this.rec.contentImg1
  //       this.contentImg2 = this.rec.contentImg2
  //       this.contentImg3 = this.rec.contentImg3
  //       this.contentImg4 = this.rec.contentImg4
  //       this.contentImg5 = this.rec.contentImg5
  //       this.contentImg6 = this.rec.contentImg6
  //       this.contentImg7 = this.rec.contentImg7
  //       this.contentImg8 = this.rec.contentImg8
  //       this.contentImg9 = this.rec.contentImg9

  //       /* ****************** Content *************************/


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
