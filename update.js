var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myquery = { p_price: "13" };
  var newvalues = { $set: { product_id: "4", product_name: "walnut", product_disc:"healthy",P_price:"21" } };
  dbo.collection("products").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    db.close();
  });
});