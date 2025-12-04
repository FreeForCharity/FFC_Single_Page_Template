import React from 'react'
import Link from 'next/link'

const index = () => {
  return (
    <div className="w-full max-w-[100%] py-[54px] ">
      <div className="w-[80%] max-w-[90%] mx-auto py-[2%] flex flex-col items-center justify-center text-center">
        <div>
          <h1 className="text-[22px] font-[500] text-black" id="lato-font">
            Have questions about consultation or hosting? Want to know more about nonprofits?
            Looking to chat? Give a real person a call:
          </h1>
          <p className="text-[22px] font-[500] text-black" id="lato-font">
            Clarke Moyer{' '}
            <Link className="text-[#f58c23]" href="tel:+15202228104">
              (520) 222-8104
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default index
