import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 0 2rem;

  .container-id {
    z-index: 1000;
    position: relative;
    top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #535662;
    border: 2px solid #100b16;
    border-radius: 1rem;
    transform: rotate(-43deg);
    padding: 1rem;
    width: 3rem;
    height: 3rem;

    .pokemon-id {
      transform: rotate(43deg);
      color: #fff;
      font-size: 1.2rem;
    }
  }

  .pokemon-img-container {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #b4adbe;
    border: 2px solid #100b16;
    border-radius: 0.4rem;
    width: 200px;
    height: 200px;
    transition: filter 0.2s;
    cursor: pointer;

    &:hover {
      filter: brightness(0.9);
    }

    .pokemon-img {
      position: relative;
      bottom: 5px;
      width: 125px;
    }
  }

  .container-name {
    position: relative;
    bottom: 50px;
    background: #7e7394;
    color: #fff;
    padding: 0.9rem 1rem;
    border: 2px solid #100b16;
    border-radius: 1rem;
    width: 160px;

    .pokemon-name {
      text-transform: capitalize;
      font-weight: 400;
      font-size: 1rem;
      text-align: center;
    }
  }

  .types {
    display: flex;
    z-index: 100;

    .normal,
    .fighting,
    .flying,
    .poison,
    .ground,
    .rock,
    .bug,
    .ghost,
    .steel,
    .water,
    .grass,
    .psychic,
    .ice,
    .dragon,
    .dark,
    .fairy,
    .unknown,
    .shadow,
    .fire,
    .electric {
      display: flex;
      position: relative;
      bottom: 40px;
      padding: 0.2rem 0.4rem;
      margin-left: 0.3rem;
      text-align: center;
      border-radius: 0.3rem;
      font-size: 0.8rem;
      font-weight: 500;
      text-transform: capitalize;
    }

    .normal {
      color: #fff;
      background: #a8a878;
    }

    .fighting {
      background: #c03028;
      color: #fff;
    }

    .flying {
      background: #a890f0;
      color: #fff;
    }

    .poison {
      background: #a040a0;
      color: #fff;
    }

    .ground {
      background: #e0c068;
      color: #000;
    }

    .rock {
      background: #b8a038;
      color: #fff;
    }

    .bug {
      background: #a8b820;
      color: #fff;
    }

    .ghost {
      background: #705898;
      color: #fff;
    }

    .steel {
      background: #b8b8d0;
      color: #000;
    }

    .water {
      background: #6890f0;
      color: #fff;
    }

    .grass {
      background: #78c850;
      color: #000;
    }

    .psychic {
      background: #f85888;
      color: #fff;
    }

    .ice {
      background: #98d8d8;
      color: #000;
    }

    .dragon {
      background: #7038f8;
      color: #fff;
    }

    .dark {
      background: #705848;
      color: #fff;
    }

    .fairy {
      background: #ffaec9;
      color: #fff;
    }

    .unknown {
      background: #cf8ccc;
      color: #000;
    }

    .shadow {
      background: #394274;
      color: #fff;
    }

    .fire {
      background: #f08030;
      color: #fff;
    }

    .electric {
      background: #f8d030;
      color: #000;
    }
  }
`;
