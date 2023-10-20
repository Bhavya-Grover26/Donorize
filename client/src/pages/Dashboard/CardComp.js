import { Card, Row, Col } from "reactstrap";

const CardComp = () => {
  return (
    <>
        <Card className="overflow-hidden text-white border-0 credit-card-container">
          <Row>
            <Col>
              <div>
                <p className="font-weight-normal">Organization Name</p>
                <p className="font-weight-bold">XYZ</p>
              </div>
              <div className="pt-1">
                <p className="font-weight-normal">Organization Number</p>
                <p className="font-weight-bold">4642  3489  9867  7632</p>
              </div>
              <div className="pt-2 d-flex justify-content-between">
                <div>
                    <p class="font-weight-light text-xs">
                        Join date
                    </p>
                    <p class="font-weight-medium text-sm">
                        11/15
                    </p>
                </div>
                <div>
                    <p class="font-weight-light text-xs">
                        Password
                    </p>
                    <p class="font-weight-bold text-sm">
                        ·········
                    </p>
                </div>
              </div>
            </Col>
          </Row>
        </Card>
    </>
  )
}

export default CardComp;