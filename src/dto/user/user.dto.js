class UserDTO {
  constructor ({ id, email, name, bio, country }) {
    if (id) {
      this.id = id
    }
    if (email) {
      this.email = email
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

module.exports = UserDTO
