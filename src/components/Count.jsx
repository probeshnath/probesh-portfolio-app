

const Count = () => {
  return (
    <div className="wrapperCount py-10" id="count">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 place-items-center gap-4 ">
          <div className="count-1">
            <div>
              <img src="images/fire.png" alt="" />
              <span>20+</span>
            </div>
            <p>Project Completed</p>
          </div>

          <div className="count-1">
            <div>
              <img src="images/coffe.png" alt="" />
              <span>140+</span>
            </div>
            <p>Cup of Coffe</p>
          </div>
          <div className="count-1">
            <div>
              <img src="images/user.png" alt="" />
              <span>5+</span>
            </div>
            <p>Satisfied Client</p>
          </div>
          <div className="count-1">
            <div>
              <img src="images/medal-solid.svg" alt="" />
              <span>3+</span>
            </div>
            <p>Award Won</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Count;
