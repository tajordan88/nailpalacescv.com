import React from 'react';

const Pedicure = () => {
    return (
        <div className="menu-bot">
            <h5 className="services-sub">PEDICURE</h5>
            <table className="table-menu">
                <tbody>
                    <tr>
                        <td className="column-block">
                            <div>
                                <strong className="menu menu-title">Basic Pedicure</strong>
                                <span className="divider"> | </span>
                                <span><em className="menu menu-item-description">Not much time? A fast, yet thorough pedicure. Toes are shaped and buffed. Followed by a massage and polish. (For best results, add callus remover for an additional $7).</em></span>
                            </div>
                        </td>
                        <td className="column-block menu-price">
                            <span>18</span>
                        </td>
                    </tr>
                    <tr>
                        <td className="column-block">
                            <div>
                                <strong className="menu menu-title">Basic Manicure &amp; Pedicure Combo</strong>
                            </div>
                        </td>
                        <td className="column-block menu-price">
                            <span>28</span>
                        </td>
                    </tr>
                    <tr>
                        <td className="column-block">
                            <div>
                                <strong className="menu menu-title">Basic Spa Pedicure</strong>
                                <span className="divider"> | </span>
                                <span><em className="menu menu-item-description">Toes are soaked, shaped, and buffed. Lotion is applied and toes polished.</em></span>
                            </div>
                        </td>
                        <td className="column-block menu-price">
                            <span>25</span>
                        </td>
                    </tr>
                    <tr>
                        <td className="column-block">
                            <div>
                                <strong className="menu menu-title">Deluxe Spa Pedicure</strong>
                                <span className="divider"> | </span>
                                <span><em className="menu menu-item-description">Let us pamper you! Have your feet wrapped in a cool masque followed by sea serum. Then sit back &amp; enjoy your massage.</em></span>
                            </div>
                        </td>
                        <td className="column-block menu-price">
                            <span>38</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
export default Pedicure;