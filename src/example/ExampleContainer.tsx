import React, { Fragment, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { exampleState } from '../localstate/example';
import { useApolloClient, useQuery, useReactiveVar } from '@apollo/client';
import { GET_RATES, GET_RATES_PLUS_CLIENT } from './queries/queries';
import { SearchExample } from './search';
import { Item } from './item';

export function ExampleContainer(props: any) {
  const state = useReactiveVar(exampleState);
  const { loading, error, data } = useQuery(GET_RATES);
  const client = useApolloClient();

  useEffect(() => {
    console.log(state, ' state changed');
    client.query({ query: GET_RATES_PLUS_CLIENT }).then((data) => {
      console.log(data, ' got this data using query');
    });
  }, [state.searchString]);

  if (loading) return <p> loading</p>;
  if (error) return <p> error</p>;

  return (
    <Fragment>
      <Container>
        <Row>
          <Col xs={12}>
            {state.searchString}
            <SearchExample />
          </Col>
        </Row>
        <Row>
          {data.rates
            .filter((f: any) => f.currency.includes(state.searchString.toUpperCase()))
            .map((item: any) => {
              return <Item currency={item.currency} />;
            })}
        </Row>
      </Container>
    </Fragment>
  );
}
