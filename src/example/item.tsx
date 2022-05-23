import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';

export function Item(props: any) {
  return (
    <Col xs={12}>
      <Row>
        <Col>{props.currency}</Col>
        <Col></Col>
        <Col>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
        </Col>
      </Row>
    </Col>
  );
}
