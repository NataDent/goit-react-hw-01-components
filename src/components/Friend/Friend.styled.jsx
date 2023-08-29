import styled from 'styled-components';

const getBackgroundColor = props => {
  console.log(props);
  if (props.children) {
    return props.theme.colors.green;
  } else {
    return props.theme.colors.red;
  }
};

export const FriendItem = styled.li`
  display: flex;
  gap: 8px;
  padding: 8px;
  align-items: center;
  box-shadow: 4px 4px 8px black;
  border: 1px solid gray;
  border-radius: 5px;
`;

export const FriendStatus = styled.span`
  border-radius: 50%;
  width: 16px;
  height: 16px;
  background-color: ${getBackgroundColor};
`;

export const FriendName = styled.p`
  font-size: 24px;
  font-weight: 700;
`;
