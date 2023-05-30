function UnMounting() {
  return (
    <div className="unMounting">
      <h1>Unmounting:</h1>
      <p>
        The componentWillUnmount() method allows us to execute the React code
        when the component gets destroyed or unmounted from the DOM (Document
        Object Model). This method is called during the Unmounting phase of the
        React Life-cycle i.e before the component gets unmounted.
      </p> <br />
      <p>
        All the cleanups such as invalidating timers, canceling network
        requests, or cleaning up any subscriptions that were created in
        componentDidMount() should be coded in the componentWillUnmount() method
        block.
      </p> <br />
      <p>Tip: Never call setState() in componentWillUnmount() method.</p>
      <br />
      <ul> </ul>
      <li>componentWillUnmount()</li>
    </div>
  );
}
export default UnMounting;
