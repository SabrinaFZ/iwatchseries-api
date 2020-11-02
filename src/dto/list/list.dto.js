class ListDTO {
  constructor ({ id, name, series }) {
    if (id) {
      this.id = id
    }
    if (name) {
      this.name = name
    }
    if (series) {
      this.series = series
    }
  }
}

module.exports = ListDTO
