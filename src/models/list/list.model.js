class List {
  constructor ({ id, name, userId, series }) {
    if (id) {
      this.id = id
    }
    if (name) {
      this.name = name
    }
    if (userId) {
      this.user_id = userId
    }
    if (series) {
      this.series = series
    }
  }
}

module.exports = List
