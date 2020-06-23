import React from 'react';

const Pedicure = () => {
  return (
    <div className="menu-bot smaller-menu">
      <h5 className="services-sub">PEDICURE</h5>
      <table className="table-menu">
        <tbody>
          <tr>
            <td className="column-block">
              <div>
                <strong className="menu menu-title">Basic Pedicure</strong>
              </div>
            </td>
            <td className="column-block menu-price small-menu-text-left">
              <span>$20</span>
            </td>
          </tr>
          <tr>
            <td className="column-block">
              <div>
                <strong className="menu menu-title">
                  Deluxe Spa Pedicure Without Gel
                </strong>
              </div>
            </td>
            <td className="column-block menu-price small-menu-text-left">
              <span>$45</span>
            </td>
          </tr>
          <tr>
            <td className="column-block">
              <div>
                <strong className="menu menu-title">Gel Spa Pedicure</strong>
              </div>
            </td>
            <td className="column-block menu-price small-menu-text-left">
              <span>$40</span>
            </td>
          </tr>
          <tr>
            <td className="column-block">
              <div>
                <strong className="menu menu-title">Basic Spa Pedicure</strong>
              </div>
            </td>
            <td className="column-block menu-price small-menu-text-left">
              <span>$25</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Pedicure;
