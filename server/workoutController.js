module.exports = {
  newWorkout: (req,res,next) => {
    console.log(req.body)
    const db = req.app.get('db')
    const {workoutDate, workoutType, workoutTime} = req.body
    const {id} = req.user
    db.new_workout([workoutType, workoutTime, workoutDate, id])
      .then((workout) => {
        res.status(200).send(workout)
      })
      .catch(() => {
        res.status(500).send('Error submitting new workout')
      })
  },
  getWorkouts: (req, res, next) => {
    const db = req.app.get('db')
    const {id} = req.user
    db.get_workouts([id])
      .then((workouts) => {
        res.status(200).send(workouts)
      })
      .catch(() => {
        res.status(500).send('Failed retrieving workout data')
      })
  }
}