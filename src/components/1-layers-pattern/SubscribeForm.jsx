import { styled, StyleSheetManager } from "styled-components";
import { spaceSchema, blue } from "../../utils";

export const Layers = styled.div`
  display: grid;
  gap: ${
  (props) =>  spaceSchema[props.gutter] ?? spaceSchema.l
  };
  background-color: ${
  (props) =>  blue[props.color] ?? blue["500"]
  };
`;

const SubscribeForm = () => {
  return (
    <StyleSheetManager shouldForwardProp={
      prop => prop !== 'gutter' && prop !== 'color'
      }>
      <Layers gutter="s">
        <Layers gutter="s">
          <h2>Subscribe To Our Newsletter</h2>
          <p>
            Subscribe to our newsletter to keep up to date on all our amazing
            products.
          </p>
        </Layers>

        <Layers>
          <Layers gutter="s" color="400">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
          </Layers>

          <Layers gutter="s">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" />
          </Layers>

          <button>Subscribe</button>
        </Layers>
      </Layers>
    </StyleSheetManager>
  );
};

export default SubscribeForm;
