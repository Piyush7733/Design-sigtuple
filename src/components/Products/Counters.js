import React, { useEffect, useState } from "react";

const Counters = () => {
    const [show, setShow] = useState(false);
    const [partners, setPartners] = useState(0);
    const [advisors, setAdvisors] = useState(0);
    const [RND, setRND] = useState(0);

    useEffect(() => {
        if (show && partners < 20) {
            let id = setTimeout(() => {
                let counter = partners + 1;
                setPartners(counter);
            }, 10);
            return () => {
                clearTimeout(id);
            };
        }
    }, [show, partners]);

    useEffect(() => {
        if (show && advisors < 50) {
            let id = setTimeout(() => {
                let counter = advisors + 1;
                setAdvisors(counter);
            }, 10);
            return () => {
                clearTimeout(id);
            };
        }
    }, [show, advisors]);

    useEffect(() => {
        if (show && RND < 6) {
            let id = setTimeout(() => {
                let counter = RND + 1;
                setRND(counter);
            }, 100);
            return () => {
                clearTimeout(id);
            };
        }
    }, [show, RND]);

    return (
        <div className="policy-area" onMouseOver={(e) => {
            setShow(true);
        }}>
            <div className=" container">
                <div className="row">
                    <div className="col-12 policy ">
                        <div className="my-auto w-100">
                            <div className="p-4 m-auto d-xxl-flex d-xl-flex d-lg-flex justify-content-between policy-list">
                                <div className="policy-list-item">
                                    <div className="d-flex mt-2">
                                        <h1>{partners}+</h1>
                                        <p className="text-description mt-auto ps-3">
                                            Clinical Trial<br />
                                            Partners
                                        </p>
                                    </div>
                                </div>
                                <div className="policy-list-item">
                                    <div className="d-flex mt-2">
                                        <h1>{advisors}+</h1>
                                        <p className="text-description mt-auto ps-3">
                                            Expert<br />
                                            Advisors
                                        </p>
                                    </div>
                                </div>
                                <div className="policy-list-item item-last">
                                    <div className="d-flex mt-2">
                                        <h1>{RND}+</h1>
                                        <p className="text-description mt-auto ps-3">
                                            Years of<br />
                                            R&D
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Counters;
