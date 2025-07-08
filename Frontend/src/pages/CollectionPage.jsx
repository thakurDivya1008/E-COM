//  import { useEffect, useState, useRef } from "react";
//  import { FaFilter } from "react-icons/fa";
// import FilterSidebar from "../Components/Products/FilterSidebar";
//  import SortOptions from "../Components/Products/SortOptions";
//  import ProductGrid from "../Components/Products/ProductGrid";
// import { useParams, useSearchParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchProductsByFilters } from "../redux/slices/productsSlice";

//  const CollectionPage = () => {

// 	const { collection } = useParams();
// 	const [searchParams] = useSearchParams();
// 	const dispatch = useDispatch();
// 	const { products,loading, error } = useSelector((state) => state.products);
// 	const queryParams = Object.fromEntries([...searchParams]);

// 	const [products, setProducts] = useState([]);
// 	const sidebarRef = useRef(null);
// 	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

// 	useEffect(() => {
// 		dispatch(fetchProductsByFilters({ collection, ...queryParams}));

// 	}, [dispatch, collection, searchParams]);
// 	const [products, setProducts] = useState([]);
// 	const sidebarRef = useRef(null);
// 	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

// 	const toggleSidebar = () => {
// 		setIsSidebarOpen(!isSidebarOpen);
// 	};

// 	const handleClickOutside = (e) => {
// 		// Close sidebar if clicked outside
// 		if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
// 			setIsSidebarOpen(false);
// 		}
// 	};

// 	useEffect(() => {
// 		// Add event listner for clicks
// 		document.addEventListener("mousedown", handleClickOutside);
// 		// clean event listener
// 		document.removeEventListener("mousedown", handleClickOutside);
// 	});

// 	useEffect(() => {
// 	document.addEventListener("mousedown", handleClickOutside);
// 	return () => {
// 		document.removeEventListener("mousedown", handleClickOutside);
// 	};
// }, []);


// 	// useEffect(() => {
// 	// 	setTimeout(() => {
// 	// 		const fetchedProducts = [
// 	// 			{
// 	// 				_id: 1,
// 	// 				name: "Product 1",
// 	// 				price: 100,
// 	// 				images: [{ url: "https://picsum.photos/500/500?random=1" }],
// 	// 			},
// 	// 			{
// 	// 				_id: 2,
// 	// 				name: "Product 2",
// 	// 				price: 100,
// 	// 				images: [{ url: "https://picsum.photos/500/500?random=2" }],
// 	// 			},
// 	// 			{
// 	// 				_id: 3,
// 	// 				name: "Product 3",
// 	// 				price: 100,
// 	// 				images: [{ url: "https://picsum.photos/500/500?random=3" }],
// 	// 			},
// 	// 			{
// 	// 				_id: 4,
// 	// 				name: "Product 4",
// 	// 				price: 100,
// 	// 				images: [{ url: "https://picsum.photos/500/500?random=4" }],
// 	// 			},
// 	// 			{
// 	// 				_id: 5,
// 	// 				name: "Product 5",
// 	// 				price: 100,
// 	// 				images: [{ url: "https://picsum.photos/500/500?random=5" }],
// 	// 			},
// 	// 			{
// 	// 				_id: 6,
// 	// 				name: "Product 6",
// 	// 				price: 100,
// 	// 				images: [{ url: "https://picsum.photos/500/500?random=6" }],
// 	// 			},
// 	// 			{
// 	// 				_id: 7,
// 	// 				name: "Product 7",
// 	// 				price: 100,
// 	// 				images: [{ url: "https://picsum.photos/500/500?random=7" }],
// 	// 			},
// 	// 			{
// 	// 				_id: 8,
// 	// 				name: "Product 8",
// 	// 				price: 100,
// 	// 				images: [{ url: "https://picsum.photos/500/500?random=8" }],
// 	// 			},
// 	// 		];
// 	// 		setProducts(fetchedProducts);
// 	// 	}, 1000);
// 	// }, []);

// 	return (
// 		<div className="flex flex-col lg:flex-row">
// 			{/*Mobile filter button*/}
// 			<button
// 				onClick={toggleSidebar}
// 				className="lg:hidden boder p-2 flex justify-center items-center"
// 			>
// 				<FaFilter className="mr-2" /> Filters
// 			</button>

