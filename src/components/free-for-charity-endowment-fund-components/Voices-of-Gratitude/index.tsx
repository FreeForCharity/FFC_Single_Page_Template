import React from 'react'

const index = () => {
  return (
    <div className="py-[54px] w-[90%] md:w-[80%] mx-auto">
      <h1
        className="text-[30px] md:text-[50px] font-[500] text-[#111] mb-[10px] pb-[10px] py-[27px] leading-[60px]"
        id="cinzel"
      >
        Voices of Gratitude
      </h1>

      {/* ---- Responsive wrapper ---- */}
      <div className="py-[27px] flex flex-wrap -mx-4 md:-mx-0">
        {/* Card 1 */}
        <div className="flex-1 min-w-[280px] md:w-[29%] px-4 md:px-0 md:mr-[60px] mb-8 md:mb-0">
          <div className="mb-[30px] text-[24px] text-[#003566] text-left flex gap-1">
            <b>★</b>
            <b>★</b>
            <b>★</b>
            <b>★</b>
            <b>★</b>
          </div>
          <div>
            <p
              className="text-[#0e0c19] text-[18px] mb-[10px] leading-[32px] font-[700]"
              id="fauna-font"
            >
              “Thanks to Free For Charity, our organization now has a professional online presence,
              which has significantly increased our visibility and donor engagement.”
            </p>
            <p
              className="text-[#000000a3] text-[16px] mb-[10px] leading-[32px] font-[500]"
              id="fauna-font"
            >
              [Draft]
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex-1 min-w-[280px] md:w-[29%] px-4 md:px-0 md:mr-[60px] mb-8 md:mb-0">
          <div className="mb-[30px] text-[24px] text-[#003566] text-left flex gap-1">
            <b>★</b>
            <b>★</b>
            <b>★</b>
            <b>★</b>
            <b>★</b>
          </div>
          <div>
            <p
              className="text-[#0e0c19] text-[18px] mb-[10px] leading-[32px] font-[700]"
              id="fauna-font"
            >
              “The free domain and email setup provided by Free For Charity have been invaluable in
              helping us streamline our communications and expand our reach.”
            </p>
            <p
              className="text-[#000000a3] text-[16px] mb-[10px] leading-[32px] font-[500]"
              id="fauna-font"
            >
              [Draft]
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex-1 min-w-[280px] md:w-[29%] px-4 md:px-0">
          <div className="mb-[30px] text-[24px] text-[#003566] text-left flex gap-1">
            <b>★</b>
            <b>★</b>
            <b>★</b>
            <b>★</b>
            <b>★</b>
          </div>
          <div>
            <p
              className="text-[#0e0c19] text-[18px] mb-[10px] leading-[32px] font-[700]"
              id="fauna-font"
            >
              “We are grateful for the support from Free For Charity. Their services have allowed us
              to focus more on our core mission and less on administrative tasks.”
            </p>
            <p
              className="text-[#000000a3] text-[16px] mb-[10px] leading-[32px] font-[500]"
              id="fauna-font"
            >
              [Draft]
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index
