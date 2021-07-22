import React, { useEffect, useState } from "react";

const SectionCounter = () => {
  const [show, setShow] = useState(false);
  const [accuracy, setAccuracy] = useState(0);
  const [innovation, setInnovation] = useState(0);
  const [acceptance, setAcceptance] = useState(0);

  useEffect(() => {
    if (show && accuracy < 20) {
      let id = setTimeout(() => {
        let counter = accuracy + 1;
        setAccuracy(counter);
      }, 10);
      return () => {
        clearTimeout(id);
      };
    }
  }, [show, accuracy]);

  useEffect(() => {
    if (show && innovation < 15) {
      let id = setTimeout(() => {
        let counter = innovation + 1;
        setInnovation(counter);
      }, 10);
      return () => {
        clearTimeout(id);
      };
    }
  }, [show, innovation]);

  useEffect(() => {
    if (show && acceptance < 31) {
      let id = setTimeout(() => {
        let counter = acceptance + 1;
        setAcceptance(counter);
      }, 10);
      return () => {
        clearTimeout(id);
      };
    }
  }, [show, acceptance]);

  return (
    <div class="policy-area"  onMouseOver={(e) => {
      setShow(true);
    }}>
    <div class=" container">
        <div class="row">
            <div class="col-12 policy ">
                <div class="my-auto w-100">
                    <div class="p-4 m-auto d-xxl-flex d-xl-flex d-lg-flex justify-content-between policy-list">
                        <div class="policy-list-item">
                            <h5>ACCURACY</h5>
                            <div class="d-flex mt-2">
                                <h1>{accuracy}</h1>
                                <p class="text-description mt-auto ps-3">
                                    Clinical Studies<br />
                                    Performed
                                </p>
                            </div>
                        </div>
                        <div class="policy-list-item">
                            <h5>Innovation</h5>
                            <div class="d-flex mt-2">
                                <h1>{innovation}</h1>
                                <p class="text-description mt-auto ps-3">
                                    Granted Patents in<br />
                                    The US and India
                                </p>
                            </div>
                        </div>
                        <div class="policy-list-item item-last">
                            <h5>Acceptance</h5>
                            <div class="d-flex mt-2">
                                <h1>{acceptance}</h1>
                                <p class="text-description mt-auto ps-3">
                                    Publications in Medical<br />
                                    and Technical Journals
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    </div> 
</div>

    // <div
    //   className="policy container"
    //   onMouseOver={(e) => {
    //     setShow(true);
    //   }}
    //   // onMouseLeave={(e) => {
    //   //   setShow(false);
    //   //   setAccuracy(0);
    //   //   setInnovation(0);
    //   //   setAcceptance(0);
    //   // }}
    // >
    //   <div className="col-12 my-auto">
    //     <div className="p-4 m-auto d-flex flex-wrap justify-content-between">
    //       <div className="">
    //         <h5>ACCURACY</h5>
    //         <div className="d-flex mt-2">
    //           <h1>{accuracy}</h1>
    //           <p className="text-description mt-auto ps-3">
    //             Clinical Studies
    //             <br />
    //             Performed
    //           </p>
    //         </div>
    //       </div>
    //       <div className="">
    //         <h5>Innovation</h5>
    //         <div className="d-flex mt-2">
    //           <h1>{innovation}</h1>
    //           <p className="text-description mt-auto ps-3">
    //             Granted Patents in
    //             <br />
    //             The US and India
    //           </p>
    //         </div>
    //       </div>
    //       <div className="">
    //         <h5>Acceptance</h5>
    //         <div className="d-flex mt-2">
    //           <h1>{acceptance}</h1>
    //           <p className="text-description mt-auto ps-3">
    //             Publications in Medical
    //             <br />
    //             and Technical Journals
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};
export default SectionCounter;
