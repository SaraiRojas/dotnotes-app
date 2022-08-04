module.exports = model;

function model (sequelize, DataTypes) {
    const alias = 'User';
    const cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        user_code: {
            type: DataTypes.STRING,
            allowNull:  false
        }
    };
    const config = {
        tableName: 'users',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at'
    };

    const User = sequelize.define(alias,cols,config);

    User.associate = models => {
        User.hasMany(models.Note, {
            as: "notes",
            foreignKey: "user_id"
        });
    };

    return User;
}