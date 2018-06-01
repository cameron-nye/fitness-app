module.exports = {
  getUserGoals: (req, res, next) => {
    // console.log(req.session)
    const db = req.app.get('db')
    const {id} = req.user
    db.get_user_goals([id])
      .then((goals) => res.status(200).send(goals))
      .catch(() => res.status(500).send())
  },
  newGoal: (req, res, next) => {
    const db = req.app.get('db')
    const {id} = req.user
    const {goal} = req.body
    db.add_goal([goal, id])
      .then((goal) => res.status(200).send(goal))
      .catch(() => res.status(500).send())
  },
  deleteGoal: (req, res, next) =>{
    const db = req.app.get('db')
    const {id} = req.params 
    db.delete_goal(id)
      .then(() => res.status(200).send())
      .catch(() => res.status(500).send())
  },
  updateGoal: (req, res, next) => {
    // console.log(req.body, req.params.id, 'updateGoal')
    const db = req.app.get('db')
    const {goal} = req.body
    const {goal_id} = req.params
    // console.log(goal, goal_id, req.user)
    const {id} = req.user
    db.update_goal([goal, goal_id, id])
      .then((goal) => {
        // console.log(goal)
        res.status(200).send(goal)
      })
      .catch(() => res.status(500).send('Error updating goal'))
  }
}