// 			{/* Filter Sidebar  */}
// 			<div
// 				ref={sidebarRef}
// 				className={`${
// 					isSidebarOpen ? "translate-x-0" : "-translate-x-full"
// 				    } fixed inset-y-0 z-50 left-0 w-64 bg-white ovrflow-y-auto 
//                     transition transform duration-300 lg:static lg:translate-x-0`
//                 }
// 			>
// 				<FilterSidebar />
// 			</div>
//             <div className="flex-grow p-4">
//                 <h2 className="text-2xl uppercase mb-4">All Collection</h2>

//                 {/* Sort Options */}
//                 <SortOptions />

//                 {/* Product Grid */}
//                 <ProductGrid products={products} loading={loading}  error={error} />
//             </div>
// 		</div>
// 	);
// };

//  export default CollectionPage;


// import { useEffect, useState, useRef } from "react";
// import { FaFilter } from "react-icons/fa";
// import FilterSidebar from "../Components/Products/FilterSidebar";
// import SortOptions from "../Components/Products/SortOptions";
// import ProductGrid from "../Components/Products/ProductGrid";
// import { useParams, useSearchParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchProductsByFilters } from "../redux/slices/productsSlice";

// const CollectionPage = () => {
// 	const { collection } = useParams();
// 	const [searchParams] = useSearchParams();
// 	const dispatch = useDispatch();
// 	const { products,loading, error } = useSelector((state) => state.products);
// 	const queryParams = Object.fromEntries([...searchParams]);

// 	// const [products, setProducts] = useState([]);
// 	const sidebarRef = useRef(null);
// 	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	
	

// 	useEffect(() => {
// 		dispatch(fetchProductsByFilters({ collection, ...queryParams}));

// 	}, [dispatch, collection, searchParams]);
// 	const toggleSidebar = () => {
// 		setIsSidebarOpen(!isSidebarOpen);
// 	};

// 	const handleClickOutside = (e) => {
// 		if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
// 			setIsSidebarOpen(false);
// 		}
// 	};

// 	useEffect(() => {
// 		document.addEventListener("mousedown", handleClickOutside);
// <<<<<<< HEAD
// 		return () => {
// 			document.removeEventListener("mousedown", handleClickOutside);
// 		};
// =======
// 		// clean event listener
// 		return () => {
// 			// Remove event listener on cleanup
// 			document.removeEventListener("mousedown", handleClickOutside);
// 		};
// 		// document.removeEventListener("mousedown", handleClickOutside);
// 	});

// 	useEffect(() => {
// 		setTimeout(() => {
// 			const fetchedProducts = [
// 				{
// 					_id: 1,
// 					name: "Product 1",
// 					price: 100,
// 					images: [{ url: "https://picsum.photos/500/500?random=1" }],
// 				},
// 				{
// 					_id: 2,
// 					name: "Product 2",
// 					price: 100,
// 					images: [{ url: "https://picsum.photos/500/500?random=2" }],
// 				},
// 				{
// 					_id: 3,
// 					name: "Product 3",
// 					price: 100,
// 					images: [{ url: "https://picsum.photos/500/500?random=3" }],
// 				},
// 				{
// 					_id: 4,
// 					name: "Product 4",
// 					price: 100,
// 					images: [{ url: "https://picsum.photos/500/500?random=4" }],
// 				},
// 				{
// 					_id: 5,
// 					name: "Product 5",
// 					price: 100,
// 					images: [{ url: "https://picsum.photos/500/500?random=5" }],
// 				},
// 				{
// 					_id: 6,
// 					name: "Product 6",
// 					price: 100,
// 					images: [{ url: "https://picsum.photos/500/500?random=6" }],
// 				},
// 				{
// 					_id: 7,
// 					name: "Product 7",
// 					price: 100,
// 					images: [{ url: "https://picsum.photos/500/500?random=7" }],
// 				},
// 				{
// 					_id: 8,
// 					name: "Product 8",
// 					price: 100,
// 					images: [{ url: "https://picsum.photos/500/500?random=8" }],
// 				},
// 			];
// 			setProducts(fetchedProducts);
// 		}, 1000);
// >>>>>>> 84958769a718557f51255f5a99346cf36814c46e
// 	}, []);

