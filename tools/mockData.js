const users = [
  {
    id: 1,
    uname: 'sanu',
    email: 'sanukmr333@gmail.com',
    password: '12345',
    address: 'gaya',
    yoyoBalance: '3000',
    role: 'user',
    isLoggedIn: false,
  },
];
// {
//   id: 2,
//   uname: "sunny",
//   email: "sunnykmr333@gmail.com",
//   address: "gaya",
//   yoyoBalance: "1000",
//   role: "user"
// },

const giftCategoryType = [
  { id: 1, name: 'Ecommerce' },
  { id: 2, name: 'Entertainment' },
  { id: 3, name: 'Travel and hospitality' },
  { id: 4, name: 'Health and beauty' },
  { id: 5, name: 'food and beverages' },
];

const vendorType = [
  {
    id: 1,
    cardAmount: '200',
    vendorName: 'Amazon',
    cardImage:
      'https://5.imimg.com/data5/GB/QT/MY-6145389/amazon-gift-card-gift-voucher-500x500.jpg',
    cardDiscount: '5 %',
    giftCategory: 'Ecommerce',
  },
  {
    id: 2,
    cardAmount: '250',
    vendorName: 'Myntra',
    cardImage:
      'https://blog.woohoo.in/wp-content/uploads/2016/04/Myntra-e-gift-cards.jpg',
    cardDiscount: '5 %',
    giftCategory: 'Ecommerce',
  },
  {
    id: 3,
    cardAmount: '200',
    vendorName: 'BookmyShow',
    cardImage:
      'https://in.bmscdn.com/gv/gift_my_show_25412019034153_480x295.jpg',
    cardDiscount: '10 %',
    giftCategory: 'Entertainment',
  },
  {
    id: 4,
    cardAmount: '250',
    vendorName: 'Saavn',
    cardImage:
      'https://d1o7uku192uawx.cloudfront.net/mobile/media/cardimage/303_card_image.png',
    cardDiscount: '15 %',
    giftCategory: 'Entertainment',
  },
  {
    id: 5,
    cardAmount: '300',
    vendorName: 'MakeMytrip',
    cardImage: 'https://www.makemytrip.com/gift-cards/images/best-wishes.png',
    cardDiscount: '5 %',
    giftCategory: 'Travel and hospitality',
  },
  {
    id: 6,
    cardAmount: '200',
    vendorName: 'Tripadvisor',
    cardImage:
      'https://static.tacdn.com/img2/branding/rebrand/TA_brand_logo.png',
    cardDiscount: '5 %',
    giftCategory: 'Travel and hospitality',
  },
  {
    id: 7,
    cardAmount: '200',
    vendorName: 'Lakme Salon',
    cardImage:
      'https://d1o7uku192uawx.cloudfront.net/mobile/media/catalog/product/3/1/312x200px-lakme.png',
    cardDiscount: '15 %',
    giftCategory: 'Health and beauty',
  },
  {
    id: 8,
    cardAmount: '200',
    vendorName: 'VLCC',
    cardImage:
      'https://images-na.ssl-images-amazon.com/images/I/41zIwK2hYmL.jpg',
    cardDiscount: '10 %',
    giftCategory: 'Health and beauty',
  },
  {
    id: 9,
    cardAmount: '200',
    vendorName: 'KFC',
    cardImage:
      'https://marketingcdn.giftcardgranny.com/merchant-images/lg/kfc-gift-card.png',
    cardDiscount: '5 %',
    giftCategory: 'Food and beverages',
  },
  {
    id: 10,
    cardAmount: '200',
    vendorName: 'McDonald',
    cardImage:
      'https://i.pinimg.com/originals/bf/53/85/bf5385146080cf922ad13e2cc6b7a662.jpg',
    cardDiscount: '5 %',
    giftCategory: 'Food and beverages',
  },
];
const giftCard = [
  {
    id: 1,
    cardName: 'Grab this coupon',
    vendorName: 'Amazon',
    cardImage:
      'https://5.imimg.com/data5/GB/QT/MY-6145389/amazon-gift-card-gift-voucher-500x500.jpg',
    cardAmount: '200',
    cardDiscount: '5 %',
    category: 'Ecommerce',
    rating: 4,
    comments: 'worth money',
  },
  {
    id: 2,
    cardName: 'Grab this coupon',
    cardImage:
      'https://blog.woohoo.in/wp-content/uploads/2016/04/Myntra-e-gift-cards.jpg',
    vendorName: 'Myntra',
    cardAmount: '250',
    cardDiscount: '5 %',
    category: 'Ecommerce',
    rating: 4,
    comments: 'Affordable',
  },
  {
    id: 3,
    cardName: 'Grab this coupon',
    cardImage:
      'https://in.bmscdn.com/gv/gift_my_show_25412019034153_480x295.jpg',
    vendorName: 'BookMyShow',
    cardAmount: '200',
    cardDiscount: '10 %',
    category: 'Entertainment',
    rating: 4,
    comments: 'Good',
  },
  {
    id: 4,
    cardName: 'Grab this coupon',
    cardImage:
      'https://d1o7uku192uawx.cloudfront.net/mobile/media/cardimage/303_card_image.png',
    vendorName: 'Saavn',
    cardAmount: '250',
    cardDiscount: '15 %',
    category: 'Entertainment',
    rating: 4.8,
    comments: 'Good',
  },
  {
    id: 5,
    cardName: 'Grab this coupon',
    cardImage: 'https://www.makemytrip.com/gift-cards/images/best-wishes.png',
    vendorName: 'MakeMytrip',
    cardAmount: '300',
    cardDiscount: '5 %',
    category: 'Travel and hospitality',
    rating: 5,
    comments: 'Affordable',
  },
  {
    id: 6,
    cardName: 'Grab this coupon',
    cardImage:
      'https://static.tacdn.com/img2/branding/rebrand/TA_brand_logo.png',
    vendorName: 'tripadvisor',
    cardAmount: '200',
    cardDiscount: '5 %',
    category: 'Travel and hospitality',
    rating: 4,
    comments: 'Good',
  },
  {
    id: 7,
    cardName: 'Grab this coupon',
    cardImage:
      'https://d1o7uku192uawx.cloudfront.net/mobile/media/catalog/product/3/1/312x200px-lakme.png',
    vendorName: 'Lakme Salon',
    cardAmount: '200',
    cardDiscount: '15 %',
    category: 'Health and beauty',
    rating: 4,
    comments: 'Good',
  },
  {
    id: 8,
    cardName: 'Grab this coupon',
    cardImage:
      'https://images-na.ssl-images-amazon.com/images/I/41zIwK2hYmL.jpg',
    vendorName: 'VLCC',
    cardAmount: '200',
    cardDiscount: '10 %',
    category: 'Health and beauty',
    rating: 4.5,
    comments: 'Affordable GiftCard',
  },
  {
    id: 9,
    cardName: 'Grab this coupon',
    cardImage:
      'https://marketingcdn.giftcardgranny.com/merchant-images/lg/kfc-gift-card.png',
    vendorName: 'KFC',
    cardAmount: '200',
    cardDiscount: '10 %',
    category: 'Food and beverages',
    rating: 4.5,
    comments: 'Good',
  },
  {
    id: 10,
    cardName: 'Grab this coupon',
    cardImage:
      'https://i.pinimg.com/originals/bf/53/85/bf5385146080cf922ad13e2cc6b7a662.jpg',
    vendorName: 'McDonald',
    cardAmount: '200',
    cardDiscount: '5 %',
    category: 'Food and beverages',
    rating: 4,
    comments: 'Good',
  },
];

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  users,
  giftCard,
  giftCategoryType,
  vendorType,
};
