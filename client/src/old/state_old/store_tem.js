export const counter = () => {
  const initialState = {
    items: [
      { no: 0, name: "apple", price: 120, count: 30 },
      { no: 1, name: "banana", price: 90, count: 30 },
      { no: 2, name: "orange", price: 110, count: 30 },
      { no: 3, name: "lemon", price: 200, count: 30},
    ],
    cart: {
      sum: 0,
      count: 0,
    },
  };
  const counter = (state = initialState, action) => {
    switch (action.type) {
      case "add_count":
        const newCount = state.item.count + 1;
        return {
          item: {
            count: newCount,
          },
        };

      case "addToCart/0":
        const newState1 = JSON.parse(JSON.stringify(state));
        newState1.items[0].count -= 1;
        newState1.cart.sum += state.items[0].price;
        newState1.cart.count += 1;
        return newState1;

      case "addToCart/1":
        const newState2 = JSON.parse(JSON.stringify(state));
        newState2.items[1].count -= 1;
        newState2.cart.sum += state.items[1].price;
        newState2.cart.count += 1;
        return newState2;

      case "addToCart/2":
        const newState3 = JSON.parse(JSON.stringify(state));
        newState3.items[2].count -= 1;
        newState3.cart.sum += state.items[2].price;
        newState3.cart.count += 1;
        return newState3;

        case "addToCart/3":
          const newState4 = JSON.parse(JSON.stringify(state));
          newState4.items[3].count -= 1;
          newState4.cart.sum += state.items[3].price;
          newState4.cart.count += 1;
          return newState4;

      default:
        return state;
    }
  };

  return counter;
};
