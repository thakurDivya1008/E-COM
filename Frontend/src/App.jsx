
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./Components/Layout/UserLayout";
import Home from "./pages/Home";
import { Toaster } from "sonner";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import CollectionPage from "./pages/CollectionPage";
import ProductDetails from "./Components/Products/ProductDetails";
import Checkout from "./Components/Cart/Checkout";
import OrderConfirmationPage from "./pages/OrderConformationPage";
import OrderDetailsPage from "./pages/OrderDetailsPage";
import MyOrdersPage from "./pages/MyOrdersPage";
import AdminLayout from "./Components/Admin/AdminLayout";
import AdminHomepage from "./pages/AdminHomepage";
import UserManagement from "./Components/Admin/UserManagement";
import ProductManagement from "./Components/Admin/ProductManagement";
import EditProductPage from "./Components/Admin/EditProductPage";
import OrderManagement from "./Components/Admin/OrderManagement";


import { Provider } from "react-redux";
import store from "./redux/store"
import ProtectRoute from "./Components/Common/ProtectRoute";

const App = () => {
	return (
		<Provider store={store}>
		<BrowserRouter
			future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
		>
			<Toaster position="top-right" />

			<Routes>
				 <Route path="/" element={<UserLayout />}>
					<Route index element={<Home/>} />
					<Route path="login" element={<Login/>} />
					<Route path="register" element={<Register/>} />
					<Route path="profile" element={<Profile />} />
					<Route path="/collections/:collection" element={<CollectionPage/>} />
					<Route path="product/:id" element={<ProductDetails />} />
					<Route path="checkout" element={<Checkout />} />
					<Route path="order-confirmation" element={<OrderConfirmationPage />} />
					<Route path="order/:id" element={<OrderDetailsPage />}	/>
					<Route path="my-orders" element={<MyOrdersPage />} />
				</Route>
				<Route path="/admin" element={
					<ProtectRoute role="admin">
						<AdminLayout />
					</ProtectRoute>
					}>
					<Route index element={<AdminHomepage />} />
					<Route path="users" element={<UserManagement />} />
					<Route path="products" element={<ProductManagement />} />
					<Route path="products/:id/edit" element={<EditProductPage />} />
					<Route path="orders" element={<OrderManagement />} />
				</Route>
			</Routes>
		</BrowserRouter>
		</Provider>
	);
};

export default App;
