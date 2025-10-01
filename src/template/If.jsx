const If = (props) => {
  return props.test ? props.children : null;
};

export default If;
