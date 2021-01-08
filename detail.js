const _list_catelogy = [{
        id: 1,
        name: "name 1",
        img_source: "",
        img_alt: " asd 2weqwe1",
        detail_desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam deleniti temporibus assumenda aspernatur maiores modi dolor similique illo numquam et aliquid amet quibusdam, placeat cum facere autem exercitationem magni perferendis.",
        detail_cost: 1,
        detail_color: "blabla...",
    },
    {
        id: 2,
        name: "name 2",
        img_source: "",
        img_alt: "nasdfasd we1",
        detail_desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam deleniti temporibus assumenda aspernatur maiores modi dolor similique illo numquam et aliquid amet quibusdam, placeat cum facere autem exercitationem magni perferendis.",
        detail_cost: 1123,
        detail_color: "blabla...",
    },
    {
        id: 3,
        name: "name 1123",
        img_source: "",
        img_alt: "nasdqwe 42weqwe1",
        detail_desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam deleniti temporibus assumenda aspernatur maiores modi dolor similique illo numquam et aliquid amet quibusdam, placeat cum facere autem exercitationem magni perferendis.",
        detail_cost: 4121,
        detail_color: "blabla...",
    },
    {
        id: 4,
        name: "name 1sdfsdf32weqwe1",
        img_source: "",
        img_alt: "123asdsad",
        detail_desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam deleniti temporibus assumenda aspernatur maiores modi dolor similique illo numquam et aliquid amet quibusdam, placeat cum facere autem exercitationem magni perferendis.",
        detail_cost: 410023,
        detail_color: "blabla...",
    }, {
        id: 5,
        name: "namsdfsdfe 132weqwe1",
        img_source: "",
        img_alt: "nasdasdasd   fwer322342weqwe1",
        detail_desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam deleniti temporibus assumenda aspernatur maiores modi dolor similique illo numquam et aliquid amet quibusdam, placeat cum facere autem exercitationem magni perferendis.",
        detail_cost: 411123,
        detail_color: "blabla...",
    }, {
        id: 6,
        name: "nsdfasdfe sdf132weqwe1",
        img_source: "",
        img_alt: "nas123342weqwe1",
        detail_desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam deleniti temporibus assumenda aspernatur maiores modi dolor similique illo numquam et aliquid amet quibusdam, placeat cum facere autem exercitationem magni perferendis.",
        detail_cost: 41663,
        detail_color: "blabla...",
    }, {
        id: 7,
        name: "namsfsdfsdf sfqwe1",
        img_source: "",
        img_alt: "nasdfweadasdr322342weqwe1",
        detail_desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam deleniti temporibus assumenda aspernatur maiores modi dolor similique illo numquam et aliquid amet quibusdam, placeat cum facere autem exercitationem magni perferendis.",
        detail_cost: 4123123,
        detail_color: "blabla...",
    }, {
        id: 8,
        name: "nasdfwer322342weqwe1",
        img_source: "",
        img_alt: "nasdfwer322342weqwe1",
        detail_desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam deleniti temporibus assumenda aspernatur maiores modi dolor similique illo numquam et aliquid amet quibusdam, placeat cum facere autem exercitationem magni perferendis.",
        detail_cost: 433123,
        detail_color: "blabla...",
    },

];

const _js_fetch = $('.js_show_detail_product');
const _start = '<div class="product-box"><a href="./detail.html?cate_id='; //link detail
const _close_1 = '">';
const _figure = '<figure><img src="'; //link source
const _figure_middle = '" alt="'; //alt
const _close_2 = '">';
const _figcaption = '<figcaption>'; //name
const _close_3 = '</figcaption>';
const _end = '</figure></a></div>';


var pathname = window.location.href;
const _product_id = pathname.split('cate_id=')[1];
console.log(_product_id);

$.each(_list_catelogy, function(ind, val) {
    if(val.id == _product_id){
        let _f = _start + val.id +
        _close_1 +
        _figure + val.img_source +
        _figure_middle +val.img_alt +
        _close_2 +
        _figcaption +  val.name +
        _close_3 +
        _end;

    _js_fetch.append(_f);
    }

    
})

