import midtransClient from 'midtrans-client';
import "dotenv/config"

let core = new midtransClient.CoreApi({
  isProduction : false,
  serverKey : process.env.MIDTRANS_SERVERKEY,
  clientKey : process.env.MIDTRANS_CLIENTKEY
});

export default core 
