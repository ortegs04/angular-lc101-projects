import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Photo/Image Section Title Here';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi0AJ248kWRB9aUVQOJ5bEzr3Bgqfrtn3xbw&usqp=CAU';
  image3 = 'https://www.meme-arsenal.com/memes/46af4bad3574b521c529676373030172.jpg';

  constructor() { }

  ngOnInit() {
  }

}