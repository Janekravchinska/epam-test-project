
window.onload = addElement;


const galleryImg = [
	{
	    "imgId": 1,
	    "id": "image-1",
	    "url": "images/gall-1.jpg",
	    "alt": "Some food on the plate"
  	},
  	{
	    "imgId": 2,
	    "id": "image-2",
	    "url": "images/gall-2.jpg",
	    "alt": "Some food on the plate"
  	},
  	{
	    "imgId": 3,
	    "id": "image-3",
	    "url": "images/gall-3.jpg",
	    "alt": "Some food on the plate"
  	},
  	{
	    "imgId": 4,
	    "id": "image-4",
	    "url": "images/gall-4.jpg",
	    "alt": "Some food on the plate"
  	},
  	{
	    "imgId": 5,
	    "id": "image-5",
	    "url": "images/gall-5.jpg",
	    "alt": "Some food on the plate"
  	},
  	{
	    "imgId": 6,
	    "id": "image-6",
	    "url": "images/gall-6.jpg",
	    "alt": "Some food on the plate"
  	},
  	{
	    "imgId": 7,
	    "id": "image-7",
	    "url": "images/gall-7.jpg",
	    "alt": "Some food on the plate"
  	},
  	{
	    "imgId": 8,
	    "id": "image-8",
	    "url": "images/gall-8.jpg",
	    "alt": "Some food on the plate"
  	},
  	{
	    "imgId": 9,
	    "id": "image-9",
	    "url": "images/gall-9.jpg",
	    "alt": "Some food on the plate"
  	},
  	{
	    "imgId": 10,
	    "id": "image-10",
	    "url": "images/gall-10.jpg",
	    "alt": "Some food on the plate"
  	},
  	{
	    "imgId": 11,
	    "id": "image-11",
	    "url": "images/gall-11.jpg",
	    "alt": "Some food on the plate"
  	},
  	{
	    "imgId": 12,
	    "id": "image-12",
	    "url": "images/gall-12.jpg",
	    "alt": "Some food on the plate"
  	},
  	{
	    "imgId": 13,
	    "id": "image-13",
	    "url": "images/gall-13.jpg",
	    "alt": "Some food on the plate"
  	},
  	{
	    "imgId": 14,
	    "id": "image-14",
	    "url": "images/gall-14.jpg",
	    "alt": "Some food on the plate"
  	},
  	{
	    "imgId": 15,
	    "id": "image-15",
	    "url": "images/gall-15.jpg",
	    "alt": "Some food on the plate"
  	},
  	{
	    "imgId": 16,
	    "id": "image-16",
	    "url": "images/gall-16.jpg",
	    "alt": "Some food on the plate"
  	},
  	{
	    "imgId": 17,
	    "id": "image-17",
	    "url": "images/gall-17.jpg",
	    "alt": "Some food on the plate"
  	},
  	{
	    "imgId": 18,
	    "id": "image-18",
	    "url": "images/gall-18.jpg",
	    "alt": "Some food on the plate"
  	},
  	{
	    "imgId": 19,
	    "id": "image-19",
	    "url": "images/gall-19.jpg",
	    "alt": "Some food on the plate"
  	},
  	{
	    "imgId": 20,
	    "id": "image-20",
	    "url": "images/gall-20.jpg",
	    "alt": "Some food on the plate"
  	},
  	{
	    "imgId": 21,
	    "id": "image-21",
	    "url": "images/gall-21.jpg",
	    "alt": "Some food on the plate"
  	},
  	{
	    "imgId": 22,
	    "id": "image-22",
	    "url": "images/gall-22.jpg",
	    "alt": "Some food on the plate"
  	},
  	{
	    "imgId": 23,
	    "id": "image-23",
	    "url": "images/gall-23.jpg",
	    "alt": "Some food on the plate"
  	},
  	{
	    "imgId": 24,
	    "id": "image-24",
	    "url": "images/gall-24.jpg",
	    "alt": "Some food on the plate"
  	},
  	{
	    "imgId": 25,
	    "id": "image-25",
	    "url": "images/gall-25.jpg",
	    "alt": "Some food on the plate"
  	},
  	{
	    "imgId": 26,
	    "id": "image-26",
	    "url": "images/gall-26.jpg",
	    "alt": "Some food on the plate"
  	}

];


const section = document.getElementById("sectionGallery");

function addElement() {
	// create a nev div element
	for(const element of galleryImg){

	const divGalleryImg = document.createElement("div");
	divGalleryImg.setAttribute('class', 'gallery-image');
	divGalleryImg.setAttribute('id', element.id);
	section.appendChild(divGalleryImg);
	divGalleryImg.style.backgroundImage = 'url(' +element.url+ ')';
		}

}