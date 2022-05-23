import React from 'react';
import { Form, Col } from 'react-bootstrap';
import { exampleState } from '../localstate/example';
import { useReactiveVar } from '@apollo/client';

export function SearchExample(props: any) {
  const state = useReactiveVar(exampleState);
  const onSearch = (e: any) => {
    console.log(e.target.value, ' changed value');
    exampleState({ ...exampleState(), searchString: e.target.value });
  };

  return (
    <Col xs={12}>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>
            Search
            {state.searchString}
          </Form.Label>
          <Form.Control
            value={state.searchString}
            onChange={onSearch}
            size="lg"
            type="email"
            placeholder="Search rates"
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
      </Form>
    </Col>
  );
}
