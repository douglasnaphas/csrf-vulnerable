/**
 * Express middleware that sends 400 if req.search is non-empty and has any
 * params other than:
 *   - samesite=true
 */
const whiteListURLSearch = (req, res, next) => {
  
}