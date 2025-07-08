// const checkout = {
//     _id: "12323",
//     createdAt: new Date(),
//     checkoutItems: [
//         {
//             productId: "1",
//             name: "Jacket",
//             color: "black",
//             size: "M",
//             price: 150,
//             quantity: 1,
//             image: "https://picsim.photos/150?random=1",
//         },
//         {
//             productId: "2",
//             name: "Top",
//             color: "black",
//             size: "M",
//             price: 120,
//             quantity: 2,
//             image: "https://picsim.photos/150?random=2",
//         },
//     ],
//     shippingAddress: {
//         address: "123 Fashion Street",
//         city: "Hamberg",
//         country: "Germany",
//     },
// };

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../redux/slices/cartSlice";


const OrderConformationPage = () => {
const dispatch = useDispatch();
const navigate = useNavigate();
const{ checkout } = useSelector((state) => state.checkout);

//Clear the cart when the order is confirmed 

useEffect(() => {
    if(checkout && checkout._id){
        dispatch(clearCart());
        localStorage.removeItem("cart");
    }
    else{
        navigate("my-orders");
    }
}, [checkout, dispatch, navigate]);


const calculatedEstimatedDelivery = (createdAt) => {
    const orderDate = new Date(createdAt);
    orderDate.setDate(orderDate.getDate() + 10); // Add 10 days to the order Date
    return orderDate.toLocaleDateString();
};

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
        <h1 className="text-4xl font-bold text-center text-emerald-700 mb-8">
            Thankyou For Your Order.....!
        </h1>

    {checkout && (
        <div className="p-6 rounded-lg border">
            <div className="flex justify-between mb-20">
                {/* Order ID and Date */}
                <div>
                    <h2 className="text-xl font-semibold">
                        Order ID: {checkout._id}
                    </h2>
                    <p className="text-gray-500">
                        Order date: {new Date(checkout.createdAt).toLocaleDateString()}
                    </p>
                </div>

                {/* Estimated Delivery */}
                <div>
                    <p className="text-emerald-700 text-sm">
                        Estimated Delivery: {calculatedEstimatedDelivery(checkout.createdAt)}
                    </p>

                </div>
            </div>

            {/* Ordered Items */}
            <div className="mb-20">
                {checkout.checkoutItems.map((item) => (
                    <div key={item.productId} className="flex items-center mb-4">
                        <img src={item.image} alt={item.name} className="w-16 h-16 oject-cover rounded-md mr-4"/>
                        <div>
                            <h4 className="text-md font-semibold">{item.name}</h4>
                            <p className="text-sm text-gray-500">
                                {item.color} | {item.size}
                            </p>
                        </div>
                        <div className="ml-auto text-right">
                            <p className="text-md">${item.price}</p>
                            <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                        </div>
                    </div>
                ))}
            </div>
            {/* Payment and Delivery Information */}
            <div className="grid grid-cols-2 gap-8">
                {/* Payament Information */}
                <div>
                    <h4 className="text-lg font-semibold mb-2">Payment</h4>
                    <p className="text-gray-600">PayPal</p>
                </div>

                {/* Delivery Information */}
                <div>
                    <h4 className="text-lg font-semibold mb-2">Delivery</h4>
                    <p className="text-gray-600">
                        {checkout.shippingAddress.address}
                    </p>
                    <p className="text-gray-600">
                        {checkout.shippingAddress.city}, {" "}
                        {checkout.shippingAddress.country}
                    </p>
                </div>

            </div>
        </div>
    )}



    </div>
  );
};

export default OrderConformationPage;