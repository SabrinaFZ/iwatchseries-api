class User {
  constructor ({ id, email, password, name = '', bio = '', country = 'en' }) {
    if (id) {
      this.id = id
    }
    this.email = email
    this.password = password
    this.name = name
    this.bio = bio
    this.country = country
  }
}

module.exports = User