// 	// useEffect(() => {
// 	// 	setTimeout(() => {
// 	// 		const fetchedProducts = [
// 	// 			{ _id: 1, name: "Product 1", price: 100, images: [{ url: "https://picsum.photos/500/500?random=1" }] },
// 	// 			{ _id: 2, name: "Product 2", price: 100, images: [{ url: "https://picsum.photos/500/500?random=2" }] },
// 	// 			{ _id: 3, name: "Product 3", price: 100, images: [{ url: "https://picsum.photos/500/500?random=3" }] },
// 	// 			{ _id: 4, name: "Product 4", price: 100, images: [{ url: "https://picsum.photos/500/500?random=4" }] },
// 	// 			{ _id: 5, name: "Product 5", price: 100, images: [{ url: "https://picsum.photos/500/500?random=5" }] },
// 	// 			{ _id: 6, name: "Product 6", price: 100, images: [{ url: "https://picsum.photos/500/500?random=6" }] },
// 	// 			{ _id: 7, name: "Product 7", price: 100, images: [{ url: "https://picsum.photos/500/500?random=7" }] },
// 	// 			{ _id: 8, name: "Product 8", price: 100, images: [{ url: "https://picsum.photos/500/500?random=8" }] },
// 	// 		];
// 	// 		setProducts(fetchedProducts);
// 	// 	}, 1000);
// 	// }, []);

// 	return (
// 		<div className="flex flex-col lg:flex-row">
// 			{/* Mobile filter button */}
// 			<button
// 				onClick={toggleSidebar}
// 				className="lg:hidden border p-2 flex justify-center items-center"
// 			>
// 				<FaFilter className="mr-2" /> Filters
// 			</button>

// 			{/* Filter Sidebar */}
// 			<div
// 				ref={sidebarRef}
// 				className={`${
// 					isSidebarOpen ? "translate-x-0" : "-translate-x-full"
// <<<<<<< HEAD
// 				} fixed inset-y-0 z-50 left-0 w-64 bg-white overflow-y-auto transition transform duration-300 lg:static lg:translate-x-0`}
// =======
// 				    } fixed inset-y-0 z-50 left-0 w-64 bg-white overflow-y-auto 
//                     transition transform duration-300 lg:static lg:translate-x-0`
//                 }
// >>>>>>> 84958769a718557f51255f5a99346cf36814c46e
// 			>
// 				<FilterSidebar />
// 			</div>

// 			<div className="flex-grow p-4">
// 				<h2 className="text-2xl uppercase mb-4">All Collection</h2>
// 				<SortOptions />
// 				<ProductGrid products={products} loading={loading}  error={error}/>
// 			</div>
// 		</div>
// 	);
// };

// export default CollectionPage;



import { useEffect, useState, useRef } from "react";
import { FaFilter } from "react-icons/fa";
import FilterSidebar from "../Components/Products/FilterSidebar";
import SortOptions from "../Components/Products/SortOptions";
import ProductGrid from "../Components/Products/ProductGrid";
import { useParams, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsByFilters } from "../redux/slices/productsSlice";

const CollectionPage = () => {
	const { collection } = useParams();
	const [searchParams] = useSearchParams();
	const dispatch = useDispatch();
	const { products, loading, error } = useSelector((state) => state.products);
	const queryParams = Object.fromEntries([...searchParams]);

	const sidebarRef = useRef(null);
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	useEffect(() => {
		dispatch(fetchProductsByFilters({ collection, ...queryParams }));
	}, [dispatch, collection, searchParams]);

	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen);
	};

	const handleClickOutside = (e) => {
		if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
			setIsSidebarOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<div className="flex flex-col lg:flex-row">
			{/* Mobile filter button */}
			<button
				onClick={toggleSidebar}
				className="lg:hidden border p-2 flex justify-center items-center"
			>
				<FaFilter className="mr-2" /> Filters
			</button>

			{/* Filter Sidebar */}
			<div
				ref={sidebarRef}
				className={`${
					isSidebarOpen ? "translate-x-0" : "-translate-x-full"
				} fixed inset-y-0 z-50 left-0 w-64 bg-white overflow-y-auto transition transform duration-300 lg:static lg:translate-x-0`}
			>
				<FilterSidebar />
			</div>

			{/* Products Section */}
			<div className="flex-grow p-4">
				<h2 className="text-2xl uppercase mb-4">All Collection</h2>
				<SortOptions />
				<ProductGrid products={products} loading={loading} error={error} />
			</div>
		</div>
	);
};

export default CollectionPage;
