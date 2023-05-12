import { createContext, useContext, useEffect, useState } from 'react';

const ProductContext = createContext();

export const useTaxtContext = () => useContext(ProductContext);

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getData = localStorage.getItem('products');
    if (getData) {
      setProducts(JSON.parse(getData));
    }
  }, []);

  console.log('products', products);
  console.log('productsLocal', localStorage.getItem('products'));
  // useEffect(() => {
  //   const getData = localStorage.getItem('products');
  //   if (!getData) {
  //     // Si no existe el item "products" en el localStorage, se crea con un array vacío
  //     localStorage.setItem('products', JSON.stringify([]));
  //     setProducts([]);
  //   } else {
  //     setProducts(JSON.parse(getData));
  //   }
  // }, []);

  const exists = (product) => {
    const checkId = (productId) => {
      return productId.id === product.id;
    };
    return products.some(checkId);
  };

  const addProduct = (product, quantitySelect) => {
    console.log('holis', product, quantitySelect);
    if (exists(product)) {
      const existsProduct = products.find(
        (element) => element.id === product.id
      );
      // if (existsProduct.quantity + parseInt(quantitySelect)) {
      existsProduct.quantity = parseInt(quantitySelect);
      // }
      const listNoRepeat = products.filter(
        (element) => element.id !== product.id
      );
      listNoRepeat.push(existsProduct);
      setProducts(listNoRepeat);
      localStorage.setItem('products', JSON.stringify(listNoRepeat));
      return;
    }
    product.quantity = parseInt(quantitySelect);
    const newProduct = { ...product };
    setProducts([...products, newProduct]);
    localStorage.setItem('products', JSON.stringify([...products, newProduct]));
  };

  const updateProductQuantity = (product, quantitySelect) => {
    // const existsProduct = products.find((element) => element.id === product);
    // existsProduct.quantity = parseInt(quantitySelect);
    // const listNoRepeat = products.filter((element) => element.id !== product);
    // listNoRepeat.push(existsProduct);
    // setProducts(listNoRepeat);
    // localStorage.setItem('products', JSON.stringify(listNoRepeat));

    const productIndex = products.findIndex(
      (element) => element.id === product
    );
    if (productIndex !== -1) {
      const updatedProducts = [...products];
      updatedProducts[productIndex].quantity = parseInt(quantitySelect);
      setProducts(updatedProducts);
      localStorage.setItem('products', JSON.stringify(updatedProducts));
      return updatedProducts; // Devuelve el array actualizado
    }
    return;
  };

  const cleanProduct = (product) => {
    const listCleanProduct = products.filter((sought) => sought.id !== product);
    setProducts(listCleanProduct);
    localStorage.setItem('products', JSON.stringify(listCleanProduct));
  };

  const emptyCart = () => {
    const cleanCart = [];
    setProducts(cleanCart);
    localStorage.setItem('products', JSON.stringify(cleanCart));
  };

  const earrings = () => {
    const earrings = products.reduce(
      (accum, product) => (product.availability === false ? accum + 1 : accum),
      0
    );
    return earrings;
  };

  const context = {
    products,
    exists,
    addProduct,
    updateProductQuantity,
    cleanProduct,
    emptyCart,
    earrings,
  };

  return (
    <ProductContext.Provider value={context}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
