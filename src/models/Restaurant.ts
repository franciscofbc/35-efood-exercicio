class Restaurant {
  id: number
  img: string
  name: string
  description: string
  grade: string
  type: string
  highlight: boolean

  constructor(
    id: number,
    img: string,
    name: string,
    description: string,
    grade: string,
    type: string,
    highlight: boolean
  ) {
    this.id = id
    this.img = img
    this.name = name
    this.description = description
    this.grade = grade
    this.type = type
    this.highlight = highlight
  }
}

export default Restaurant
