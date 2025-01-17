import { Component, HostListener } from '@angular/core';
import { HeaderComponent } from '../../../bt-layout/components/header/header.component';
import { FooterComponent } from '../../../bt-layout/components/footer/footer.component';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { IconsModule } from '@progress/kendo-angular-icons';
import { searchIcon,homeIcon,myspaceIcon,thumbUpOutlineIcon, chevronRightIcon,arrowUpIcon,chevronDownIcon } from '@progress/kendo-svg-icons';
import { RouterModule } from "@angular/router";
import { NgFor } from '@angular/common';
import { DTOBlog } from '../../shared/dto/DTOBlog.dto';
import { BlogApiService } from '../../shared/services/blog-api.service';
import { Ps_UtilObjectService } from '../../../../bt-lib/utilities/utility.object';
import { DTOCategory } from '../../shared/dto/DTOCategory.dto';
@Component({
  selector: 'app-home-global',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    InputsModule,
    DropDownsModule,
    ButtonsModule,
    IconsModule,
    RouterModule,NgFor],
  templateUrl: './home-global.component.html',
  styleUrl: './home-global.component.scss'
})
export class HomeGlobalComponent {
  icons = { searchIcon: searchIcon ,
    myspace:myspaceIcon,
    home:homeIcon,
    thumb: thumbUpOutlineIcon,
    right: chevronRightIcon,
    toTop:arrowUpIcon,
    icDown:chevronDownIcon
  };

  data = [{code:1,name:"Test"}]

  constructor(public blogAPIService: BlogApiService){}

  ngOnInit():void{
    this.GetAllBlog()
    this.GetListCategory();
  }


  // xử lý việc scroll sẽ hiện nút để người dùng scroll on top
  showScrollToTop = false;
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    const scrollPosition = event.target.scrollingElement.scrollTop;
    // console.log(scrollPosition)
    if (scrollPosition > 500) {
      this.showScrollToTop = true;
    } else {
      this.showScrollToTop = false;
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  getImg(item:DTOBlog):string{
    let linkServer = 'https://blogdev.somee.com'
    return linkServer+item.imageThumbnail
  }

  listBlog: DTOBlog[] = []
  listTrending: DTOBlog[] = []
  listFeatured: DTOBlog[] = []
  listPopular: DTOBlog[] = []
  defaultBlog = new DTOBlog();
  GetAllBlog() {
    // this.isLoading = true
    this.blogAPIService.GetAllBlog().subscribe((response: any) => {
      if(Ps_UtilObjectService.hasListValue(response)){
        this.listBlog = response
        this.defaultBlog = this.listBlog[15];
        // console.log(this.listBlog)
        this.listTrending = this.listBlog.filter(s => s.isTrending == true)
        this.listFeatured = this.listBlog.filter(s => s.isFeatured == true)
        this.listPopular = this.listBlog.filter(s => s.isPopular == true)
      }
      // this.isLoading = false
    }, (error: any) => {
      // this.isLoading = false
      console.error(error);
      alert(error.message + `:  ${error.error.message}` )
    });
  }


  listCategory: DTOCategory[] = []
  GetListCategory() {
    // this.isLoading = true
    this.blogAPIService.GetListCategory().subscribe((response: any) => {
      if(Ps_UtilObjectService.hasListValue(response)){
        this.listCategory = response
       
      }
      // this.isLoading = false
    }, (error: any) => {
      // this.isLoading = false
      console.error(error);
      alert(error.message + `:  ${error.error.message}` )
    });
  }
  
}
