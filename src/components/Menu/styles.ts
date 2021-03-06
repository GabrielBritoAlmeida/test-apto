import styled, { css } from 'styled-components'

const wrapperModifiers = {
  active: () => css`
    font-weight: bold;
    border-bottom: 0.2rem solid #f9826c;

    ${Image} {
      opacity: 1;
    }
  `
}

export const Container = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: flex-start;
`

export const Wrapper = styled.ul``

export const List = styled.ul`
  display: flex;
  justify-content: flex-start;
  width: 101rem;
`
type ItemMenuProps = {
  active: boolean
}

export const ItemMenu = styled.li<ItemMenuProps>`
  ${({ theme, active }) => css`
    display: flex;
    flex-direction: row;
    padding: 1rem;
    cursor: pointer;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      color: ${theme.colors.black};
      font-size: ${theme.font.sizes.small};
      position: relative;

      &:hover {
        &::after {
          content: '';
          position: absolute;
          bottom: -1rem;
          display: block;
          height: 0.2rem;
          background-color: ${!active && '#ddd'};
          animation: hoverAnimation 0.2s forwards;
        }

        @keyframes hoverAnimation {
          from {
            width: 0;
            left: 50%;
          }
          to {
            padding: 0 1rem;
            margin-left: -1rem;
            width: 100%;
            left: 0;
          }
        }
      }
    }

    ${!!active && wrapperModifiers.active};
  `};
`

export const Image = styled.img`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
    opacity: 0.6;
  `}
`

export const Name = styled.span`
  ${({ theme }) => css`
    margin: ${theme.spacings.xxsmall};
  `}
`
