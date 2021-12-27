import styled from "styled-components";

export const MoviesWrap = styled.div`
  img {
    width: 100%;
  }
  .Img_block {
    position: relative;
    overflow: hidden;
    cursor: pointer;
    &:hover {
      .absolute_block {
        height: 200px;
      }
    }
  }
  .absolute_block {
    color: #fff;
    position: absolute;
    padding: 12px;
    width: 100%;
    height: 75px;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #00000040;
    backdrop-filter: blur(10px);
    transition: 0.5s all ease-in-out;

    .release {
      display: flex;
      align-items: center;
      .country {
        font-size: 1.1rem;
      }
      .date {
        color: #ffbd35;
        margin-left: 10px;
      }
    }
    h1 {
      font-size: 1.4rem;
      line-height: 2.6rem;
      max-height: 50px;
      overflow: hidden;
    }
    .details {
      margin-bottom: 10px;
      .logo {
        font-size: 0.8rem;
        color: black;
        background-color: #ffbd35;
        font-family: "shizuru", Arial, Helvetica, sans-serif !important;
        padding: 5px;
        border-radius: 5px;
      }
      .average {
        font-size: 1rem;
        margin-left: 10px;
      }
    }
    .choose {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .watch {
        flex-grow: 1;
        background-color: #1c6dd0;
        color: #fff;
        padding: 6px;
        text-align: center;
        font-size: 1rem;
        border-radius: 4px;
        box-shadow: 2px 2px 10px #1c6dd5;
        transition: 0.2s all ease-in-out;
        &:hover {
          box-shadow: 3px 3px 15px #1c6dd5;
        }
        &:active {
          box-shadow: 1px 1px 5px #1c6dd5;
        }
        .plus {
          font-size: 1.4rem;
        }
      }
      .wishlist {
        padding: 0 10px;
        height: 100%;
        background-color: #ffbd35;
        color: #fff;
        font-size: 25px;
        border: none;
        border-radius: 4px;
        margin-left: 10px;
        box-shadow: 2px 2px 10px #ffbd35;
        transition: 0.2s all ease-in-out;
        &:hover {
          box-shadow: 3px 3px 15px #ffbd35;
        }
        &:active {
          box-shadow: 1px 1px 5px #ffbd35;
        }
      }
    }
  }
`;
