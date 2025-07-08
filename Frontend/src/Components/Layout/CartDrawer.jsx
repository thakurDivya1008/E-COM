// <<<<<<< HEAD
// import { useState } from "react";
// =======
// // import { useState } from "react";
// >>>>>>> 31de50673ff559940649b81c31fb78d694bd6e9d
// import { IoMdClose } from "react-icons/io";
// import CartContents from "../Cart/CartContents";
// import { useNavigate } from "react-router-dom";

// const CartDrawer = ({ drawerOpen, toggleCartDrawer }) => {
// 	const navigate = useNavigate();

// 	const handleCheckout = () => {
// 		toggleCartDrawer();
// 		navigate("/checkout");
// 	};

// 	return (
// 		<div
// 			className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-[30rem] h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 
// 				${drawerOpen ? "translate-x-0" : "translate-x-full"}`}
// 		>
// 			{/* Close Button */}
// 			<div className="flex justify-end p-4">
// 				<button onClick={toggleCartDrawer}>
// 					<IoMdClose className="h-6 w-6 text-gray-600" />
// 				</button>
// 			</div>
// 			{/* Cart contents with scrollable area */}
// 			<div className="flex-grow p-4 overflow-y-auto">
// 				<h2 className="text-xl font-semibold mb-4">Your Cart</h2>
// 				<CartContents />
// 			</div>

// 			{/* Checkout button fixed at the bottom */}
// 			<div className="p-4 bg-white sticky bottom-0">
// <<<<<<< HEAD
// 				<button
// 					onClick={handleCheckout}
// 					className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
// =======
// 				{/* <button
// 					className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800"
//                     transition duration-300
// >>>>>>> 31de50673ff559940649b81c31fb78d694bd6e9d
// 				>
// 					Checkout
// 				</button> */}

// 				<button
// 	className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition duration-300"
// >
// 	Checkout
// </button>

// 				<p className="text-sm tracking-tighter text-gray-500 mt-2 text-center">
// 					Shipping, taxes, and discount codes calculated at checkout.
// 				</p>
// 			</div>
// 		</div>
// 	);
// };

// export default CartDrawer;



import { IoMdClose } from "react-icons/io";
import CartContents from "../Cart/CartContents";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const CartDrawer = ({ drawerOpen, toggleCartDrawer }) => {
	const navigate = useNavigate();

	const { user, guestId } = useSelector((state) => state.auth);
	const { cart } = useSelector((state) => state.cart);
	const userId = user ? user._id : null;

	const handleCheckout = () => {
		toggleCartDrawer();
		if(!user){
			navigate("/login?redirect=checkout");
		}
		else{
               navigate("/checkout");
		}
		
	};

	return (
		<div
			className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-[30rem] h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 
				${drawerOpen ? "translate-x-0" : "translate-x-full"}`}
		>
			{/* Close Button */}
			<div className="flex justify-end p-4">
				<button onClick={toggleCartDrawer}>
					<IoMdClose className="h-6 w-6 text-gray-600" />
				</button>
			</div>

			{/* Cart contents */}
			<div className="flex-grow p-4 overflow-y-auto">
				<h2 className="text-xl font-semibold mb-4">Your Cart</h2>
				{cart && cart?.products?.length>0 ? (
					<CartContents cart={cart} userId={userId} guestId={guestId}/>
				): (
					<p>Your Cart is empty.</p>
				)}
				
			</div>

			{/* Checkout button */}
			<div className="p-4 bg-white sticky bottom-0">
				{cart && cart?.products?.length>0  && (
					<>
					<button
					onClick={handleCheckout}
					className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition duration-300"
				>
					Checkout
				</button>

				<p className="text-sm tracking-tighter text-gray-500 mt-2 text-center">
					Shipping, taxes, and discount codes calculated at checkout.
				</p>
				</>
				)}
				
			</div>
		</div>
	);
};

export default CartDrawer;


