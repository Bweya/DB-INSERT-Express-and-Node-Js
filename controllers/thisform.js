
const db = require('../server/sqlserver.js');


exports.insert_post = async (req, res, next) => {

  console.log("My name:", req.body.fname);
  console.log("My age:", req.body.fage);

  try {

    await db.all(req.body.fname,req.body.fage);// await db.one(req.body.myname) SELECT * WHERE user_ID supplied in the URL
    res.writeHead( 200, {"Content-Type":"text/html"} );
    res.write("Records below inserted successfully:");
    res.write("<p><span style='margin-right:50px'><strong>Name:</strong></span>"+req.body.fname);
    res.write("</p><p><span style='margin-right:50px'><strong>age:</strong></span>"+req.body.fage+"</p>");
    //res.write("</p>");
    res.end();

  } catch (e) {

    console.log(e);
    res.sendStatus(500);
  }

  //res.write("<p><strong>");
  //res.write(req.body.myname);
  //res.write("</strong></p>")
  //res.end();

  //res.redirect('/');

}
