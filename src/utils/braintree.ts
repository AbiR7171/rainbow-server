import braintree from 'braintree';
const gateway = new braintree.BraintreeGateway({
    environment: braintree.Environment.Sandbox,
    merchantId: "znbj2kmj8wqrnv58",
    publicKey: "96gjcjjrtn2cpmch",
    privateKey: "bfd97603b5c6bb6127f349c26d1e96a3",
  });
  export default gateway;