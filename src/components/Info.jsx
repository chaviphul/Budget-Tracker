const Info = () => {
  return (
    <>
      <div className=" budget alert alert-primary box">
        <div>Budget: 1000</div>
        <button type="button" class="btn btn-primary">
          Edit
        </button>
      </div>
      <div className="remaining alert alert-success box"> Remaining: 550</div>
      <div className="spent alert alert-info box">Spent so far: 450</div>
    </>
  );
};
export default Info;
