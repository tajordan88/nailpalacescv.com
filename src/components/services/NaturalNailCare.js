import React from 'react';

const NaturalNailCare = () => {
  return (
    <div className="menu-bot smaller-menu">
      <h5 className="services-sub">NATURAL NAIL CARE</h5>
      <table className="table-menu">
        <tbody>
          <tr>
            <td className="column-block">
              <div>
                <strong className="menu menu-title">Basic Manicure</strong>
              </div>
            </td>
            <td className="column-block menu-price small-menu-text-left">
              <span>$20</span>
            </td>
          </tr>
          <tr>
            <td className="column-block">
              <div>
                <strong className="menu menu-title">Gel Manicure</strong>
              </div>
            </td>
            <td className="column-block menu-price small-menu-text-left">
              <span>$30</span>
            </td>
          </tr>
          <tr>
            <td className="column-block">
              <div>
                <strong className="menu menu-title">Gel Manicure French</strong>
              </div>
            </td>
            <td className="column-block menu-price small-menu-text-left">
              <span>$35</span>
            </td>
          </tr>
          <tr>
            <td className="column-block">
              <div>
                <strong className="menu menu-title">Take Off Gel</strong>
              </div>
            </td>
            <td className="column-block menu-price small-menu-text-left">
              <span>$5</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default NaturalNailCare;
