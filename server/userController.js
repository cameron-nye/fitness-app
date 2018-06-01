module.exports = {
  editAge: (req, res, next) => {
    const db = req.app.get('db')
    const {id} = req.user
    const {age} = req.body
    db.update_user_age([age, id])
      .then((age) => {
        res.status(200).send(age)
      })
      .catch(() => res.status(500).send('Error updating age'))
  },
  editHeight: (req, res, next) => {
    const db = req.app.get('db')
    const {id} = req.user
    const {height} = req.body
    db.update_user_height([height, id])
      .then((height) => {
        res.status(200).send(height)
      })
      .catch(() => {
        res.status(500).send('Error updating height')
      })
  },
  editWeight: (req, res, next) => {
    const db = req.app.get('db')
    const {id} = req.user
    const {weight} = req.body
    db.update_user_weight([weight, id])
      .then((weight) => {
        res.status(200).send(weight)
      })
      .catch(() => {
        res.status(500).send('Error updating weight')
      })
  }
}