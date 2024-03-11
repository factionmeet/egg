'use strict';
 
module.exports = app => {
    const { INTEGER, DATE, FLOAT } = app.Sequelize;
    const NodeMcu = app.model.define('test', {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        temperature: FLOAT(30),
        humidity: FLOAT(30),
        created_at: DATE,
        updated_at: DATE
    },{
        tableName: 'test'
    })
    return NodeMcu;
};