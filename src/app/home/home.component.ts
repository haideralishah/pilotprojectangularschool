import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  /* ****************** Header *************************/

  coverHeading: string;
  coverDesc: string;

  /* ****************** Header *************************/
  /* ****************** CONTENT *************************/
  contentHeading: string;
  contentTopic1: string;
  contentDesc1: string;
  contentPara1: string;
  contentSmallImage1: string;
  contentLargeImage1: string;

  /* ****************** CONTENT *************************/

  /* ****************** CONTENT 2 *************************/

  contentHeading2: string;
  contentDesc2: string;
  quality1: string;
  quality2: string;
  quality3: string;
  quality4: string;
  quality5: string;
  quality6: string;
  /* ****************** CONTENT 2 *************************/



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
    this.coverHeading = 'teaching';
    this.coverDesc = 'Matter of generations';

    /* ****************** Header *************************/

    /* ****************** CONTENT *************************/
    this.contentHeading = 'brief description about teaching';
    this.contentTopic1 = 'Aliquam a nunc non erat lobortis';
    this.contentDesc1 = 'Vestibulum nec consequat nisl. Aliquam vehicula egestas commodo.Pellentesque lorem magna, pulvinar sed lacinia et, venenatis in mi.'
    this.contentPara1 = 'Nullam sodales rutrum nisl, gravida porttitor lectus porta et. Duis purus arcu, semper at magna faucibus, elementum maximus ligula. Etiam imperdiet posuere odio gravida vehicula. Nulla consectetur massa eget tincidunt suscipit. Integer vitae ex eros. Cras ornare dignissim scelerisque.'
    this.contentSmallImage1 = 'images/3.jpg';
    this.contentLargeImage1 = 'images/2.jpg';

    /* ****************** CONTENT *************************/

    /* ****************** CONTENT 2 *************************/

    this.contentHeading2 = 'Duis at enim sit amet velit mattis'
    this.contentDesc2 = 'Aliquam a tellus nec leo commodo imperdiet sit amet sit amet lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.';
    this.quality1 = 'Haier Ali Shah Haider Ali Shah Hai';
    this.quality2 = 'Morbi eu velit eget libero pretium';
    this.quality3 = 'Morbi eu velit eget libero pretium';
    this.quality4 = 'Morbi eu velit eget libero pretium';
    this.quality5 = 'Morbi eu velit eget libero pretium';
    this.quality6 = 'Morbi eu velit eget libero pretium';
    /* ****************** CONTENT 2 *************************/

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

  //       /* ****************** CONTENT *************************/
  //       this.contentHeading = this.rec.contentHeading
  //       this.contentTopic1 = this.rec.contentTopic1
  //       this.contentDesc1 = this.rec.contentDesc1
  //       this.contentPara1 = this.rec.contentPara1
  //       this.contentSmallImage1 = this.rec.contentSmallImage1
  //       this.contentLargeImage1 = this.rec.contentLargeImage1

  //       /* ****************** CONTENT *************************/

  //       /* ****************** CONTENT 2 *************************/

  //       this.contentHeading2 = this.rec.contentHeading2
  //       this.contentDesc2 = this.rec.contentDesc2
  //       this.quality1 = this.rec.quality1
  //       this.quality2 = this.rec.quality2
  //       this.quality3 = this.rec.quality3
  //       this.quality4 = this.rec.quality4
  //       this.quality5 = this.rec.quality5
  //       this.quality6 = this.rec.quality6
  //       /* ****************** CONTENT 2 *************************/

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

