const datalink = {
    links: ['Home', 'About', ' Property', 'Agents', 'Pages', 'Contact']
}
let dropMenu = `<ul class="dropdown-menu">
<li>
<a  href="#">Home Page 1</a>
<div class="menu-line"></div>
</li>
<li>
<a  href="#">Home Page 2</a>
<div class="menu-line"></div>
</li>
<li>
<a href="#">Home Page 3</a>
<div class="menu-line"></div>
</li>
<li>
<a href="#">Home Page 4</a>
<div class="menu-line"></div>

</li>
<li>
<a  href="#">Home Page 5</a>


</li>
</ul>`
let dropMenu2 = `<ul class="dropdown-menu">
<li>
<a  href="#">Properties Map Grid</a>
<div class="menu-line"></div>

</li>
<li>
<a  href="#">Properties Map List</a>
<div class="menu-line"></div>
</li>
<li>
<a  href="#">Properties Grid</a>
<div class="menu-line"></div>
</li>
<li>
<a  href="#">Properties List</a>
<div class="menu-line"></div>
</li><li>
<a  href="#">Properties Full Width</a>
<div class="menu-line"></div>
</li><li>
<a  href="#">Single Property 1</a>
<div class="menu-line"></div>
</li><li>
<a  href="#">Single Property 2</a>
<div class="menu-line"></div>
</li>
<li>
<a  href="#">Single Property 3</a>
<div class="menu-line"></div>
</li>
</ul>`
let dropMenu3 = `<ul class="dropdown-menu">
<li>
<a  href="#">Agent List Page</a>
<div class="menu-line"></div>
</li>
<li>
<a  href="#">Agencies List Page</a>
<div class="menu-line"></div>
</li>
<li>
<a  href="#">Single Agent Page</a>
<div class="menu-line"></div>
</li>
<li>
<a  href="#">Single Agency Page</a>
<div class="menu-line"></div>
</li>
</ul>`
let dropMenu4 = `<ul class="dropdown-menu">
<div class='container'>
<div class="list1">
<h1>Pages</h1>
<ul class="menu-list1">
<li class="link">
<i class="fa-solid fa-chart-pie"></i>
<a href="#">Blog 1</a>
</li>
<li class="link">
<i class="fa-solid fa-chart-pie"></i>
<a href="#">Blog 2</a>
</li>
<li class="link">
<i class="fa-solid fa-chart-pie"></i>
<a href="#">Blog Details Page</a>
</li>
</ul>
</div>
<div class="list2">
<h1>Pages</h1>
<ul class="menu-list2">
<li>
<i class="fa-solid fa-user"></i>
<a href="#">Agent List Page</a>
</li>
<li>
<i class="fa-solid fa-user"></i>
<a href="#">Agencies List</a>
</li>
<li>
<i class="fa-solid fa-user"></i>
<a href="#">Agent Reviews Page</a>
</li>
</ul>
</div>
<div class="list3">
<h1>Pages</h1>
<ul class="menu-list3">
<li>
<i class="far fa-money-bill-alt"></i>
<a href="#">Agent Reviews Page</a>
</li>
<li>
<i class="fa-solid fa-camera"></i>
<a href="#">About Page </a>
</li>
<li>
<i class="far fa-address-card"></i>
<a href="#">Agent List Page</a>
</li>
</ul>
</div>
<div class="list4">
<h1>Pages</h1>
<ul class="menu-list4">
<li>
<i class="fas fa-chalkboard-teacher"></i>
<a href="#">Pricing Plan</a>
</li>
<li>
<i class="fas fa-exclamation-triangle"></i>
<a href="#">Error Page</a>
</li>
<li>
<i class="fas fa-spinner"></i>
<a href="#">Contact</a>
</li>
</ul>
</div>
</div>
</ul>`

const clientsImages = [
    { src: "https://radiustheme.com/demo/html/homlisti/img/brand/brand1.svg" },
    { src: "https://radiustheme.com/demo/html/homlisti/img/brand/brand2.svg" },
    { src: "https://radiustheme.com/demo/html/homlisti/img/brand/brand3.svg" },
    { src: "https://radiustheme.com/demo/html/homlisti/img/brand/brand4.svg" },
    { src: "https://radiustheme.com/demo/html/homlisti/img/brand/brand5.svg" },
    { src: 'https://radiustheme.com/demo/html/homlisti/img/brand/brand6.svg' }
]

