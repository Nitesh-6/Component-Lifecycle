function Mounting() {
  return (
    <div className="mounting">
      <h1>Mounting:</h1>
      <p>
        These methods are called in the following order when an instance of a
        component is being created and inserted into the DOM
      </p>{" "}
      <br />
      <ul> </ul>
      <li>constructor()</li>
      <li>static getDerivedStateFromProps()</li>
      <li>render()</li>
      <li>componentDidMount()</li>
      <div className="note">
        {" "}
        <br />
        <strong>Note:</strong>
        <ul>
          This method is considered legacy and you should avoid it in new code:
        </ul>
        <li>UNSAFE_componentWillMount()</li>
      </div>
    </div>
  );
}
export default Mounting;
