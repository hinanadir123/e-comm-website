import React from 'react'

export default function billing() {
  return (
    
    <div className='w-full flex flex-row justify-center items-center mr-3'>
      <div>
        <h1 className='font-bold text-4xl text-center mb-9'>Billing Details</h1>
     
      <div className='space-y-3'>
        <h1>Firstname</h1>
      <input type="text" placeholder='name'className='outline rounded-sm px-3 py-2' />
      <h1>Last name</h1>
      <input type="text" className='outline  rounded-sm px-3 py-2' placeholder='last name'/>
      <h1>Country/ Region</h1>
      <input type="text" placeholder='Country' className='outline  rounded-sm px-3 py-2'/>
      <h1>Street Address</h1>
      <input type="text" className='border-spacing-2 outline  rounded-sm px-3 py-2' placeholder='Street'/>
      <h1>Town/City</h1>
      <input type="text" placeholder='Town' className='outline  rounded-sm px-3 py-2'/>
      <h1>Province</h1>
      <input type="text" className='border-spacing-2 outline  rounded-sm px-3 py-2' placeholder='province'/>
      <h1>Zip Code </h1>
      <input type="text" className='border-spacing-2 outline  rounded-sm px-3 py-2' placeholder='Zip'/>
      <h1>Postal Address</h1>
      <input type="text" placeholder='name' className='outline  rounded-sm px-3 py-2' />
      <h1>E-mail Address</h1>
      <input type="text" className='border-spacing-2 outline  rounded-sm px-3 py-2' placeholder='E-mail'/>
      <h1>Reference No</h1>
      <input type="text" placeholder='Ref' className='outline  rounded-sm px-3 py-2' />
      <br />
      
      <input type="text" className='border-spacing-2 row-5 outline  rounded-sm px-3 py-2' placeholder='Additional information'/>
      </div>
    </div>
    <div className='flex flex-row space-x-5 text-left shadow-md px-8'>
      <div className='w-50px space-y-3'>
        <h3 className='text-2xl font-bold '>Product</h3> <span>Asguardsofa x 1</span>
        <h5>Subtotal</h5>
        <span>total</span>
      </div>
     <div className='flex flex-row'>
      <div className='space-x-4 shadow-md '>
        <h3 className='text-2xl font-bold'>Subtotal</h3>
        <h4>Rs.2500,00,00</h4>
        <h4 className='line line-through font-normal text-slate-500'>Rs. 356,00,000</h4>
        <h3 className='font-bold text-md'>Rs.2500,00,00</h3>
      </div>
      </div>
      <div>
          <div className='w-96 h-96 shadow-sm'>
    <h1 className='text-2xl text-center font-semibold'>
        Direct Bank Transfer
    </h1>
    <p className='text-sm text-justify text-slate-400'>Make your payment directly into our bank account.
         Please use your Order ID as the payment reference.
          Your order will not be shipped until the funds
           have cleared in our account.</p>

<input type="checkbox" className='outline-8'/> <span>Direct Bank Transfer</span> <br />
<input type="checkbox" className='outline-8'/><span>Cash On Delievery</span>

           <p>Your personal data will be used to support your experience
             throughout this website, to manage access to your account,
             and for other purposes described in our privacy policy.</p>

             <button className='px-4 py-3 rounded-full bg-pink-200 hover:bg-orange-400 text-black text-2xl'>PLACE ORDER</button>
</div>
    </div>
    </div>
    </div>
     
    
  )
}
