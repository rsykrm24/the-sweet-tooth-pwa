import midtransClient from 'midtrans-client';
import "dotenv/config"

let snap = new midtransClient.Snap({
  isProduction : false,
  serverKey : process.env.MIDTRANS_SERVERKEY
});

export default snap 
