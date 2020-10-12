import axios from "axios";

let baseUrl = process.env.REACT_APP_URL
// "http://localhost:3001"

if (process.env.NODE_ENV === 'production') {
  baseUrl = process.env.REACT_APP_URL;
}

const url = axios.create({ baseURL: baseUrl })

export default {
  loadRestaurants: (address, category) => {
    let city_params = (address && address.city !== undefined) ? `city=${address.city}` : ''
    let category_params = (category !== null) ? `&category=${category.title}` : ''

    return url.get(`/restaurants?${city_params}${category_params}`)
  },

  searchRestaurants: (search) => url.get(`/restaurants/search?q=${search}`),
  getRestaurant: (id) => url.get(`restaurants/${id}`),
  loadCategories: () => url.get("/categories"),

  createOrder: (order, products_order, address) => {
    let new_product_orders = products_order.map(function (product_order) {
      return ({
        'product_id': product_order.product.id,
        'comment': product_order.comment,
        'quantity': product_order.quantity
      })
    });

    let full_address = [
      address.street, address.number, address.city,
      address.state, address.cep,
      (address.reference) ? `Referência: ${address.reference}` : null,
      (address.complement) ? `Complemento: ${address.complement}` : null
    ].join(',')

    order['order_products_attributes'] = new_product_orders
    order['address'] = full_address

    return url.post(`orders`, order)
  },
  loadOrder: (id) => url.get(`orders/${id}`),
}
