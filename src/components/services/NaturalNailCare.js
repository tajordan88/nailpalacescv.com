import React from 'react';

const NaturalNailCare = () => {
    return (
        <div className="menu-bot">
            <h5 className="services-sub">NATURAL NAIL CARE</h5>
            <table className="table-menu">
                <tbody>
                    <tr>
                        <td className="column-block">
                            <div>
                                <strong className="menu menu-title">Basic Manicure</strong>
                                <span className="divider"> | </span>
                                <span><em className="menu menu-item-description">Great when you're in a hurry. Nails are soaked, shaped, &amp; buffed. Lotion is applied and nails are polished.</em></span>
                            </div>
                        </td>
                        <td className="column-block menu-price">
                            <span>12</span>
                        </td>
                    </tr>
                    <tr>
                        <td className="column-block">
                            <div>
                                <strong className="menu menu-title">Sea Salt Manicure</strong>
                                <span className="divider"> | </span>
                                <span><em className="menu menu-item-description">Hands and arms are exfoliated with a sea salt scrub followed by an aromatherapy massage.</em></span>
                            </div>
                        </td>
                        <td className="column-block menu-price">
                            <span>17</span>
                        </td>
                    </tr>
                    <tr>
                        <td className="column-block">
                            <div>
                                <strong className="menu menu-title">Hot Oil Manicure</strong>
                                <span className="divider"> | </span>
                                <span><em className="menu menu-item-description">Best manicure for dry hands and nails. Nails are immersed in warm oil and lotion, then wrapped in electric mitts. Our basic manicure follows.</em></span>
                            </div>
                        </td>
                        <td className="column-block menu-price">
                            <span>18</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
export default NaturalNailCare;