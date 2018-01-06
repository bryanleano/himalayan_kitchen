ingredients = [
  'lentils', 'cumin seeds', 'black pepper',
  'fresh tomato', 'ginger', 'onion', 'garlic',
  'green chilies', 'curry spices', 'Nepali spices',
  'grilled lamb', 'kebab', 'vegetable pakora',
  'chickpeas', 'crispy papadam', 'samosa',
  'mixed vegetables', 'dumplings', 'mixed vegetables'
]

names = [
  'Masala Papadam', 'Lamb Sekuwa', 'Vegetable Somosa', 'Navaratna Korma',
  'Malai Kofta', 'Aloo Gobi', 'Himalayan Momos', 'Chicken Tandoori',
  'Lamb Boti Kabob', 'Lamb Vindaloo', 'Aloo Simi', 'Yellow Daal',
  'Aloo Tama bodi', 'Aloo Bhindi', 'Thukpa', 'Gulab Jamun', 'Pillave Rice'
]

types = [
  'Starters', 'Main Dish', 'Dessert'
]

25.times do
  Dish.create(
    name: Faker::Food.dish,
    ingredients: Faker::Food.ingredient,
    price: Faker::Commerce.price.to_f,
    menu_type: types.sample
  )
end
