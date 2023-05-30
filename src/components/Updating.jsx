function Updating() {
  return (
    <div className="updating">
      <h1>Updating:</h1>
      <p>
        An update can be caused by changes to props or state. These methods are
        called in the following order when a component is being re-rendered
      </p>{" "}
      <br />
      <ul> </ul>
      <li>static getDerivedStateFromProps()</li>
      <li>shouldComponentUpdate()</li>
      <li>render()</li>
      <li>getSnapshotBeforeUpdate()</li>
      <li>componentDidUpdate()</li>
      <div className="note"> <br />
        <strong>Note:</strong>
        <ul>These methods are considered legacy and you should avoid them in new code:</ul>
        <li>UNSAFE_componentWillUpdate()</li>
        <li>UNSAFE_componentWillReceiveProps()</li>
      </div>
    </div>
  );
}
export default Updating;
