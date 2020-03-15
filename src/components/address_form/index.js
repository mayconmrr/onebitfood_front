import React, { Component, Fragment } from 'react';
import { Input, Column, Title, Button, Field, Control, Label, Select } from "rbx";

import statesList from './states_list';

class AddressForm extends Component {
  render() {
    return (
      <Fragment>
        <Column.Group>
          <Column size={10} offset={1}>
            <Title size={5} className="has-text-custom-gray-darker status_msg">
              Endereço de entrega
            </Title>
          </Column>
        </Column.Group>
        <Column.Group>
          <Column size={10} offset={1}>
            <form>
              <Field>
                <Label>Estado</Label>
                <Control>
                  <Select.Container fullwidth>
                    <Select required>
                      {statesList.map((state, i) => {
                        return <Select.Option key={i} value={state}>{state}</Select.Option>
                      })}
                    </Select>
                  </Select.Container>
                </Control>
              </Field>
              <Field>
                <Label>Cidade</Label>
                <Control>
                  <Input
                    type="text"
                    placeholder="São Paulo..."
                    required
                  />
                </Control>
              </Field>

              <Field>
                <Label>Endereço</Label>
                <Control>
                  <Input
                    type="text"
                    placeholder="Av Paulista..."
                    required
                  />
                </Control>
              </Field>

              <Field horizontal>
                <Field.Body>
                  <Field>
                    <Label>Numero</Label>
                    <Control>
                      <Input
                        type="text"
                        placeholder="15"
                        required
                      />
                    </Control>
                  </Field>
                  <Field>
                    <Label>Cep</Label>
                    <Control>
                      <Input
                        type="text"
                        placeholder="13720-000"
                        required
                      />
                    </Control>
                  </Field>
                </Field.Body>
              </Field>

              <Field>
                <Label>Complemento</Label>
                <Control>
                  <Input
                    type="text"
                    placeholder="Av Paulista..." />
                </Control>
              </Field>

              <Field>
                <Label>Referência</Label>
                <Control>
                  <Input
                    type="text"
                    placeholder="Av Paulista..." />
                </Control>
              </Field>
              <br />
              <Field kind="group" align="centered">
                <Control>
                  <Button size="medium" color="custom-orange">
                    <span className="has-text-white">Salvar endereço</span>
                  </Button>
                </Control>
              </Field>
            </form>
          </Column>
        </Column.Group>
      </Fragment>
    )
  }

}

export default AddressForm;
