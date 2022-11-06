import { useState, useEffect} from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import ProductList from './ProductList';
import Categories from './Categories';
import Cart from './Cart';

const Shop = () => {
    // tạo state product để lưu trữ danh sách sản phẩm  từ API
    const [products, setProducts] = useState([]);
    // tạo state categories để lưu trữ danh sách danh mục từ API
    const [categories, setCategories] = useState([]);
    // tạo state selectedCategory để lưu trữ danh mục người dùng đang chọn
    const [selectedCategory, setSelectedCategory] = useState("");
    // tạo state isOpen để quản lí trạng thái ẩn/hiện của Modal
    const [isOpen, setIsOpen] = useState(false);
    // tạo state carts để quản lí danh sách sản phẩm được thêm vào giỏ hàng
    const [carts, setCarts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                let resp = null;
                if(!selectedCategory){
                    resp = await axios.get("https://shop.cyberlearn.vn/api/Product");
                } else {
                    resp = await axios.get("https://shop.cyberlearn.vn/api/Product/getProductByCategory",
                    {
                        params: {
                            categoryId: selectedCategory,
                        }
                    }
                    );
                }
                // call API thành công
                setProducts(resp.data.content);
            } catch (error) {
                console.log(error)
            }
        }

        fetchProducts();
    },[selectedCategory])

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const resp = await axios.get("https://shop.cyberlearn.vn/api/Product/getAllCategory");
                // call API thành công
                setCategories(resp.data.content);
            } catch (error) {
                console.log(error)
            }
        }

        fetchCategories();
    },[])

    const handleSelect = (category) => {
        setSelectedCategory(category);
    }

    const handleAddToCart = (product) => {
        const index = carts.findIndex((item) => item.id === product.id)
        if(index === -1){
            setCarts([...carts, { ...product, quantity : 1}])
        } else {
            const newCarts = [...carts];
            newCarts[index].quantity += 1;
            setCarts(newCarts);
        }
    }

    const handleClose = () => setIsOpen(false);
    const handleOpen = () =>  setIsOpen(true);


  return (
    <div className='container'>
        <h1 className='text-center'>Shop</h1>
        <div className='d-flex justify-content-end mb-3'>
            <Button variant='danger' onClick={handleOpen}>Giỏ hàng</Button>
        </div>
        <Categories categories={categories} onSelect={handleSelect} />
        <ProductList onAddToCart={handleAddToCart} products={products} />
        <Cart carts={carts} isOpen={isOpen} onClose={handleClose} />
    </div>
  );
};

export default Shop;