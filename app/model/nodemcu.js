'use strict';
 
module.exports = app => {
    const { INTEGER, DATE, FLOAT } = app.Sequelize;
    const NodeMcu = app.model.define('test', {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        temperature: FLOAT(30),
        humidity: FLOAT(30),
        /* created_at: {
            type: DATE,
            defaultValue: app.Sequelize.NOW,
            allowNull: false
        },
        updated_at: {
            type: DATE,
            defaultValue: app.Sequelize.NOW,
            allowNull: false
        } */
    },{
        tableName: 'test',
        timestamps: true
    })
    return NodeMcu;
};