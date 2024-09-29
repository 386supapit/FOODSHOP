import React from 'react';

export default function ShoppingCart({ 
  cartItems, 
  removeFromCart, 
  updateQuantity, 
  total, 
  shippingCost, 
  discount, 
  applyCoupon, 
  coupon, 
  setCoupon 
}) {
  const totalAfterDiscount = total > discount ? total - discount : 0; // ป้องกันไม่ให้ราคารวมเป็นลบ

  return (
    <div className="border rounded-lg p-4 bg-gray-50 shadow-lg">
      <h2 className="text-xl font-bold">ตะกร้าสินค้า</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">ไม่มีสินค้าในตะกร้า</p>
      ) : (
        <ul className="space-y-4">
          {cartItems.map(item => (
            <li key={item.id} className="flex justify-between items-center py-2 border-b">
              <div className="flex-1">
                <span className="block text-gray-700">{item.name} (฿{item.price})</span>
                <span className="text-gray-500">จำนวน: {item.quantity}</span>
              </div>
              <div className="flex items-center">
                <select
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                  className="border rounded-md mr-2"
                >
                  {[...Array(10).keys()].map(num => (
                    <option key={num + 1} value={num + 1}>{num + 1}</option>
                  ))}
                </select>
                <button onClick={() => removeFromCart(item.id)} className="text-red-500">
                  ลบ
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-4">
        <h3 className="font-semibold">รวม: ฿{total.toFixed(2)}</h3>
        {cartItems.length > 0 && (
          <>
            <p>ค่าขนส่ง: ฿{shippingCost.toFixed(2)}</p>
            <p>ส่วนลด: ฿{discount.toFixed(2)}</p>
            <p>รวมหลังหักส่วนลด: ฿{totalAfterDiscount.toFixed(2)}</p>
          </>
        )}
      </div>
      <div className="mt-4 flex items-center space-x-2">
  <input
    type="text"
    value={coupon}
    onChange={(e) => setCoupon(e.target.value)}
    placeholder="กรอกรหัสคูปอง"
    className="border p-2 rounded w-3/4" 
  />
  <button onClick={applyCoupon} className="bg-green-500 text-white p-2 rounded hover:bg-green-600 flex-shrink-0">
    ใช้คูปอง
  </button>
</div>
    </div>
  );
}
