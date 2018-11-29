
class Pages{
	constructor(){}

	get itemsAmount( ){

	}

	get itemsPerPage( ){

	}

	get pageOffset(){

	}

	url( pageId){

	}
	gen(
		itemsAmount,
		itemsPerPage,
		pageId,
		pageOffset
		){
		itemsAmount= Math.max( Number( itemsAmount)|| 0, 0);
		itemsAmount= Math.max( Number( itemsPerPage)|| 1, 1);
		pageId =Number(pageId) || 0;
		pageOffset = Math.max( Number(pageOffset)|| 0, 0);
		const pagesAmount = Math.ceil( itemsAmount/ itemsPerPage);
		const pageIdFirst = 0;
		const pageIdLast = Math.max( pageIdFirst, pagesAmount - 1);
		pageId = Math.min( pageIdLast, Math.max( pageIdFirst, pageId));
		const pageIdPrev = Math.max( pageId -1, pageIdFirst);
		const pageIdNext = Math.min( pageId + 1, pageIdLast);
		const page__hidden = ( _ ) => pageIdFirst<= _ && _ <= pageIdLast ? ''; "page__hidden";
		const page__link = ( _ ) => _
		const pages = [...Array( pageOffset +1+ pageOffset)]
		.map( (_, index ) => index)
		.map( _ => ( {
			index: _,
			id: _ - pageOffset + pageId+ 1,
			className: (_ == pageId ? 'page__link page__current ' : 'page__link ') + page__hidden( _ ),
			href: this.url(_ + 1),
		} ) )
		.concat( {
			id: pageIdFirst + 1,
			className: 'page__link page__first ' + (pageId > pageIdFirst ? 'page__hidden': ''),
			href: this.url( pageIdFirst + 1),
		})
		.concat( {
			id: pageIdPrev + 1,
			className: 'page__link page__prev '  + (pageId > pageIdFirst ? 'page__hidden': ''),
			href: this.url( pageIdPrev + 1),
		})
		.concat( {
			id: pageIdNext + 1,
			className: 'page__link page__next '  + (pageId > pageIdLast ? 'page__hidden': ''),
			href: this.url( pageIdNext + 1),
		})
		.concat( {
			id: pageIdLast + 1,
			className: 'page__link page__last '  + (pageId > pageIdLast ? 'page__hidden': ''),
			href: this.url( pageIdLast + 1),
		})
		.sort( (a, b ) => b.id < a.id );

		return{ 
			firstId: pageIdFirst,
			lastId: pageIdLast,
			pages: pages,
		}
	}
}

// const a = {
// 	xx: 123,
// 	y: 645,

// };
// const b = {
// 	v: 1234223,
// 	y: 64335,

// };
// const c = {
// 	qwr: 12423,


// };



// Object.assign( c, a, b)




const section = document.getElementById("sectionGallery");

const size = 9;

// const subGalleryImg =[];

function addNavElement() {

	for ( let i = 1; i < Math.ceil(galleryImg.length/size)+1; i++) {
			const paginationButton = document.createElement('a');
			paginationButton.setAttribute('class', 'paginatio_button');
			paginationButton.setAttribute('id', 'pag_but_'+i);
			paginationButton.innerHTML = i;
			section.appendChild(paginationButton);

			const paginationSection = document.createElement('div');
			paginationSection.setAttribute('class', 'pagination_section');
			paginationSection.setAttribute('id', 'pag_sec_' + i);
			section.appendChild(paginationSection);


		
	}
}



function addElement() {
	// create a nev div element
	for(const element of galleryImg){

		const divGalleryWraper = document.createElement("div");
		divGalleryWraper.setAttribute('class', 'gallery-wraper');

		const divGalleryImg = document.createElement("div");
		divGalleryImg.setAttribute('class', 'gallery-image');
		divGalleryImg.setAttribute('id', element.id);
		divGalleryWraper.appendChild(divGalleryImg);
		divGalleryImg.style.backgroundImage = 'url(' +element.url+ ')';

		section.appendChild(divGalleryWraper);
			}
};






