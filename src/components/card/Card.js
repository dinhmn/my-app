import React from "react";
import styled, { css } from "styled-components";
/**
 * const StyledCard = styled.tag(h1, h2, div, span, strong, a, p, section, article...)``
 * @returns
 */
const StyledCard = styled.div`
  position: relative;
`;
const CardImage = styled.div`
  height: 400px;
  width: 100%;
  border-radius: 8px;
`;
const CardImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
`;
const CardContent = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 50%);
  width: calc(100% - 90px);
  bottom: 0;
  background-color: white;
  z-index: 10;
  border-radius: 20px;
  padding: 20px;
`;
const CartTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;
const CartUser = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
`;
const UserAvatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100rem;
  flex-shrink: 0;
  object-fit: cover;
`;
const UserName = styled.span`
  font-weight: 300;
  font-size: 16px;
  color: #333;
`;
const CartFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const CartTitle = styled.h3`
  font-size: 18px;
  font-weight: 500;
  color: black;
`;
const CartAmount = styled.span`
  font-size: ${(props) => props.fontSize || "18px"};
  font-weight: bold;
  ${(props) =>
    props.secondary &&
    css`
      background: linear-gradient(86.88deg, #20e3b2, #2cccff);
    `};
  ${(props) =>
    !props.secondary &&
    css`
      background: linear-gradient(
        86.88deg,
        #7d6aff 1.38%,
        #ffb86c 64.35%,
        #fc2872 119.91%
      );
    `};
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
`;
const CartMeta = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
`;

const Card = (props) => {
  return (
    <StyledCard>
      <CardImage>
        <CardImg
          src="https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?compress=1&resize=1200x900&vertical=top"
          alt=""
        />
      </CardImage>
      <CardContent>
        <CartTop>
          <CartUser>
            <UserAvatar
              src="https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?compress=1&resize=1200x900&vertical=top"
              alt=""
            />
            <UserName>@zndrson</UserName>
          </CartUser>
          <CartMeta>
            <img src="/icon-heart.svg" alt="" />
            <span>256</span>
          </CartMeta>
        </CartTop>
        <CartFooter>
          <CartTitle>Cosmic Perspective</CartTitle>
          <CartAmount secondary={props.secondary} fontSize="16px">
            12,000 PSL
          </CartAmount>
        </CartFooter>
      </CardContent>
    </StyledCard>
  );
};

export default Card;
