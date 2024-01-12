import styled, { css } from "styled-components";

interface AccordionItemProps {
  isActive: boolean;
}

export const AccordionContainer = styled.ul`
 display: flex;
  flex-direction: column;
  gap: 16px;
  list-style: none;
  padding: 0;
  margin: 0;

  .accordion-item {
    background: #f1f1f1;
    padding: 24px 34px;

    @media (max-width: 768px) {
      padding: 18px 24px;
    }

    @media (max-width: 425px) {
      padding: 13px 16px;
    }

    .accordion-header {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;

      .accordion-header-icon {
        line-height: 0;
        margin-right: 0.5rem;
      }

      .accordion-header-title {
        font-size: 1.5rem;
        font-family: 'Roboto';
        color: #2d2d2d;

        @media (max-width: 768px) {
          font-size: 1rem;
        }

        @media (max-width: 425px) {
          font-size: 0.75rem;
        }
      }
    }

    .accordion-content {
      max-height: 0px;
      overflow: hidden;
    }

    &.isActive {
      .accordion-header {
        .accordion-header-icon {
          transform: rotate(180deg);
          transition: all 0.3s linear;
        }
      }
      .accordion-content {
        margin-top: 1rem;
        max-height: 1000px;
        transition: all 0.3s ease-in-out;

        @media (max-width: 425px) {
          margin-top: 0.5rem;
        }
      }
    }
  }
`

export const AccordionItem = styled.li<AccordionItemProps>`
    background: #f1f1f1;
    padding: 24px 34px;

    @media (max-width: 768px) {
      padding: 18px 24px;
    }

    @media (max-width: 425px) {
      padding: 13px 16px;
    }

    .accordion-header {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;

      .accordion-header-icon {
        line-height: 0;
        margin-right: 0.5rem;

        ${({ isActive }) => isActive && css`
        transform: rotate(180deg);
          transition: all 0.3s linear;
        `}
      }

      .accordion-header-title {
        font-size: 1.5rem;
        font-family: 'Roboto';
        color: #2d2d2d;

        @media (max-width: 768px) {
          font-size: 1rem;
        }

        @media (max-width: 425px) {
          font-size: 0.75rem;
        }
      }
    }

    .accordion-content {
      max-height: 0px;
      overflow: hidden;

      ${({ isActive }) => isActive && css`
      margin-top: 1rem;
        max-height: 1000px;
        transition: all 0.3s ease-in-out;

        @media (max-width: 425px) {
          margin-top: 0.5rem;
        }
        `}
    }

    &.isActive {
      .accordion-header {
        .accordion-header-icon {
          transform: rotate(180deg);
          transition: all 0.3s linear;
        }
      }
      .accordion-content {
        margin-top: 1rem;
        max-height: 1000px;
        transition: all 0.3s ease-in-out;

        @media (max-width: 425px) {
          margin-top: 0.5rem;
        }
      }
    }
`