const PropertyCards = [
    {
        image: 'assets/img/blog4.jpg',
        title: 'Family House For Sell',
        body: '<i class="bi bi-geo-alt-fill"></i> Downey, California',
        footerbed: '<i class="fa-solid fa-bed"></i> Beds: 03',
        footerbath: '<i class="fa-solid fa-shower"></i> Baths: 02',
        bagbody: "For Sell",
        cost: "$15,000<span>/mo</span>",
        typeboxtext: "Apartment"
    },
    {
        image: 'assets/img/blog5.jpg',
        title: 'Countryside Modern Lake View',
        body: '<i class="bi bi-geo-alt-fill"></i> Downey, California',
        footerbed: '<i class="fa-solid fa-bed"></i> Beds: 03',
        footerbath: '<i class="fa-solid fa-shower"></i> Baths: 02',
        bagbody: "For Rent",
        cost: "$12,000<span>/mo</span>",
        typeboxtext: "Villa"
    },
    {
        image: 'assets/img/blog6.jpg',
        title: 'Gorgoeus Apartment Building',
        body: '<i class="bi bi-geo-alt-fill"></i> Downey, California',
        footerbed: '<i class="fa-solid fa-bed"></i> Beds: 03',
        footerbath: '<i class="fa-solid fa-shower"></i> Baths: 02',
        bagbody: "For Sell",
        cost: "$18,000<span>/mo</span>",
        typeboxtext: "Office"
    },
    {
        image: 'assets/img/blog7.jpg',
        title: 'Countryside Modern Lake View',
        body: '<i class="bi bi-geo-alt-fill"></i> Downey, California',
        footerbed: '<i class="fa-solid fa-bed"></i> Beds: 03',
        footerbath: '<i class="fa-solid fa-shower"></i> Baths: 02',
        bagbody: "For Rent",
        cost: "$19,000<span>/mo</span>",
        typeboxtext: "Commercial"
    },
    {
        image: 'assets/img/blog8.jpg',
        title: 'Family House For Sell',
        body: '<i class="bi bi-geo-alt-fill"></i> Downey, California',
        footerbed: '<i class="fa-solid fa-bed"></i> Beds: 03',
        footerbath: '<i class="fa-solid fa-shower"></i> Baths: 02',
        bagbody: "For Sell",
        cost: "$30,000<span>/mo</span>",
        typeboxtext: "Villa"
    },
    {
        image: 'assets/img/blog9.jpg',
        title: 'Countryside Modern Lake View ',
        body: '<i class="bi bi-geo-alt-fill"></i> Downey, California',
        footerbed: '<i class="fa-solid fa-bed"></i> Beds: 03',
        footerbath: '<i class="fa-solid fa-shower"></i> Baths: 02',
        bagbody: "For Rent",
        cost: "$25,000<span>/mo</span>",
        typeboxtext: "Office"
    }
]

const areaCards=[
    {
        image:'assets/img/location1.jpg',
        title:'02 Properties',
        link:'San Francisco'
    },
    {
        image:'assets/img/location2.jpg',
        title:'02 Properties',
        link:'Los Angeles'
    },
    {
        image:'assets/img/location3.jpg',
        title:'02 Properties',
        link:'Melbourne'
    },
    {
        image:'assets/img/location4.jpg',
        title:'02 Properties',
        link:'Sydney'
    }
]

const agentCards=[
    {
        image:'assets/img/team17.png',
        button:'08 Listings',
        title:'Anden Willium',
        text:'Sunshine',
        
    },
    {
        image:'assets/img/team18.png',
        button:'07 Listings',
        title:'Polly Matzinger',
        text:'Sweet Home',

    },
    {
        image:'assets/img/team19.png',
        button:'11 Listings',
        title:'Patty Watson',
        text:'Eco Builders',
    },
    {
        image:'assets/img/team20.png',
        button:'06 Listings',
        title:'Sarah Boysen',
        text:'Mark Street',
    }
]
const sliderCard=[
    {
       src:'assets/img/testimonial3.jpg'
    },
    {
        src:'assets/img/testimonial1.jpg'
    },
    {
        src:'assets/img/testimonial4.jpg'
    }
]

const blogCards=[
    {
        image:'assets/img/blog1.jpg',
        title1:'Apartment, Room',
        title2:'5 min',
        text:'How To Do Market Research For to Sell Faster'
    },
    {
        image:'assets/img/blog2.jpg',
        title1:'Building, Room',
        title2:'4 min',
        text:'Develop Relationships With Human Resource'
    },
    {
        image:'assets/img/blog3.jpg',
        title1:'Entertainment, Room',
        title2:'3 min',
        text:'Unique Real Estate Marketing: Have A Tent Business Card'
    }
]
export { datalink, dropMenu, dropMenu2, dropMenu3, dropMenu4, clientsImages, PropertyCards,areaCards,agentCards,sliderCard,blogCards }