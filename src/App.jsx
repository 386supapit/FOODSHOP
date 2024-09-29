import React, { useState } from 'react';
import CategoryMenu from './components/CategoryMenu.jsx';
import ProductList from './components/ProductList.jsx';
import ShoppingCart from './components/ShoppingCart.jsx';

const shippingCost = 100;

function App() {
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('ทั้งหมด');
  const [coupon, setCoupon] = useState('');
  const [discount, setDiscount] = useState(0);

  const products = [
    { id: 1, name: 'ข้าวผัดสับปะรด', price: 200, imageSrc: 'https://f.ptcdn.info/653/064/000/ptlxrdvxcsyOMvUtA6G-o.jpg', category: 'คาว' },
    { id: 2, name: 'แกงเขียวหวาน', price: 150, imageSrc: 'https://img.wongnai.com/p/1920x0/2017/08/04/8dbb52be94ca4cf5bfe0eb2663a995a6.jpg', category: 'คาว' },
    { id: 3, name: 'ส้มตำ', price: 110, imageSrc: 'https://images.deliveryhero.io/image/foodpanda/recipes/green-papaya-salad.jpg', category: 'คาว' },
    { id: 4, name: 'พะโล้', price: 120, imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSZw0fCsfeOadBqjTUr7mkxJZdfhM0a09qog&s', category: 'คาว' },
    { id: 5, name: 'ข้าวแช่ชาววัง', price: 250, imageSrc: 'https://www.dailynews.co.th/wp-content/uploads/2023/04/Jim.jpg', category: 'คาว' },
    { id: 6, name: 'ผัดไทย', price: 190, imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOohsgBNX9WIRkWALwa3sjQ0ili2PyLOFy_Q&s', category: 'คาว' },
    { id: 7, name: 'ต้มยำกุ้ง', price: 190, imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA508xhEZzDZ0lDSGE4e_YNIA62vNSwiLmxQ&s', category: 'คาว' },
    { id: 8, name: 'กะเพราหมูสับไข่ดาว', price: 130, imageSrc: 'https://s.isanook.com/ca/0/ud/280/1402788/357692.jpg?ip/crop/w670h402/q80/jpg', category: 'คาว' },
    { id: 9, name: 'ขนมชั้น', price: 100, imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnhRs2QPWaZmz-fhjOOwKl47_BNRmSKt9krQ&s', category: 'หวาน' },
    { id: 10, name: 'บัวลอยน้ำขิง', price: 120, imageSrc: 'https://www.rama.mahidol.ac.th/atrama/sites/default/files/public/img/column/Eating5101.jpg', category: 'หวาน' },
    { id: 11, name: 'เมี่ยงคำโบราณ', price: 190, imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTxYRposK6VAiOgNmx_CHL5CgQxcrcBfKdJA&s', category: 'หวาน' },
    { id: 12, name: 'ขนมครก', price: 100, imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXfIw6WtkjM5JbluGpwRHQSye5M4cGxNhP9w&s', category: 'หวาน' },
    { id: 13, name: 'สาคูไส้หมู', price: 110, imageSrc: 'https://patternpack.org/wp-content/uploads/2021/11/2-3.jpg', category: 'หวาน' },
    { id: 14, name: 'ข้าวเหนียวมะม่วง', price: 160, imageSrc: 'https://www.roojai.com/wp-content/uploads/2022/06/mango-sticky-rice-eating-tips-1.jpg', category: 'หวาน' },
    { id: 15, name: 'ข้าวเหนียวทุเรียน', price: 200, imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuq35m-VnESFhcRwK_XYrD5jMlInU-U_Tm62F-0U9XR4UF-1N0vVnf3TueB7Rku2YuxEY&usqp=CAU', category: 'หวาน' },
  ];

  const filteredProducts = selectedCategory === 'ทั้งหมด' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const addToCart = (product) => {
    setCart((prev) => {
      const existingProduct = prev.find(item => item.id === product.id);
      if (existingProduct) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) {
      removeFromCart(id);
    } else {
      setCart((prev) => 
        prev.map(item => 
          item.id === id ? { ...item, quantity } : item
        )
      );
    }
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalWithShipping = total > 0 ? total + shippingCost : 0;

  const applyCoupon = () => {
    if (coupon === 'ร้านอาหารอร๊อยอร่อย') {
      setDiscount(10); 
      alert('คูปองใช้ได้');
    } else {
      alert('คูปองไม่ถูกต้อง');
    }
  };

  return (
    <div className="flex">
      <CategoryMenu selectCategory={setSelectedCategory} />
      <div className="w-3/4 mx-auto p-6  text-center">
        <h1 className="text-3xl font-bold mb-4">ร้านอาหารอร๊อยอร่อย</h1>
        <ProductList products={filteredProducts} addToCart={addToCart} />
      </div>
      <div className="w-1/4 p-6">
        <ShoppingCart 
          cartItems={cart} 
          removeFromCart={removeFromCart} 
          updateQuantity={updateQuantity}
          total={totalWithShipping}
          shippingCost={shippingCost}
          discount={discount}
          applyCoupon={applyCoupon}
          coupon={coupon}
          setCoupon={setCoupon}
        />
      </div>
    </div>
  );
}

export default App;