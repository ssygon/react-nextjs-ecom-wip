"use client";

const CartPopover = () => {

  const cartItems: any[] = [];

  return (
    <>
    {cartItems.length > 0 ? (
      <>
        <div className="flex flex-col min-w-[270px] min-h-[270px] max-h-[270px] overflow-y-auto">
          <h2>Shopping Bag</h2>
          {cartItems.map((item) => (
            <div key={item.id}>
              <img 
              src={item.image} 
              alt={item.name} 
              width={100} 
              height={100} 
              className="w-10 h-10 object-cover"
              />
              <h3>{`item.name`}</h3>
              <p>{`item.price`}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-between items-center">
          <p>Total:</p>
          <button className="btn-primary">Checkout</button>
        </div>
      </>
    ) : (
      <>
        <div className="flex flex-col min-w-[270px] min-h-[270px] max-h-[270px] overflow-y-auto justify-between">
          <h2>Shopping Bag</h2>
          <p>Your shopping bag is empty</p>
          <button className="btn-primary">Continue Shopping</button>
        </div>
      </>
    )}
    </>
  );
};

export default CartPopover;