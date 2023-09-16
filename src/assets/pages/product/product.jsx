import { FaTools, FaTrash } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import Loading from '../../components/loading-panel/loading';
import { AddPanel } from '../../components/add-panel/addpanel';
import {
  ButtonWrapper,
  Column,
  Panel,
  Row,
} from '../../components/dashboard/dashboard-style';
import axios from '../../services/axios/axios';

const enums = {
  T_SHIRT: 'camiseta',
  LONG_SLEEVES: 'manga longa',
  SWEATSHIRT: 'moletom',
  REGATTA: 'regata',
  PANTS: 'calça',
  SHORTS: 'shorts',
};

export const ProductPanel = () => {
  const [products, setProducts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const typeParam = searchParams.get('type');

  useEffect(() => {
    async function getData() {
      setIsLoading(true);

      const updatedSearchParams = new URLSearchParams(searchParams);

      if (typeParam) {
        updatedSearchParams.set('type', typeParam);
      }
      else {
        updatedSearchParams.delete('type');
      }

      const queryString = updatedSearchParams.toString();

      try {
        let response = await axios.get(
          `/products${queryString ? `?${queryString}` : ''}`
        );
        const productsWithReadableTypes = response.data.content.map((prod) => ({
          ...prod,
          model: enums[prod.model],
        }));
        setProducts(productsWithReadableTypes);
        setIsLoading(false);
      } catch (e) {
        return e;
      }
    }

    getData();
  }, [typeParam, searchParams]);

  const handleSelectType = (event) => {
    console.log(event.target.value)
    setSearchParams({ type: event.target.value });
  };

  const handleUpdate = () => {
    toast.success('oi');
  };

  const handleProductCreated = () => {
    setIsActive(false);
  };



  return (
    <>
      {isActive ? <AddPanel productCreated={handleProductCreated} /> : <></>}
      <Loading isLoading={isLoading} />
      <Panel>
        <strong>
          <h1>Produtos</h1>
        </strong>
        <ButtonWrapper>
          <button onClick={() => setIsActive(true)}>Adicionar</button>
        </ButtonWrapper>

        <label htmlFor="clothes">
          Por tipo
          <br />
          <select id="clothes" onChange={handleSelectType}>
            <option value="">Tudo</option>
            <option value="T_SHIRT">Camiseta</option>
            <option value="PANTS">Calça</option>
            <option value="REGATTA">Regata</option>
            <option value="SHORTS">Shorts</option>
          </select>
        </label>
        <table>
          <thead>
            <tr>
              <th>Indice</th>
              <th>Nome</th>
              <th>Modelo</th>
              <th>Preço</th>
              <th>Descrição</th>
            </tr>
          </thead>
          <tbody>
            {products.map((prod, index) => (
              <Row className="rows" key={index}>
                <Column>{index + 1}</Column>
                <Column>{prod.name}</Column>
                <Column>{prod.model}</Column>
                <Column>{prod.pricePerItem}</Column>
                <Column>{prod.description}</Column>
                <Column>
                  <FaTools
                    className="manage"
                    onClick={() => {
                      handleUpdate(prod, index);
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
