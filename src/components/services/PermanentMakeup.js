import React from 'react';

const PermanentMakeup = () => {
    return (
        <div className="menu-bot smaller-menu">
            <h5 className="services-sub">PERMANENT MAKEUP</h5>
            <table className="table-menu">
                <tbody>
                    <tr>
                        <td className="column-block">
                            <div>
                                <strong className="menu menu-title">Eyebrows</strong>
                            </div>
                        </td>
                        <td className="column-block menu-price small-menu-text-left">
                            <span>250</span>
                        </td>
                    </tr>
                    <tr>
                        <td className="column-block">
                            <div>
                                <strong className="menu menu-title">Eyebrows Hairstroke</strong>
                            </div>
                        </td>
                        <td className="column-block menu-price small-menu-text-left">
                            <span>350</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
export default PermanentMakeup;