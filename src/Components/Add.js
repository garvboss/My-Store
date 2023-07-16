import React, { useState, useEffect } from 'react';
  
export function Add() {

  const [isGroupSelected, setIsGroupSelected] = useState(false);

  const handleGroupCheckboxChange = (event) => {
    setIsGroupSelected(event.target.checked);
  }

  const [isScrollbarVisible, setIsScrollbarVisible] = useState(false);

  useEffect(() => {
    const handleWindowResize = () => {
      const hasScrollbar = document.documentElement.scrollHeight > window.innerHeight;
      setIsScrollbarVisible(hasScrollbar);
    };

    window.addEventListener('resize', handleWindowResize);
    handleWindowResize(); // Initial check

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <div className={`add ${isScrollbarVisible ? 'scrollbar-visible' : ''}`}>
      <div className="add-background">
        <h1 className="add_title">Add your new Purchase</h1>

        <div className="add_form">
        <form>

          <div>
          <label className="add_l" for=""><span>Title : </span></label>
          <input className="add_in" type="text"></input>
          </div>

          <div>
          <label className="add_l" for="">Price : </label>
          <input className="add_in" type = "number" placeholder="₹"></input>
          </div>
          
          <div className="add_textarea">
          <label className="add_textarea_label" for="">Description : </label>
          <textarea  className="add_textarea_t" type="text" placeholder="Enter some details"></textarea>
          </div>
          
          <div className="f">
          <div>
          <span className="add_source">Source : </span>
         
          <input className="add-on-check" type="checkbox"></input>
          <label className="add_on" for="">Online</label>
         
         
          <input className="add-off-check" type="checkbox"></input>
          <label className="add_off" for="">Offline</label>
       
          </div>
          </div>

          <div>
          <label className="add_l" for="">If Online : </label>
          <input className="add_in" type="text" placeholder="From where"></input>
          </div>

          <div>
          <label className="add_l" for="">If Offline : </label>
          <input className="add_in" type="text" placeholder="From where"></input>
          </div>

          <div>
          <label className="add_l" for="">Date of Purchase : </label>
          <input className="add_in" type="date"></input>
          </div>

          <div>
          <label className="add_l" for="">Rating from 1 to 5 : </label>
          <input className="add_in" type = "number" min="1" max="5" placeholder=""></input>
          </div>

          <div>
          <label className="add_l" for="">Upload a Picture : </label>
          <input className="add-picture-input" type="file"></input>
          </div>

          <div>
          <label className="add_group" for="">Do you want to add your new product in any Group : </label>
          <div className="add_c">
          <input type="checkbox" onChange={handleGroupCheckboxChange}></input>
          </div>
          </div>

          {isGroupSelected && (
            <div>
              <label className="add_l" htmlFor="">
                Select a Group:
              </label>
              <select className="add_trans">
                <option value="group1">Group 1</option>
                <option value="group2">Group 2</option>
                <option value="group3">Group 3</option>
              </select>
            </div>
          )}

          <button className="add_but">Add</button>

        </form>
        </div>
      </div>
    </div>
  )
}

export default Add