import { createContext, useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const fakeData = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    isFavorite: false,
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1645997245576-602bedf8d90d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    isFavorite: false,
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1645921471279-d34c1f60ef87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    isFavorite: false,
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1645940431507-df8608b308f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    isFavorite: false,
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1645973355500-ed641d872bb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80",
    isFavorite: false,
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1645389776715-6fcb5db13ffe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    isFavorite: false,
  },
];
const GalleryContext = createContext();
function GalleryProvider(props) {
  const { storedValue, setValue } = useLocalStorage("photos", fakeData);
  const { storedValue: storedCart, setValue: setStoredCart } = useLocalStorage(
    "cartItems",
    []
  );
  const [photos, setPhotos] = useState(storedValue);
  const [cartItems, setCartItems] = useState(storedCart);
  const [favoriteList, setFavoriteList] = useState([]);

  function toggleFavorite(photoId) {
    const updatedArray = photos.map((photo) => {
      if (photo.id === photoId) {
        return { ...photo, isFavorite: !photo.isFavorite };
      }
      return photo;
    });
    setPhotos(updatedArray);
    setValue(updatedArray);
  }
  // 1. Viết function addToCart
  // 2. Function addToCart truyền params là photo
  function addToCart(newItem) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    // 3. Cập nhật lại state giỏ hàng(cartItems)
    setCartItems((prevItems) => {
      // 4. Kiểm tra sản phẩm đã tồn tại trong giỏ hàng hay chưa
      const isExisted = prevItems.some((item) => item.id === newItem.id);
      // 5. Nếu tồn tại thì trả về danh sách trước đó
      if (isExisted) {
        setStoredCart([...prevItems]);
        return [...prevItems];
      }
      // 6. Chưa tồn tại thì thêm vào giỏ hàng.
      setStoredCart([...prevItems, newItem]);
      return [...prevItems, newItem];
    });
  }

  function removeFromCart(id) {
    setCartItems((prevItems) => {
      const result = prevItems.filter((item) => item.id !== id);
      setStoredCart(result);
      return result;
    });
  }

  const value = {
    photos,
    cartItems,
    favoriteList,
    toggleFavorite,
    addToCart,
    removeFromCart,
  };
  return (
    <GalleryContext.Provider {...props} value={value}></GalleryContext.Provider>
  );
}

function useGallery() {
  const context = useContext(GalleryContext);
  if (typeof context === "undefined")
    throw new Error("useAuth muse be used within a AuthProvider");
  return context;
}

export { useGallery, GalleryProvider };
