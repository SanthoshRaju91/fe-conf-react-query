import Element from "./Element";

export default function MerchantDetails({ details }) {
  return (
    <div className="w-11/12 mx-auto mt-10">
      <div className="flex flex-no-wrap items-stretch space-x-4">
        <div className="merchant-ratings__container-customerInfo w-1/2">
          <div className="w-full bg-white rounded border border-gray-300 h-64 pb-4">
            <div className="py-2 px-4">
              <h3 className="text-sm text-gray-700 font-medium">
                Merchant Information
              </h3>
              <div className="merchant-ratings__container-customerDetails mt-8">
                <div className="flex flex-wrap">
                  <Element label="Shop Name" value={details.shopName} />
                  <Element label="Shop ID" value={details.shopId} />
                  <Element label="Shop URL" value={details.shopUrl} />
                  <Element label="Company Name" value={details.companyName} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="merchant-ratings__container-creditAssessment w-1/2">
          <div className="w-full bg-white rounded border border-gray-300 h-64 pb-4">
            <div className="py-2 px-4">
              <h3 className="text-sm text-gray-700 font-medium">
                Credit Assessment
              </h3>
              <div className="merchant-ratings__container--creditAssessmentDetails mt-8">
                <div className="flex flex-wrap">
                  <Element label="Credit Score" value={details.creditScore} />
                  <Element label="Segment Value" value={details.segmentValue} />
                  <Element label="Churn Rate" value={details.churnRate} />
                  <Element
                    label="Calculation Date"
                    value={details.calculationDate}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
