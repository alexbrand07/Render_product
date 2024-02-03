let kitchen = { category: 'kitchen' }
let devices = { category: 'devices' }
let cosmetics = { category: 'cosmetics' }

function createProduct(category, type, price) {
    let product = Object.create(category)
    product.type = type
    product.price = price
    return product
}

let kitchenProducts = [
    createProduct(kitchen, 'grater', 10),
    createProduct(kitchen, 'pastry-bag', 25),
    createProduct(kitchen, 'scale', 5),
    createProduct(kitchen, 'whisk', 15)
]

let devicesProducts = [
    createProduct(devices, 'desktop', [100, 1000]),
    createProduct(devices, 'laptop', [50, 1500]),
    createProduct(devices, 'smartphone', [80, 2000]),
    createProduct(devices, 'tablet', [20, 1300])
]

let cosmeticsProducts = [
    createProduct(cosmetics, 'blush', 100),
    createProduct(cosmetics, 'eyeshadow', 50),
    createProduct(cosmetics, 'lipstick', 80),
    createProduct(cosmetics, 'nail-polish', 200),
    createProduct(cosmetics, 'perfume', 300)
]

function renderProduct(product) {
    let productElement = document.createElement('div')
    productElement.className = 'product'

    let typeElement = document.createElement('p')
    typeElement.textContent = `Type: ${product.type}`

    let priceElement = document.createElement('p')
    priceElement.textContent = `Price: ${Array.isArray(product.price) ? product.price.join(' - ') : product.price}`

    let imgElement = document.createElement('img')
    imgElement.src = `./images/${product.category}/${product.type}.svg`

    productElement.appendChild(typeElement)
    productElement.appendChild(priceElement)
    productElement.appendChild(imgElement)

    return productElement
}

function renderCategory(category, products) {
    let categoryElement = document.createElement('div')
    categoryElement.className = 'category'

    let titleElement = document.createElement('h2')
    titleElement.textContent = category.category.charAt(0).toUpperCase() + category.category.slice(1)

    categoryElement.appendChild(titleElement)

    products.forEach(product => {
        categoryElement.appendChild(renderProduct(product))
    })

    document.body.appendChild(categoryElement)
}

renderCategory(kitchen, kitchenProducts)
renderCategory(devices, devicesProducts)
renderCategory(cosmetics, cosmeticsProducts)
