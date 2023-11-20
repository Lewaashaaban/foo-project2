import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { AddServiceService } from 'src/app/Service/AddService/add-service.service';
import { DataService } from 'src/app/Service/data-service/data.service';
@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.css']
})
export class AddProductFormComponent implements OnInit
{
  constructor(
    private dataService: DataService,
    private popUpService: AddServiceService
  ) { }

  //PopUp
  showPopUp: boolean = false;

  ngOnInit(): void {
    this.popUpService.showPopUp$.subscribe((showPopUp: boolean) => {
      this.showPopUp = showPopUp;
    });
  }

   closePopUp() {
    this.popUpService.togglePopUp();
   }
  
  //add products
  product: Product = new Product('', 0, 0, '');

  image: string = ''; // Declare the image property

  onSubmit() {
    // Convert image to base64 string and log to the console
    const fileInput: any = document.getElementById('image');
    const file = fileInput.files[0];
    this.getBase64(file).then((base64String: string) => {
      this.product.image = this.image;
      console.log('product details:', this.product);
    });
  }

  onFileChange(event: any) {
    // Handle file change if needed
  }

  // Helper function to convert file to base64
  getBase64(file: any): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  }

  insertData() {
    console.log("submitted");
    console.log(this.product);
    this.dataService.insertData(this.product).subscribe(res => {
      console.log(res);
    })
  }
  
}
