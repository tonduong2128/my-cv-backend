import descriptionRoute from "./descriptionRouter.mjs"
import informationRoute from "./informationRouter.mjs"
import contactRoute from "./contactRouter.mjs"

export default (app) => {
  app.use('/infomation', informationRoute)
  app.use('/description',descriptionRoute)
  app.use('/contact',contactRoute)
  app.use('/', (req, res)=>{
    res.json({message:0})
  })
}