// function addElement() {
// 	// create a nev div element
// 	for(const element of galleryImg){

// 		const divGalleryWraper = document.createElement("div");
// 		divGalleryWraper.setAttribute('class', 'gallery-wraper');

// 		const divGalleryImg = document.createElement("div");
// 		divGalleryImg.setAttribute('class', 'gallery-image');
// 		divGalleryImg.setAttribute('id', element.id);
// 		divGalleryWraper.appendChild(divGalleryImg);
// 		divGalleryImg.style.backgroundImage = 'url(' +element.url+ ')';

// 		section.appendChild(divGalleryWraper);
// 			}
// };


// const subGalleryImg =[];

// function addNavElement() {

// 	for ( let i = 1; i < Math.ceil(galleryImg.length/size)+1; i++) {
// 			const paginationButton = document.createElement('a');
// 			paginationButton.setAttribute('class', 'paginatio_button');
// 			paginationButton.setAttribute('id', 'pag_but_'+i);
// 			paginationButton.innerHTML = i;
// 			section.appendChild(paginationButton);

// 			const paginationSection = document.createElement('div');
// 			paginationSection.setAttribute('class', 'pagination_section');
// 			paginationSection.setAttribute('id', 'pag_sec_' + i);
// 			section.appendChild(paginationSection);


		
// 	}
// }



// function addElement() {

// 		const divGalleryWraper = document.createElement("div");
// 		divGalleryWraper.setAttribute('class', 'gallery-wraper');

// 		const divGalleryImg = document.createElement("div");
// 		divGalleryImg.setAttribute('class', 'gallery-image');
// 		divGalleryImg.setAttribute('id', element.id);
// 		divGalleryWraper.appendChild(divGalleryImg);
// 		divGalleryImg.style.backgroundImage = 'url(' +element.url+ ')';

// 		paginationSection.appendChild(divGalleryWraper);
// 			}
// ;

// function pagination() {
// 	const pageLimit = 9;
// 	let count = 0;
// 	let id = 1;


// 	for ( const element of galleryImg){
// 			let wrap = 'w'+id;
// 		if (count === 0){
// 			const paginationButton = document.createElement('a');
// 			paginationButton.setAttribute('class', 'paginatio_button');
// 			paginationButton.setAttribute('id', 'pag_but_'+id);
// 			paginationButton.innerHTML = id;
// 			section.appendChild(paginationButton);

// 			const paginationSection = document.createElement('div');
// 			paginationSection.setAttribute('class', 'pagination_section');
// 			paginationSection.setAttribute('id', 'pag_sec_' + id);

// 			const divGalleryWraper = document.createElement("div");
// 			divGalleryWraper.setAttribute('class', 'gallery-wraper');
// 			divGalleryWraper.setAttribute('id', wrap);

// 			const divGalleryImg = document.createElement("div");
// 			divGalleryImg.setAttribute('class', 'gallery-image');
// 			divGalleryImg.setAttribute('id', element.id);
// 			divGalleryWraper.appendChild(divGalleryImg);
// 			divGalleryImg.style.backgroundImage = 'url(' +element.url+ ')';

// 			paginationSection.appendChild(divGalleryWraper);

// 			section.appendChild(paginationSection);


// 			count++;
// 			id++;
// 		} 
// 		if (count < 9) {
// 			const inner = getElementById(wrap);
// 			const divGalleryImg = document.createElement("div");
// 			divGalleryImg.setAttribute('class', 'gallery-image');
// 			divGalleryImg.setAttribute('id', element.id);
// 			inner.appendChild(divGalleryImg);
// 			divGalleryImg.style.backgroundImage = 'url(' +element.url+ ')';

// 			count++;
// 		}
// 		else {
// 			count = 0;
// 		}
// 	}
// }

// function addSection(id, element, pageLimit) {
// 	if(count === 0 || count === 9) {
// 		id++;
// 		//add button with event listener, add section with id and add element to section
// 	}
// 	count = (!count) ? 1 : (count === 9) ? 0;
// }