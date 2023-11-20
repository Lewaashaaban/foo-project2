// products-list.component.ts
import { Component, OnInit } from '@angular/core';
import { AddServiceService } from 'src/app/Service/AddService/add-service.service';
import { DataService } from 'src/app/Service/data-service/data.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
  providers: [
    // AddServiceService
  ]
})
export class ProductsListComponent implements OnInit {  

  constructor(
    private dataService: DataService,
    public popUpService: AddServiceService,
    private sanitizer: DomSanitizer
  ) { }
  //popup
  openPopup() {
    this.popUpService.togglePopUp();
  }

  //get data
  ngOnInit(): void {
    this.getProductsData();
  }

  products: any;

  getProductsData() {
    console.log("Products Fetched");
    this.dataService.getData().subscribe((res: any) => {
      console.log(res);
      if (Array.isArray(res)) {
        this.products = res.map((product: any) => ({
          ...product,
          image: this.sanitizeImage(product.image)
        }));
      } else {
        console.error('Error: The fetched data is not an array.');
      }
    });
  }

  deleteData(id: number) {
    console.log(id);
    this.dataService.deleteData(id).subscribe(res => {
      this.getProductsData();
    });
  }

  sanitizeImage(image: string): SafeUrl {
    if (image && image.startsWith('data:image')) {
      console.log("base 64")
      console.log( "image: ", this.sanitizer.bypassSecurityTrustResourceUrl(image));
     return this.sanitizer.bypassSecurityTrustResourceUrl(image);
    } else {
      console.log("not base 64")
      return image;
    }
  }
}
