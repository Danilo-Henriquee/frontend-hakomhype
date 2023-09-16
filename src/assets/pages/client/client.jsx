import { FaTools, FaTrash } from 'react-icons/fa';
import {
  ButtonWrapper,
  Column,
  Panel,
  Row,
} from '../../components/dashboard/dashboard-style';
import { useEffect, useState } from 'react';
import axios from '../../services/axios/axios';

import Loading from '../../components/loading-panel/loading';

export const ClientPanel = () => {
  const [clients, setClients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        const response = await axios.get('/clients');

        setClients(response.data);
        setIsLoading(false);
      } catch (e) {
        return e;
      }
    }

    getData();
  }, []);

  const handleUpdate = () => {};

  return (
    <>
      <Loading isLoading={isLoading} />
      <Panel>
        <strong>
          <h1>Clientes</h1>
        </strong>
        <ButtonWrapper>
          <button>Adicionar</button>
        </ButtonWrapper>
        <table>
          <thead>
            <tr>
              <th>Indice</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Telefone</th>
              <th>endereço</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((cli, index) => (
              <Row className="rows" key={index}>
                <Column>{index + 1}</Column>
                <Column>{cli.name}</Column>
                <Column>{cli.email}</Column>
                <Column>{cli.phone}</Column>
                <Column>{cli.address}</Column>
                <Column>
                  <FaTools
                    className="manage"
                    onClick={() => {
                      handleUpdate(cli, index);
                    }}
                  />
                  <FaTrash className="manage" />
                </Column>
              </Row>
            ))}
          </tbody>
        </table>
      </Panel>
    </>
  );
};
