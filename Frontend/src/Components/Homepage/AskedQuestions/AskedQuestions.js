import "./AskedQuestions.css";

import React from 'react'
import ask11 from "./../../../Assets/ask11.png";
import ask12 from "./../../../Assets/ask12.png";
import ask13 from "./../../../Assets/ask13.png";

function AskedQuestions() {
  return (
    <div className="ask-layout1">
      <div className="ask-layout2">
        <div className="ask-layout4">
          <div className="ask-layout9"></div>
          <div className="ask-layout10">
            <p className="ask-content1">Process</p>
          </div>
        </div>
        <div className="ask-layout5">
          <p class="ask-content2">
            <span>Frequently Asked </span>
            <span class="ask-content3">Question</span>
          </p>
        </div>
        <div className="ask-layout6">
          <p className="ask-content4">
            Appropriately enhance principle-centered innovation rather than high
            standards in platforms. Credibly orchestrate functional.
          </p>
        </div>
        <div className="ask-layout7">
          <div className="ask-layout11">
            <div className="ask-layout12">
              <img src={ask12} alt="icon" className="ask-icon12" />
            </div>
            <div className="ask-layout13">
              <p className="ask-content5">Communicate orthogonal process</p>
            </div>
          </div>
          <div className="ask-layout11">
            <div className="ask-layout12">
              <img src={ask12} alt="icon" className="ask-icon12" />
            </div>
            <div className="ask-layout13">
              <p className="ask-content5">
                Professionally grow cutting-edge paradigms
              </p>
            </div>
          </div>
          <div className="ask-layout11">
            <div className="ask-layout12">
              <img src={ask12} alt="icon" className="ask-icon12" />
            </div>
            <div className="ask-layout13">
              <p className="ask-content5">Communicate orthogonal process</p>
            </div>
          </div>
          <div className="ask-layout11">
            <div className="ask-layout12">
              <img src={ask12} alt="icon" className="ask-icon12" />
            </div>
            <div className="ask-layout13">
              <p className="ask-content5">
                Professionally grow cutting-edge paradigms
              </p>
            </div>
          </div>
        </div>
        <div className="ask-layout8">
          <button type="button" className="ask-content11">
            <img src={ask11} alt="icon" className="ask-icon11" />
            More About
          </button>
        </div>
      </div>
      <div className="ask-layout3">
        <div id="accordion">
          <div class="card11">
            <div class="card-header11" id="headingOne">
              <h5 class="mb-0">
                <button
                  class="btn btn-link"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  <img src={ask13} alt="icon" className="ask-icon13" />
                  What is Finance Consultant?
                </button>
              </h5>
            </div>

            <div
              id="collapseOne"
              class="collapse show"
              aria-labelledby="headingOne"
              data-parent="#accordion"
            >
              <div class="card-body11">
                Continually cultivate inexpensive convergence whereas
                collaborative communitie. Credib generate team building vorta
                after professional value. Proactively administrate enabled
                paradigm
              </div>
            </div>
          </div>
          <div class="card11">
            <div class="card-header11" id="headingTwo">
              <h5 class="mb-0">
                <button
                  class="btn btn-link collapsed"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <img src={ask13} alt="icon" className="ask-icon13" />
                  How to Book a New Consultant?
                </button>
              </h5>
            </div>
            <div
              id="collapseTwo"
              class="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordion"
            >
              <div class="card-body11">
                Continually cultivate inexpensive convergence whereas
                collaborative communitie. Credib generate team building vorta
                after professional value. Proactively administrate enabled
                paradigm
              </div>
            </div>
          </div>
          <div class="card11">
            <div class="card-header11" id="headingThree">
              <h5 class="mb-0">
                <button
                  class="btn btn-link collapsed"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  <img src={ask13} alt="icon" className="ask-icon13" />
                  How to Book a New Consultant?
                </button>
              </h5>
            </div>
            <div
              id="collapseThree"
              class="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordion"
            >
              <div class="card-body11">
                Continually cultivate inexpensive convergence whereas
                collaborative communitie. Credib generate team building vorta
                after professional value. Proactively administrate enabled
                paradigm
              </div>
            </div>
          </div>
          <div class="card11">
            <div class="card-header11" id="headingfour">
              <h5 class="mb-0">
                <button
                  class="btn btn-link collapsed "
                  data-toggle="collapse"
                  data-target="#collapsefour"
                  aria-expanded="false"
                  aria-controls="collapsefour"
                >
                  <img src={ask13} alt="icon" className="ask-icon13" />
                  How to Book a New Consultant?
                </button>
              </h5>
            </div>
            <div
              id="collapsefour"
              class="collapse"
              aria-labelledby="headingfour"
              data-parent="#accordion"
            >
              <div class="card-body11">
                Continually cultivate inexpensive convergence whereas
                collaborative communitie. Credib generate team building vorta
                after professional value. Proactively administrate enabled
                paradigm
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AskedQuestions
