class User {
  constructor ({ id, email, password, name, bio, country }) {
    if (id) {
      this.id = id
    }
    if (email) {
      this.email = email
    }
    if (password) {
      this.password = password
    }
    if (name) {
      this.name = name
    }
    if (bio) {
      this.bio = bio
    }
    if (country) {
      this.country = country
    }
  }
}

module.exports = User
