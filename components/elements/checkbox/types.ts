type Checkbox = {
  type: 'checkbox' | 'text',
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  children: React.ReactNode
  products: ProductProps
}

export default Checkbox