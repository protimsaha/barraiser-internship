import React from 'react';
import useEmployees from './useEmployees';

const ColapsPage = () => {
    const [employeData] = useEmployees()

    return (
        <div class="accordion accordion-flush w-75  mx-auto mt-5" id="accordionFlushExample">

            <div class="accordion-item border border-dark">
                <h2 class="accordion-header" id="flush-heading">
                    <button className='btn d-flex justify-content-around w-100'>
                        <p>SVP</p>
                    </button>
                </h2>
            </div>

            <div class="accordion-item ms-4 border">
                <h2 class="accordion-header " id="flush-headingOne">
                    {employeData.map(ed => ed.id === 'EMP002' && <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        <div className='d-flex justify-content-between'>
                            <p>VP</p>
                        </div>
                    </button>)}
                </h2>
                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    {
                        employeData.map(ed => ed.designation === 'Director, Engineering' && <div class="accordion-body btn w-100"> {ed.id}</div>)
                    }
                </div>
            </div>
            {/* Director */}
            <div class="accordion-item me-4 border">
                <h2 class="accordion-header " id="flush-headingTwo">
                    {employeData.map(ed => ed.id === 'EMP006' && <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        <div className='d-flex justify-content-between'>
                            <p>Director</p>
                        </div>
                    </button>)}
                </h2>
                <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                    {
                        employeData.map(ed => ed.designation === 'Senior Manager' && <div class="accordion-body btn w-100"> {ed.id}</div>)
                    }
                </div>
            </div>

            {/* Senior Manager */}
            <div class="accordion-item ms-4 border">
                <h2 class="accordion-header " id="flush-headingThree">
                    {employeData.map(ed => ed.id === 'EMP020' && <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        <div className='d-flex justify-content-between'>
                            <p>Senior Manager</p>
                        </div>
                    </button>)}
                </h2>
                <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                    {
                        employeData.map(ed => ed.designation === 'Software Dev Manager' && <div class="accordion-body btn w-100"> {ed.id}</div>)
                    }
                </div>
            </div>

            {/* Senior Dev Manager */}
            <div class="accordion-item me-4 border">
                <h2 class="accordion-header " id="flush-headingFour">
                    {employeData.map(ed => ed.id === 'EMP020' && <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                        <div className='d-flex justify-content-between'>
                            <p>Senior Dev Manager</p>
                        </div>
                    </button>)}
                </h2>
                <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                    {
                        employeData.map(ed => ed.designation === 'SDE, Retail' && <div class="accordion-body btn w-100"> {ed.id}</div>)
                    }
                </div>
            </div>
        </div >
    );
};

export default ColapsPage;