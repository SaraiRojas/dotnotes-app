module.exports = model;

function model (sequelize, DataTypes) {
    const alias = 'Note';
    const cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: true,
            defaultValue: 'no content'
        },
        user_id: {
            type: DataTypes.INTEGER,
            defaultValue: null 
        }
    };
    const config = {
        tableName: 'notes',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: 'deleted_at'
    };

    const Note = sequelize.define(alias,cols,config);

    Note.associate = models => {
        Note.belongsTo(models.User, {
            as: "user",
            foreignKey: "user_id"
        });
    };

    return Note;
}