import { styled } from "styled-components";
import Form from "./form";
import { spaceSchema, fractions } from "../../utils";

export const Split = styled.div`
  display: grid;
  gap: ${(props) => spaceSchema[props.gutter] ?? spaceSchema.l};
  grid-template-columns: ${({ fraction }) =>
    fractions[fraction] ?? fractions["1/2"]};
`;

const InfoForm = () => {
  return (
    <Split fraction="1/3" gutter="xxl">
      <div>
        <h3>General Information</h3>
        <span>
          All the information you provide via this form will be exposed to the
          public.
        </span>
      </div>
      <Form />
    </Split>
  );
};

export default InfoForm;
