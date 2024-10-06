import gateway from "../../../utils/braintree";
import { Cart } from "../carts/cart.model";
import { User } from "../users/user.model";
import { TPayment } from "./payment.interface";
import { Payment } from "./payment.model";

const addToCheckoutInToDB = async(payment:TPayment)=>{
    console.log(payment, "payment")
    const user = await User.findById(payment?.userId);
    console.log(user, "user");
     if(user?.brainTreeId){
       console.log("braintree id got")
        let creditCardParams = {
            customerId:user?.brainTreeId,
            number: payment?.cardNumber,
            expirationDate: payment?.expiration,
            cvv: payment?.cvc
          };
          
          gateway.creditCard.create(creditCardParams)
          .then(res =>{  
            console.log(res)
            gateway.transaction.sale({
                amount: payment?.amount,
                customerId:user?.brainTreeId,
                paymentMethodToken: res?.creditCard?.token,
                options: {
                         submitForSettlement: true,
                         storeInVaultOnSuccess:true
                         },
                }).then(async transaction => {
                   console.log(transaction,"transaction")
                     const userTransaction = {
                      phone: payment?.phone,
                      address: payment?.address ,
                      state: payment?.state ,
                      postal: payment?.postal ,
                      transactionId:transaction?.transaction?.id ,
                      amount: payment?.amount,
                      userId: payment?.userId,
                      brainTreeId:user.brainTreeId
                     }
                  
                       if(transaction.success){
                        await Cart.findByIdAndUpdate(
                          payment?.cartId,
                          { $set: { paymentStatus: "paid"} },  // Add the braintreeId field
                          { new: true }  // Return the updated document
                      )
                            const response = await Payment.create(userTransaction);
                            return response
                       }
                 }).catch(err =>{
                  console.log(err);
                  throw new Error(err)
                 });
          }).catch(err =>{
             console.log(err)
             throw new Error(err)
          })
     }else{
       console.log("start with else part")
    gateway.customer.create({
        firstName: user?.firstName,
        lastName: user?.lastName,
        email: user?.email,
        phone: payment?.phone,
    }).then (async result => {

        let creditCardParams = {
            customerId:result.customer.id,
            number: payment?.cardNumber,
            expirationDate: payment?.expiration,
            cvv: payment?.cvc
          };
          
          gateway.creditCard.create(creditCardParams)
          .then( async creditCard => {
             console.log(creditCard);
             console.log(payment?.userId, "userId");
             const updateCustomer  = await User.findByIdAndUpdate(
                payment?.userId,
                { $set: { brainTreeId: result.customer.id} },  // Add the braintreeId field
                { new: true }  // Return the updated document
            )
            console.log(updateCustomer, "update customer");
            if(updateCustomer){  
              console.log("trans") 
              gateway.transaction.sale({
              amount: payment?.amount,
              customerId: result.customer.id,
              paymentMethodToken: creditCard?.creditCard?.token,
              options: {
                       submitForSettlement: true,
                       storeInVaultOnSuccess:true
                       },
              }).then(async transaction => {
                  console.log(transaction, "trans")
                   const userTransaction = {
                    phone: payment?.phone,
                    address: payment?.address ,
                    state: payment?.state ,
                    postal: payment?.postal ,
                    transactionId:transaction?.transaction?.id ,
                    amount: payment?.amount,
                    userId: payment?.userId,
                    brainTreeId:result.customer.id
                   }       
                     if(transaction.success){
                      await Cart.findByIdAndUpdate(
                        payment?.cartId,
                        { $set: { paymentStatus: "paid"} },  // Add the braintreeId field
                        { new: true }  // Return the updated document
                      )
                          const response = await Payment.create(userTransaction)
                          return response
                     }
               }).catch(err =>{
                console.log(err);
                throw new Error(err)
               });
        
            }else{
                throw new Error("can not update user")
            }
          }).catch(err =>{
             throw new Error(err)
          })

        console.log(result);
      
     }).catch(err =>{
         throw new Error(err)
     })

  
     }
}

export const paymentServices = {
    addToCheckoutInToDB
}