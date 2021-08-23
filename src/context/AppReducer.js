export default (state, action) => {
  switch (action.type) {
    case "REMOVE_PRODUCT":
      return {
        ...state,
        products: state.products.filter((product) => {
          return product.id !== action.payload;
        }),
      };
    case "ADD_PRODUCT":
      return {
        ...state,
        products: [action.payload, ...state.products],
      };
    case "EDIT_PRODUCT":
      const updateProduct = action.payload;

      const updateProducts = state.products.map((product) => {
        if (product.id === updateProduct.id) {
          return updateProduct;
        }
        return product;
      });
      return {
        ...state,
        product: updateProduct,
      };

    default:
      return state;
  }
};
