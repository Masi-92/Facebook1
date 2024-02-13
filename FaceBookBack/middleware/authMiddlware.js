import  Jwt  from "jsonwebtoken";

// Middleware für die Authentifizierung
export const auth = (req, res, next) => {
  try {
       // Hole das Token aus den Anfrage-Headern
    const token = req.headers.token;
    //console.log(token,process.env)
    const decode = Jwt.verify(token, process.env.JWT_SECRET);
// 8 ob der token valid ist  wenn nicht dan catch 
      // Setze den entschlüsselten Benutzer in das Anfrageobjekt
    req.user = decode;
    next();
  } catch (error) {
    res.status(401).send({ message: "access denied" });
    //console.log(error)
  }
};
