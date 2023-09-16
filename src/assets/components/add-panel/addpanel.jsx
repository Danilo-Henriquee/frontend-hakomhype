import { useState } from 'react';
import { toast } from 'react-toastify';
import { CiCircleRemove } from 'react-icons/ci';
import PropType from 'prop-types';

import { Container } from './addpanel.style';
import { GlobalStyle } from '../../style/global-styles';
import axios from '../../services/axios/axios';

export const AddPanel = ({ productCreated }) => {
  const [dates, setDates] = useState({
    name: '',
    model: '',
    pricePerItem: 0,
    description: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const {name, model, pricePerItem} = dates;

    console.log(dates)

    if (name === '') {
      toast.error('Campo nome é obrigatório');
      return;
    }
    if (model === '') {
      toast.error('Campo modelo é obrigatório');
      return;
    }
    if (pricePerItem <= 0) {
      toast.error('Campo preço é obrigatório');
      return;
    }

    try {
      await axios.post('/products', JSON.stringify(dates), {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      productCreated(true);
      toast.success('Produto criado com sucesso!')
    } catch (e) {
      return e;
    }
  };

  return (
    <>
    <CiCircleRemove />
      <GlobalStyle />
      <Container>
        <div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">
              Nome
              <input
                value={dates.name}
                id="name"
                type="text"
                onChange={(e) => setDates({ ...dates, name: e.target.value })}
              />
            </label>
            <label htmlFor="model">
              Modelo
              <select
                value={dates.model}
                id="model"
                onChange={(e) => setDates({ ...dates, model: e.target.value })}
              >
                <option value=""></option>
                <option value="T_SHIRT">Camiseta</option>
                <option value="LONG_SLEEVES">Manga longa</option>
                <option value="SWEATSHIRT">Moletom</option>
                <option value="REGATTA">Regata</option>
                <option value="PANTS">Calça</option>
                <option value="SHORTS">Shorts</option>
              </select>
            </label>
            <label htmlFor="price">
              Preço
              <input
                value={dates.price}
                id="price"
                type="number"
                onChange={(e) => setDates({ ...dates, pricePerItem: e.target.value })}
              />
            </label>
            <label htmlFor="description">
              Descrição
              <input
                value={dates.description}
                id="description"
                type="text"
                onChange={(e) =>
                  setDates({ ...dates, description: e.target.value })
                }
              />
            </label>
            <button type="submit">Adicionar</button>
          </form>
        </div>
      </Container>
    </>
  );
};

AddPanel.defaultProps = {
  productCreated: false,
}

AddPanel.propTypes = {
  productCreated: PropType.bool.isRequired,
}