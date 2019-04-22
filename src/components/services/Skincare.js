import React from 'react';

const Skincare = () => {
    return (
        <div className="menu-bot">
            <h5 className="services-sub">SKIN CARE</h5>
            <table className="table-menu">
                <tbody>
                    <tr>
                        <td className="column-block">
                            <div>
                                <strong className="menu menu-title">Basic European Facial</strong>
                                <span className="divider"> | </span>
                                <span><em className="menu menu-item-description">Enjoy a cleansing and complementary skin analysis, followed by blackhead removal, light exfoliation, massage, mask &amp; moisture.</em></span>
                            </div>
                        </td>
                        <td className="column-block menu-price">
                            <span>50</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
export default Skincare;