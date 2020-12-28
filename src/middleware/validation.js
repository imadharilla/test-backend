exports.validateSchema = ({ schema }) => async (req, res, next) => {
  try {
    await schema.validateAsync(req.body)
    next()
  } catch (error) {
    console.info('Error in validating the schema')
    console.error(error)
  }
}
